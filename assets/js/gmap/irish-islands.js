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

    var point = new GLatLng(55.267087, -8.227386);
    var marker = createMarker(point, "Tory Island, Co. Donegal<br>", "<div class=\"map-point-info\"><img src=\"images/tory-island-donegal.jpg\"><B>TORY ISLAND </b><br><b>Island size:</b> 3 km by 1.5 km.<br><b>Orientation:</b> 9 miles north west of Bunbeg,<br> in the north west of Ireland.<br><b>Getting there:</b> Ferries from Bunbeg and Magheraroarty. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.9916, -8.528652);
    var marker = createMarker(point, "Arranmore, Co. Donegal<br>", "<div class=\"map-point-info\"><img src=\"images/arranmore-donegal.jpg\"><B>ARRANMORE </b><br><b>Island size:</b> 5 km by 3 km.<br><b>Orientation:</b> 3 km west of Burtonport, Co. Donegal<br><b>Getting there:</b> Ferries from Burtonport harbour. </div>")
    map.addOverlay(marker);


    var point = new GLatLng(53.985973, -10.085449);
    var marker = createMarker(point, "Achill Island, Co. Mayo<br>", "<div class=\"map-point-info\"><img src=\"images/achill-island-mayo.jpg\"><B>ACHILL ISLAND </b><br><b>Island size:</b> 20 km by 19 km.<br><b>Orientation:</b> Off the west coast of Co. Mayo<br><b>Getting there:</b> By roadbridge at Achill Sound. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.795784, -10.022278);
    var marker = createMarker(point, "Clare Island, Co. Mayo<br>", "<div class=\"map-point-info\"><img src=\"images/clare-island-mayo.jpg\"><B>CLARE ISLAND </b><br><b>Island size:</b> 8 km by 4 km.<br><b>Orientation:</b> Clew Bay, Co. Mayo<br><b>Getting there:</b> Ferries from Louisburgh. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.704328, -10.113087);
    var marker = createMarker(point, "Inishturk, Co. Mayo<br>", "<div class=\"map-point-info\"><img src=\"images/inishturk-mayo.jpg\"><B>INISHTURK </b><br><b>Island size:</b> 5 km by 2.5 km.<br><b>Orientation:</b> 20 km north west of from Cleggan.<br><b>Getting there:</b> Ferries from Roonagh Co. Mayo<br> and Cleggan Co. Galway. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.622245, -10.220718);
    var marker = createMarker(point, "Inishbofin, Co. Galway<br>", "<div class=\"map-point-info\"><img src=\"images/inishbofin-island-galway.jpg\"><B>INISHBOFIN </b><br><b>Island size:</b> 3 km by 4.5 km.<br><b>Orientation:</b> 8km from Cleggan, in north Connemara<br><b>Getting there:</b> Ferries from Cleggan. <br>")
    map.addOverlay(marker);


    var point = new GLatLng(53.139563, -9.782639);
    var marker = createMarker(point, "Inish Mor, Co. Galway<br>", "<div class=\"map-point-info\"><img src=\"images/inish_mor-island-galway.jpg\"><B>INISH MOR </b><br><b>Island size:</b> 15 km by 4 km.<br><b>Orientation:</b> Northernmost Aran Island,<br> situated at the mouth of Galway Bay<br><b>Getting there:</b> Ferries from Rossaveal,<br> Co. Galway and Doolin, Co. Clare. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.088251, -9.587288);
    var marker = createMarker(point, "Inish Meain, Co. Galway<br>", "<div class=\"map-point-info\"><img src=\"images/inish-meain-island-galway.jpg\"><B>INISH MEAIN </b><br><b>Island size:</b> 4 km by 2.5 km.<br><b>Orientation:</b> The central Aran Island,<br> situated at the mouth of Galway Bay<br><b>Getting there:</b> Ferries from Rossaveal,<br> Co. Galway and Doolin, Co. Clare. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.058961, -9.510555);
    var marker = createMarker(point, "Inish Oirr, Co. Galway<br>", "<div class=\"map-point-info\"><img src=\"images/inish-oirr-island-galway.jpg\"><B>INISH OIRR </b><br><b>Island size:</b> 3 km by 2 km.<br><b>Orientation:</b> Southernmost Aran Island,<br> situated at the mouth of Galway Bay<br><b>Getting there:</b> Ferries from Rossaveal,<br> Co. Galway and Doolin, Co. Clare. </div>")
    map.addOverlay(marker);


    var point = new GLatLng(51.909332, -10.343285);
    var marker = createMarker(point, "Valentia Island, Co. Kerry <br>", "<div class=\"map-point-info\"><img src=\"images/valentia-island-kerry.jpg\"><B>VALENTIA ISLAND </b><br><b>Island size:</b> 11 km by 3 km.<br><b>Orientation:</b> South west of Co. Kerry<br><b>Getting there:</b> Via a bridge from Portmagee<br> or ferries from Caherciveen, Co. Kerry. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.734471, -10.253334);
    var marker = createMarker(point, "The Skelligs, Co. Kerry<br>", "<div class=\"map-point-info\"><img src=\"images/the-skelligs-kerry.jpg\"><B>THE SKELLIGS </b><br><b>Island size:</b> Both Skellig Michael & Little<br> Skellig less than 1 km squared.<br><b>Orientation:</b> Lies 11.6 km off Bolus Head,<br> the westernmost tip of the Iveragh Peninsula.<br><b>Getting there:</b> Ferries from Portmagee, Co. Kerry. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.09016, -10.549278);
    var marker = createMarker(point, "Great Blasket, Co. Kerry<br>", "<div class=\"map-point-info\"><img src=\"images/great-blasket-kerry.jpg\"><B>GREAT BLASKET ISLAND </b><br><b>Island size:</b> 6 km by 2 km.<br><b>Orientation:</b> 2 km from the mainland<br> at Dunmore Head, Co. Kerry.<br><b>Getting there:</b> Ferries from Dunquin, Co. Kerry. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.603305, -10.17437);
    var marker = createMarker(point, "Dursey Island, Co. Cork<br>", "<div class=\"map-point-info\"><img src=\"images/dursey-island-cork.jpg\"><B>DURSEY ISLAND </b><br><b>Island size:</b> 7 km by 5 km.<br><b>Orientation:</b> Just over 200 Meters from Dursey<br><b>Getting there:</b> Cable Car from Dursey. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.438387, -9.500771);
    var marker = createMarker(point, "Cape Clear, Co. Cork<br>", "<div class=\"map-point-info\"><img src=\"images/cape-clear-cork.jpg\"><B>CAPE CLEAR </b><br><b>Island size:</b> 4.8 km by 1.7 km.<br><b>Orientation:</b> 9.5 km from Baltimore<br><b>Getting there:</b> Ferries from Baltimore<br> and Schull, Co. Cork. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.634001, -9.845467);
    var marker = createMarker(point, "Bere Island, Co. Cork<br>", "<div class=\"map-point-info\"><img src=\"images/bere-island-cork.jpg\"><B>BERE ISLAND </b><br><b>Island size:</b> 5 km by 3 km.<br><b>Orientation:</b> 1 km from Castletownbere, Co. Cork<br><b>Getting there:</b> Ferries from Castletownbere. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.479459, -9.403439);
    var marker = createMarker(point, "Sherkin Island, Co. Cork<br>", "<div class=\"map-point-info\"><img src=\"images/sherkin-island-cork.jpg\"><B>SHERKIN ISLAND </b><br><b>Island size:</b> 3km by 1.5 km.<br><b>Orientation:</b> 2 km south west of Baltimore<br><b>Getting there:</b> Ferries from Baltimore<br> and Schull, Co. Cork. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.739467, -9.535532);
    var marker = createMarker(point, "Garinish Island, Co. Cork<br>", "<div class=\"map-point-info\"><img src=\"images/garinish-island-cork.jpg\"><B>GARINISH ISLAND </b><br><b>Island size:</b> Less than 1 km squared.<br><b>Orientation:</b> At the mouth of Glengarriff harbour<br><b>Getting there:</b> Ferries from Glengarriff, Co. Cork.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.690117, -9.497509);
    var marker = createMarker(point, "Whiddy Island. Co. Cork<br>", "<div class=\"map-point-info\"><img src=\"images/whiddy-island-cork.jpg\"><B>WHIDDY ISLAND </b><br><b>Island size:</b> 5 km by 3 km.<br><b>Orientation:</b> Bantry Bay<br><b>Getting there:</b> Ferries from Bantry, Co. Cork. </div>")
    map.addOverlay(marker);

    // put the assembled side_bar_html contents into the side_bar div
    document.getElementById("side_bar").innerHTML = side_bar_html;
}