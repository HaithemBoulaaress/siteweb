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

    // add the points

    var point = new GLatLng(53.176103, -6.654453);
    var marker = createMarker(point, "Oxegen<br>", "<div class=\"map-point-info\"><B>OXEGEN</b><br><b>Description:</b> Ireland’s largest rock festival.<br><b>Venue:</b> Punchestown Racecourse, Co. Kildare.<br><b>Duration:</b> Weekend, 2 nights.<br><b>Date:</b> Early / Mid July.<div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.007554, -7.138023);
    var marker = createMarker(point, "Electric Picnic<br>", "<div class=\"map-point-info\"><B>ELECTRIC PICNIC</b><br><b>Description:</b> Ireland’s most popular<br> boutique music festival.<br><b>Venue:</b> Stradbally Estate, Co. Laois.<br><b>Duration:</b> Weekend, 3 nights.<br><b>Date:</b> Early September.</div>")
    map.addOverlay(marker);


    var point = new GLatLng(53.470883, -7.374916);
    var marker = createMarker(point, "The Garden Party<br>", "<div class=\"map-point-info\"><B>THE GARDEN PARTY</b><br><b>Description:</b> Country western music festival.<br><b>Venue:</b> Belvedere House, Mullingar, Co. Westmeath.<br><b>Duration:</b> Weekend, 2 nights.<br><b>Date:</b> Late July. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.470883, -7.374916);
    var marker = createMarker(point, "Midlands Music Festival<br>", "<div class=\"map-point-info\"><B>MIDLAND MUSIC FESTIVAL</b><br><b>Description:</b> Ireland’s largest rock festival.<br><b>Venue:</b> Punchestown Racecourse, Co. Kildare.<br><b>Duration:</b> Weekend, 2 nights.<br><b>Date:</b> Early / Mid July.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.680233, -9.649687);
    var marker = createMarker(point, "Cois Fharraige<br>", "<div class=\"map-point-info\"><B>COIS FHARRAIGE</b><br><b>Description:</b> Surf and rock music festival.<br><b>Venue:</b> Adjoining Kilkee strand, Co. Clare.<br><b>Duration:</b> Weekend, 3 nights.<br><b>Date:</b> Early / Mid September.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.26665, -7.514992);
    var marker = createMarker(point, "Castlepalooza<br>", "<div class=\"map-point-info\"><B>CASTLEPALOOZA</b><br><b>Description:</b> Small midland music festival.<br><b>Venue:</b> Charleville Castle, Tullamore, Co. Offaly.<br><b>Duration:</b> Weekend, 2 nights.<br><b>Date:</b> August bank holiday.</div>")
    map.addOverlay(marker);


    var point = new GLatLng(53.856146, -9.299412);
    var marker = createMarker(point, "Castlebar Blues Festival<br>", "<div class=\"map-point-info\"><B>CASTLEBAR BLUES FESTIVAL</b><br><b>Description:</b> Longest running Irish blues festival.<br><b>Venues:</b> Thoughout Castlebar town.<br><b>Duration:</b> Weekend, 3 nights.<br><b>Date:</b> June bank holiday.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.270437, -8.474836);
    var marker = createMarker(point, "Sligo Live Festival<br>", "<div class=\"map-point-info\"><B>SLIGO LIVE</b><br><b>Description:</b> Irish and international music festival.<br><b>Venues:</b> Throughout Sligo town.<br><b>Duration:</b> Week long.<br><b>Date:</b> Last week in October.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.502122, -8.190651);
    var marker = createMarker(point, "Rory Gallagher Festival<br>", "<div class=\"map-point-info\"><B>RORY GALLAGHER FESTIVAL</b><br><b>Description:</b> World's biggest gathering<br> of Rock and Blues fans in Rory Gallagher’s<br> hometown.<br><b>Venues:</b> Rory Gallagher Theatre, hotels<br> and pubs throughout Ballyshannon.<br><b>Duration:</b> 4 Nights.<br><b>Date:</b> Late May / Early June.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.856227, -9.400864);
    var marker = createMarker(point, "Willie Clancy Summer School<br>", "<div class=\"map-point-info\"><B>WILLIE CLANCY FESTIVAL</b><br><b>Description:</b> Ireland's largest traditional<br> music summer school & festival.<br><b>Venues:</b> Community centres, hotels<br> and pubs throughout Miltown Malbay.<br><b>Duration:</b> Week long.<br><b>Date:</b> Mid July.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.060275, -9.51004);
    var marker = createMarker(point, "The Gathering<br>", "<div class=\"map-point-info\"><B>THE GATHERING FESTIVAL</b><br><b>Description:</b> One of the biggest festivals<br> on the traditional music events calendar.<br><b>Venues:</b> Theatres, hotels, pubs<br> and clubs throughout Killarney.<br><b>Duration:</b> 5 nights.<br><b>Date:</b> Mid February.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.898555, -8.47563);
    var marker = createMarker(point, "Cork Jazz Festival<br>", "<div class=\"map-point-info\"><B>CORK JAZZ FESTIVAL</b><br><b>Description:</b> Ireland’s most famous festival of Jazz.<br><b>Venues:</b> Theatres, hotels, pubs and clubs<br> throughout Cork city.<br><b>Duration:</b> Weekend, 4 nights.<br><b>Date:</b> Last weekend in October.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.357046, -6.582527);
    var marker = createMarker(point, "Wexford Opera Festival<br>", "<div class=\"map-point-info\"><B>WEXFORD OPERA FESTIVAL</b><br><b>Description:</b> One of the finest opera festivals in Europe.<br><b>Venue:</b> Johnstown Castle Estate, Co. Wexford.<br><b>Duration:</b> Weekend, 2 nights.<br><b>Date:</b> Mid October - Early November.</div>")
    map.addOverlay(marker);


    var point = new GLatLng(52.149554, -6.994386);
    var marker = createMarker(point, "Dunmore East Bluegrass<br>", "<div class=\"map-point-info\"><B>DUNMORE EAST BLUEGRASS</b><br><b>Description:</b> Bluegrass and country music festival.<br><b>Venues:</b> Throughout Dunmore East, Co. Waterford.<br><b>Duration:</b> Weekend, 4 nights.<br><b>Date:</b> Late August.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.653869, -7.250419);
    var marker = createMarker(point, "Kilkenny Cat Laughs<br>", "<div class=\"map-point-info\"><B>KILKENNY CAT LAUGHS</b><br><b>Description:</b> Ireland’s premier international<br> comedy festival.<br><b>Venues:</b> Throughout Kilkenny City.<br><b>Duration:</b> Weekend, 3 nights.<br><b>Date:</b> Late May / Early June.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.34717, -6.228991);
    var marker = createMarker(point, "Bulmers Comedy<br>", "<div class=\"map-point-info\"><B>BULMERS COMEDY</b><br><b>Description:</b> High profile Dublin comedy festival.<br><b>Venues:</b> Point Depot, Olympia Theatre and more.<br><b>Duration:</b> Weekend, 2 nights.<br><b>Date:</b> Early / Mid September.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.601356, -5.918412);
    var marker = createMarker(point, "Magners Big Tickle<br>", "<div class=\"map-point-info\"><B>MAGNERS BIG TICKLE</b><br><b>Description:</b> Northern Ireland’s largest comedy<br> festival.<br><b>Venues:</b> Odyssey Pavilion and many more<br> throughout Belfast City.<br><b>Duration:</b> 10 nights.<br><b>Date:</b> Early / Mid September.</div>")
    map.addOverlay(marker);


    // put the assembled side_bar_html contents into the side_bar div
    document.getElementById("side_bar").innerHTML = side_bar_html;
}