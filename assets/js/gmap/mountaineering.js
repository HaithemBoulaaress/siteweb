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
    var myIcon = new GIcon(G_DEFAULT_ICON, "https://maps.google.com/mapfiles/marker" + letter + ".png");
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

    var point = new GLatLng(55.045779, -6.156302);
    var marker = createMarker(point, "Antrim Hills<br>", "<div class=\"map-point-info\"><img src=\"images/antrim-hills.jpg\"><B>ANTRIM HILLS</b><br><b>County:</b> Antrim<br><b>Highest Peak:</b> Trostan<br><b>Height:</b> 550 metres<br><b>Geology:</b> Basalt (Tertiary) <br><b>Mountains in Area:</b> 17 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.313847, -8.522738);
    var marker = createMarker(point, "Ballyhoura Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/ballyhoura-mountains.jpg\"><B>BALLYHOURA MOUNTAINS</b><br><b>County:</b> Limerick<br><b>Highest Peak:</b> Seefin Mountain<br><b>Height:</b> 528 metres<br><b>Geology:</b> Sandstone & Shale (Silurian)<br><b>Mountains in Area:</b> 7 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.617846, -6.779721);
    var marker = createMarker(point, "Blackstairs Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/blackstairs-mountains.jpg\"><B>BLACKSTAIRS MOUNTAINS</b><br><b>Counties:</b> Carlow / Wexford<br><b>Highest Peak:</b> Mount Leinster<br><b>Height:</b> 795 metres<br><b>Geology:</b> Granite (Devonian) <br><b>Mountains in Area:</b> 12 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.754306, -8.081544);
    var marker = createMarker(point, "Bluestack Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/bluestack-mountains.jpg\"><B>BLUESTACK MOUNTAINS</b><br><b>County:</b> Donegal<br><b>Highest Peak:</b> Croaghgorm<br><b>Height:</b> 674 metres<br><b>Geology:</b> Schist, Gneiss & Quartzite (Precambrian) <br><b>Mountains in Area:</b> 34 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.201719, -7.812298);
    var marker = createMarker(point, "Breifne Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/breifne-mountains.jpg\"><B>BREIFNE MOUNTAINS</b><br><b>Counties:</b> Cavan / Fermanagh<br><b>Highest Peak:</b> Cuilcagh<br><b>Height:</b> 665 metres<br><b>Geology:</b> Limestone (Carboniferous) <br><b>Mountains in Area:</b> 12 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.686622, -9.792306);
    var marker = createMarker(point, "Caha Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/caha-mountains.jpg\"><B>CAHA MOUNTAINS</b><br><b>County:</b> Cork<br><b>Highest Peak:</b> Hungry Hill<br><b>Height:</b> 645 metres<br><b>Geology:</b> Sandstone (Devonian) <br><b>Mountains in Area:</b> 45 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.043998, -6.216204);
    var marker = createMarker(point, "Cooley Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/cooley-mountains.jpg\"><B>COOLEY MOUNTAINS</b><br><b>County:</b> Armagh / Louth<br><b>Highest Peak:</b> Slieve Foye<br><b>Height:</b> 589 metres<br><b>Geology:</b> Granite & Gabbro (Tertiary) <br><b>Mountains in Area:</b> 10 </div>")
    map.addOverlay(marker);


    var point = new GLatLng(54.373777, -8.371604);
    var marker = createMarker(point, "Dartry Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/dartry-mountains.jpg\"><B>DARTRY MOUNTAINS</b><br><b>Counties:</b> Sligo / Leitrim<br><b>Highest Peak:</b> Truskmore<br><b>Height:</b> 647 metres<br><b>Geology:</b> Sandstone & Shale (Carboniferous) <br><b>Mountains in Area:</b> 27 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(55.033639, -8.113388);
    var marker = createMarker(point, "Derryveagh Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/derryveagh-mountains.jpg\"><B>DERRYVEAGH MOUNTAINS</b><br><b>County:</b> Donegal<br><b>Highest Peak:</b> Errigal<br><b>Height:</b> 751 metres<br><b>Geology:</b> Granite (Devonian) <br><b>Mountains in Area:</b> 34 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.177642, -6.331634);
    var marker = createMarker(point, "Dublin Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/dublin-mountains.jpg\"><B>DUBLIN MOUNTAINS</b><br><b>County:</b> Dublin<br><b>Highest Peak:</b> Kippure<br><b>Height:</b> 757 metres<br><b>Geology:</b> Granite (Tertiary), Sandstone & Shale (Silurian) <br><b>Mountains in Area:</b> 77 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.366092, -8.178369);
    var marker = createMarker(point, "Galty Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/galty-mountains.jpg\"><B>GALTY MOUNTAINS</b><br><b>Counties:</b> Limerick / Tipperary<br><b>Highest Peak:</b> Galtymore<br><b>Height:</b> 919 metres<br><b>Geology:</b> Sandstone & Shale (Carboniferous)<br><b>Mountains in Area:</b> 22 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.227804, -7.915857);
    var marker = createMarker(point, "Knockmealdown Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/knockmealdown-mountains.jpg\"><B>KNOCKMEALDOWN MOUNTAINS</b><br><b>County:</b> Tipperary / Waterford<br><b>Highest Peak:</b> Knockmealdown<br><b>Height:</b> 794 metres<br><b>Geology:</b> Old Red Sandstone (Devonian)<br><b>Mountains in Area:</b> 14 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.513597, -9.677025);
    var marker = createMarker(point, "Maamturks<br>", "<div class=\"map-point-info\"><img src=\"images/maamturks-connemara.jpg\"><B>MAAMTURKS</b><br><b>County:</b> Galway<br><b>Highest Peak:</b> Binn idir an dá Log<br><b>Height:</b> 702 metres<br><b>Geology:</b> Schist, Gneiss & Quartzite (Precambrian)<br><b>Mountains in Area:</b> 18 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.999246, -9.743610);
    var marker = createMarker(point, "MacGillicuddy’s Reeks<br>", "<div class=\"map-point-info\"><img src=\"images/macgillicuddys-reeks.jpg\"><B>MACGILLICUDDY'S REEKS</b><br><b>County:</b> Kerry<br><b>Highest Peak:</b> Carrauntoohil<br><b>Height:</b> 1039 metres<br><b>Geology:</b> Old Red Sandstone (Devonian) <br><b>Mountains in Area:</b> 27 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.180353, -5.922363);
    var marker = createMarker(point, "Mourne Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/mourne-mountains.jpg\"><B>MOURNE MOUNTAINS</b><br><b>County:</b> Down<br><b>Highest Peak:</b> Slieve Donard<br><b>Height:</b> 850 metres<br><b>Geology:</b> Sandstone & Shale (Ordovician) <br><b>Mountains in Area:</b> 43 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.637131, -9.831608);
    var marker = createMarker(point, "Mweelrea Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/mweelrea-mountains.jpg\"><B>MWEELREA MOUNTAINS</b><br><b>County:</b> Mayo<br><b>Highest Peak:</b> Mweelrea<br><b>Height:</b> 814 metres<br><b>Geology:</b> Sandstone & Shale (Ordovician) <br><b>Mountains in Area:</b> 6 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.194074, -8.760662);
    var marker = createMarker(point, "Ox Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/ox-mountains.jpg\"><B>OX MOUNTAINS</b><br><b>County:</b> Sligo<br><b>Highest Peak:</b> Knockalongy<br><b>Height:</b> 544 metres<br><b>Geology:</b> Schist, Gneiss & Quartzite (Precambrian)<br><b>Mountains in Area:</b> 6 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.801984, -9.443138);
    var marker = createMarker(point, "Shehy/Knockboy<br>", "<div class=\"map-point-info\"><img src=\"images/shehy-knockboy-mountains.jpg\"><B>SHEHY/KNOCKBOY</b><br><b>County:</b> Cork<br><b>Highest Peak:</b> Knockboy<br><b>Height:</b> 706 metres<br><b>Geology:</b> Sandstone (Devonian) <br><b>Mountains in Area:</b> 29 </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.040567, -7.654880);
    var marker = createMarker(point, "Slieve Blooms<br>", "<div class=\"map-point-info\"><img src=\"images/slieve-bloom-mountains.jpg\"><B>SLIEVE BLOOMS</b><br><b>Counties:</b> Laois / Offaly<br><b>Highest Peak:</b> Arderin<br><b>Height:</b> 527 metres<br><b>Geology:</b> Old Red Sandstone (Devonian), Shale (Silurian) <br><b>Mountains in Area:</b> 10 </div>")
    map.addOverlay(marker);


    var point = new GLatLng(54.819700, -7.039403);
    var marker = createMarker(point, "Sperrin Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/sperrin-mountains.jpg\"><B>SPERRIN MOUNTAINS</b><br><b>Counties:</b> Derry / Tyrone<br><b>Highest Peak:</b> Sawel<br><b>Height:</b> 678 metres<br><b>Geology:</b> Schist, Gneiss & Quartzite (Precambrian) <br><b>Mountains in Area:</b> 42 </div>")
    map.addOverlay(marker);


    var point = new GLatLng(53.521220, -9.831127);
    var marker = createMarker(point, "Twelve Bens<br>", "<div class=\"map-point-info\"><img src=\"images/twelve-bens-mountains-connemara.jpg\"><B>TWELVE BENS</b><br><b>County:</b> Galway<br><b>Highest Peak:</b> Binn Bhán<br><b>Height:</b> 729 metres<br><b>Geology:</b> Schist, Gneiss & Quartzite (Precambrian) <br><b>Mountains in Area:</b> 27 </div>")
    map.addOverlay(marker);


    var point = new GLatLng(52.966459, -6.464806);
    var marker = createMarker(point, "Wicklow Mountains<br>", "<div class=\"map-point-info\"><img src=\"images/wicklow-mountains.jpg\"><B>WICKLOW MOUNTAINS</b><br><b>County:</b> Wicklow<br><b>Highest Peak:</b> Lugnaquilla<br><b>Height:</b> 925 metres<br><b>Geology:</b> Granite (Devonian) <br><b>Mountains in Area:</b> 77 </div>")
    map.addOverlay(marker);

    // put the assembled side_bar_html contents into the side_bar div
    document.getElementById("side_bar").innerHTML = side_bar_html;
}