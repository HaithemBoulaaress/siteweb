//<![CDATA[

if (GBrowserIsCompatible()) {

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
    var point = new GLatLng(55.230002, -7.791538);
    var marker = createMarker(point, "Downings, Co. Donegal <br>","<div class=\"map-point-info\"><b>DOWNINGS</b><br><b>INFO:</b> Little wave potential <br>but great blasting.<br><b>TYPE:</b> Beach <br><b>BEST WIND:</b> South westerly<br><b>BEST TIDE:</b> All</div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.265725, -8.611221);
    var marker = createMarker(point, "Strandhill, Co. Sligo <br>","<div class=\"map-point-info\"><b>STRANDHILL</b><br><b>INFO:</b> 8 km west of Sligo Town, the beach<br> has a river mouth to the south and is<br> exposed to strong winds.<br><b>TYPE:</b> Beach <br><b>BEST WIND:</b> Easterly<br><b>BEST TIDE:</b> All</div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.162836, -10.06691);
    var marker = createMarker(point, "Belmullet, Co. Mayo <br>","<div class=\"map-point-info\"><B>BELMULLET</b><br><b>INFO:</b> Home to Colaiste Uisce, Ely Bay <br>has good conditions for slalom. <br>The Atlantic side takes the <br>brunt of the ocean swell.<br> <b>TYPE:</b> Beach<br><b>BEST WIND:</b> Westerly<br><b>BEST TIDE:</b> All</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.981329, -10.05867);
    var marker = createMarker(point, "Keel, Achill Island <br>","<div class=\"map-point-info\"><B>KEEL LAKE & BEACH</b><br><b>INFO:</b> Excellent speed sailing on<br> lake. Winds in Keel can get very <br>strong so smaller sails recommended. <br><b>TYPE:</b> Lake & Beach<br><b>BEST WIND:</b> South westerly<br><b>BEST TIDE:</b> All</div>")
    map.addOverlay(marker);


    var point = new GLatLng(53.379642, -9.958162);
    var marker = createMarker(point, "Roundstone, Co. Galway <br>","<div class=\"map-point-info\"><B>ROUNDSTONE</b><br><b>INFO:</b> Idyllic white sandy beach. <br>Dogs Bay has nice waves and a <br>close chop. Gorteen bay has <br>strong winds and dead flat <br>water, a perfect slalom spot. <br> <b>TYPE:</b> Beach<br><b>BEST WIND:</b> South westerly<br><b>BEST TIDE:</b> All</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.25687, -9.121184);
    var marker = createMarker(point, "Rusheen Bay, Galway City <br>","<div class=\"map-point-info\"><B>RUSHEEN BAY</b><br><b>INFO:</b> In an enclosed bay, <br>Rusheen is ideal for beginners, <br>with calm waters and <br>prevailing cross-onshore winds. <br> <b>TYPE:</b> Salt Marsh<br><b>BEST WIND:</b> Southerly<br><b>BEST TIDE:</b> Mid-high</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.24416, -8.965616);
    var marker = createMarker(point, "Rinville, Co. Galway <br>","<div class=\"map-point-info\"><B>RINVILLE</b><br><b>INFO:</b> A small inlet in east Galway Bay.<br> Good slalom sailing and ideal launching from<br> the yacht club.<br> <b>TYPE:</b> Harbour<br><b>BEST WIND:</b> South westerly<br><b>BEST TIDE:</b> Mid-high</div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.259963, -10.061417);
    var marker = createMarker(point, "Brandon Bay, Co. Kerry <br>","<div class=\"map-point-info\"><B>BRANDON BAY</b><br><b>INFO:</b> Horse-shoe shaped beach.<br>Takes almost all wind and <br>swell directions. Waves known<br>to reach twice mast high size. <br> <b>TYPE:</b> Beach<br><b>BEST WIND:</b> All<br><b>BEST TIDE:</b> All</div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.135069, -10.289383);
    var marker = createMarker(point, "An Daingean, Co. Kerry <br>","<div class=\"map-point-info\"><B>AN DAINGEAN</b><br><b>INFO:</b> Nice spot to sail, if only<br> for Fungi the dolphin, as she<br>likes to play with windsurfers.<br> <b>TYPE:</b> Harbour<br><b>BEST WIND:</b> South westerly<br><b>BEST TIDE:</b> All</div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.123898, -9.95533);
    var marker = createMarker(point, "Inch Strand, Co. Kerry<br>","<div class=\"map-point-info\"><B>INCH STRAND</b><br><b>INFO:</b> Inch strand extends 4<br>miles out to sea. Water<br> recedes by a mile at low tide.<br> <b>TYPE:</b> Beach<br><b>BEST WIND:</b> Westerly<br><b>BEST TIDE:</b> Mid-high</div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.69714,  -8.44883);
    var marker = createMarker(point, "Oysterhaven, Co. Cork <br>","<div class=\"map-point-info\"><B>OYSTERHAVEN</b><br><b>INFO:</b> A sheltered bay, ideal<br>for beginners<br> <b>TYPE:</b> Estuary<br><b>BEST WIND:</b> South easterly<br><b>BEST TIDE:</b> All")
    map.addOverlay(marker);

    var point = new GLatLng(52.081932, -7.586746);
    var marker = createMarker(point, "Dungarvan, Co. Waterford <br>","<div class=\"map-point-info\"><B>DUNGARVAN</b><br><b>INFO:</b> In a sheltered inlet, can<br> be great when the wind is<br> very strong with nice flat water.<br> <b>TYPE:</b> Beach<br><b>BEST WIND:</b> Southerly<br><b>BEST TIDE:</b> Mid-high</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.296055, -6.151292);
    var marker = createMarker(point, "Seapoint, Co. Dublin <br>","<div class=\"map-point-info\"><B>SEAPOINT</b><br><b>INFO:</b> Mainly slalom sailing. Chop<br> is short and knee jerking<br> at times but gets flatter in<br> shelter of the west pier. <br> <b>TYPE:</b> Beach<br><b>BEST WIND:</b> South westerly<br><b>BEST TIDE:</b> Mid</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.37104, -6.136551);
    var marker = createMarker(point, "Dollymount, Dublin City <br>","<div class=\"map-point-info\"><B>DOLLYMOUNT</b><br><b>INFO:</b> Long sandy beach with<br>shallow water, short drive from<br> Dublin city.<br> <b>TYPE:</b> Beach<br><b>BEST WIND:</b> South westerly<br><b>BEST TIDE:</b> Mid</div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.058683, -6.102219);
    var marker = createMarker(point, "Cranfield West, Co. Down <br>","<div class=\"map-point-info\"><B>CRANFIELD WEST</b><br><b>INFO:</b> Gently sloping, mainly<br> sandy beach, extensive at <br>low-tide. <br> <b>TYPE:</b> Beach<br><b>BEST WIND:</b> South westerly<br><b>BEST TIDE:</b> High</div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.236742, -5.850906);
    var marker = createMarker(point, "Tyrella, Co. Down <br>","<div class=\"map-point-info\"><B>TYRELLA</b><br><b>INFO:</b> Wide, flat, sandy beach<br> 2km long. Backed by dunes in a <br>conservation area within<br>Dundrum Bay.<br> <b>TYPE:</b> Beach<br><b>BEST WIND:</b> South easterly<br><b>BEST TIDE:</b> Mid-high</div>")
    map.addOverlay(marker);

    var point = new GLatLng(55.169456, -6.753845);
    var marker = createMarker(point, "Portstewart, Co. Derry <br>","<div class=\"map-point-info\"><B>PORTSTEWART</b><br><b>INFO:</b> 3km of white sandy beach<br> and an important dune system<br> on the Atlantic coast.<br> <b>TYPE:</b> Beach<br><b>BEST WIND:</b> South westerly<br><b>BEST TIDE:</b> All</div>")
    map.addOverlay(marker);

    var point = new GLatLng(55.160043,  -6.963272);
    var marker = createMarker(point, "Benone Strand, Co. Derry <br>","<div class=\"map-point-info\"><B>BENONE STRAND</b><br><b>INFO:</b> 11 km beach from Downhill to<br> Magilligan Point, backed by sand dunes<br> and 750ft (229m) cliffs.<br> <b>TYPE:</b> Beach<br><b>BEST WIND:</b> Easterly<br><b>BEST TIDE:</b> Low-mid</div>")
    map.addOverlay(marker);





    // put the assembled side_bar_html contents into the side_bar div
    document.getElementById("side_bar").innerHTML = side_bar_html;

}

else {
    alert("Sorry, the Google Maps API is not compatible with this browser");
}