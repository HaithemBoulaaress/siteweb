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
    var myIcon = new GIcon(G_DEFAULT_ICON, "https://maps.google.com/mapfiles/marker" + letter + ".png");
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
    map.setMapType(G_PHYSICAL_MAP);

    // add the points
    var point = new GLatLng(55.0563, -8.0186);
    var marker = createMarker(point,
        "Glenveagh National Park<br>", "<div class=\"map-point-info\"><img src=\"images/glenveagh-national-park.jpg\"><b>GLENVEAGH</b><br><b>AREA:</b> Over 14,000 acres<br><b>MOUNTAINS:</b> Errigal (752m), Slieve Snaght (683m)<br><b>WOODLAND:</b> Scots pine, birch, oak, hazel, alder<br><b>ANIMALS:</b> Red deer, fox, badger, mountain hare, otter, bat<br><b>BIRDS:</b> Golden Eagle, golden plover, peregrine falcon<br><b>FEATURES:</b> Glenveagh Estate, Lough Veagh</b></div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.031167, -9.807358);
    var marker = createMarker(point, "Ballycroy National Park<br>", "<div class=\"map-point-info\"><div class=\"map-point-info\"><img src=\"images/ballycroy-national-park.jpg\"><b>BALLYCROY</b><br><b>AREA:</b> 11,000 hectares<br><b>MOUNTAINS:</b> Nephin Beg (627m), Slieve Carr (721m)<br><b>ANIMALS:</b> Mountain hare, otter, feral mink, pygmy shrew, bat<br><b>BIRDS:</b> Dipper, sandpiper, woodcock, skylark, red grouse<br><b>FEATURE:</b> Owenduff blanket bog</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.5525, -9.9399);
    var marker = createMarker(point, "Connemara National Park<br>", "<div class=\"map-point-info\"><img src=\"images/connemara-national-park.jpg\"><b>CONNEMARA</b><br><b>AREA:</b> 2,957 hectares<br><b>MOUNTAINS:</b> Twelve Bens, Beanna Beola range<br><b>ANIMALS:</b> Stoat, shrew, pine marten, connemara pony<br><b>BIRDS:</b> Kestrel, sparrowhawk, merlin, peregrine falcon<br><b>FEATURE:</b> Kylemore Abbey Estate</div>")
    map.addOverlay(marker);


    var point = new GLatLng(53.0218, -9.0558);
    var marker = createMarker(point, "The Burren National Park<br>", "<div class=\"map-point-info\"><img src=\"images/the-burren-national-park2.jpg\"><b>THE BURREN</b><br><b>AREA:</b> 1500 hectares<br><b>MONUMENTS:</b> Caherconnell Stone Fort, Poulnabrone Dolmen<br><b>ANIMALS:</b> Feral goat, pine marten, stoat, bank vole, pygmy shrew<br><b>BIRDS:</b> Finches, tits, warblers, curlew, lapwing, plover<br><b>FEATURES:</b> Turloughs, Petrifying springs, rich floral species</div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.0622, -9.5354);
    var marker = createMarker(point, "Killarney National Park<br>", "<div class=\"map-point-info\"><img src=\"images/killarney_national_park.jpg\"><b>KILLARNEY</b><br><b>AREA:</b> 10,236 hectare<br><b>MOUNTAINS:</b> McGillycuddy's Reeks, Carrantouhill (1,039m)<br><b>WOODLAND:</b> oak, hazel<br><b>ANIMALS:</b> Red deer, mountain hare, otter, bat<br><b>BIRDS:</b> Ring Ouzel, chough, nightjar, osprey<br><b>FEATURE:</b> Muckross House</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.0491, -6.3937);
    var marker = createMarker(point, "Wicklow Mts National Park<br>", "<div class=\"map-point-info\"><img src=\"images/wicklow-mountains-national-park.jpg\"><b>WICKLOW MOUNTAINS</b><br><b>AREA:</b> 17,650 hectares<br><b>MOUNTAINS:</b> Lugnaquilla (926m), Mullaghcleevaun (847m)<br><b>WOODLAND:</b> Oak, conifer<br><b>ANIMALS:</b> Sika Deer<br><b>BIRDS:</b> Merlin, hen harrier, kestrel<br><b>FEATURES:</b> Glendalough monastic settlement</div>")
    map.addOverlay(marker);


    // put the assembled side_bar_html contents into the side_bar div
    document.getElementById("side_bar").innerHTML = side_bar_html;
}