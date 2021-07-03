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
    map.setMapType(G_PHYSICAL_MAP);

    // add the points
    var point = new GLatLng(55.245173, -6.502018);
    var marker = createMarker(point, "Giants Causeway, Co. Antrim<br>", "<div class=\"map-point-info\"><img src=\"images/giants-causeway-county-antrim.jpg\"><B>GIANTS CAUSEWAY</b><br><b>Description:</b> The Giants Causeway consists of more than<br> 40,000 perpendicular polygonal basalt columns, mostly<br> hexagonal in shape, tightly packed together. The causeway<br> stretches along two miles of coastline.<br><b>Visitor Centre:</b> Yes<br><b>Getting there:</b> 3.2km north of Bushmills on B146. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(54.308612, -9.448414);
    var marker = createMarker(point,
        "Ceide Fields, Co. Mayo<br>", "<div class=\"map-point-info\"><img src=\"images/ceide-fields-mayo.jpg\"><B>CEIDE FIELDS</b><br><b>Description:</b> The oldest enclosed farmland discovered<br> in the Western world (older than the Egyptian Pyramids)<br> at about 5,000 years. There are spectacular views of<br> the historic landscape and the magnificent Ceide cliffs<br> and Dun Briste sea stack.<br><b>Visitor Centre:</b> Yes<br><b>Getting there:</b> 8km west of Ballycastle, take the R314<br> coastal road from Ballina. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.120817, -9.753456);
    var marker = createMarker(point,
        "Dun Aengus, Co. Galway<br>", "<div class=\"map-point-info\"><img src=\"images/dun-aengus-aran-islands.jpg\"><B>DUN AENGUS</b><br><b>Description:</b> Dun Aengus bronze age fort dates from<br> about 1,000 B.C. Considered to be the most magnificent<br> barbaric monument in Europe, it is spectacularly located<br> at the edge of a 100 metre high cliff on the south<br> western edge of Inishmor.<br><b>Visitor Centre:</b> No<br><b>Getting there:</b> Ferries leave from Rossaveal Harbour,<br> Co. Galway and Doolin, Co. Clare.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.007347, -8.978577);
    var marker = createMarker(point, "The Burren, Co. Clare<br>", "<div class=\"map-point-info\"><img src=\"images/the-burren-national-park1.jpg\"><B>THE BURREN</b><br><b>Description:</b> Known for it’s bare exposed limestone which<br> is up to 780 metres thickness in places, The Burren spans<br> an area of 250 square km. The great slabs of rock were<br> formed in the warm shallow seas of the Carboniferous<br> ocean 340 million years ago.<br><b>Visitor Centre:</b> Yes<br><b>Getting there:</b> From Galway go to Kilcolgen, Kinvara,<br> at Bell Harbour turn to Turlough.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.941397, -9.474506);
    var marker = createMarker(point, "Cliffs of Moher, Co. Clare<br>", "<div class=\"map-point-info\"><img src=\"images/cliffs-of-moher_clare.jpg\"><B>CLIFFS OF MOHER</b><br><b>Description:</b> The cliffs rise 120 meters above the Atlantic<br> Ocean at Hag's Head, and reach their maximum height of 214<br> meters just north of O'Brien's Tower, eight kilometers away.<br> The cliffs boast one of Ireland's most spectacular views. On a<br> clear day the Aran Islands are visible in Galway Bay, as are the<br> valleys and hills of Connemara.<br><b>Visitor Centre:</b> Yes<br><b>Getting there:</b> Situated 3km north of Liscannor on the R478.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.836838, -10.401993);
    var marker = createMarker(point, "Skellig Michael, Co. Kerry<br>", "<div class=\"map-point-info\"><img src=\"images/skellig-michael_kerry.jpg\"><B>SKELLIG MICHAEL</b><br><b>Description:</b> A monastic complex, perched since about the 7th<br> century on the steep sides of the rocky island of Skellig Michael,<br> some 12 km off the coast of south-west Ireland. The moastery<br> consists of six beehive huts, two oratories and small terraces,<br> all located 714 feet above sea level, after a steep climb<br> of 600 stone steps.<br><b>Visitor Centre:</b> Yes<br><b>Getting there:</b> Ferries from Portmagee, Co. Kerry. </div>")
    map.addOverlay(marker);


    var point = new GLatLng(53.015196, -6.340485);
    var marker = createMarker(point, "Glendalough, Co. Wicklow<br>", "<div class=\"map-point-info\"><img src=\"images/glendalough-wicklow.jpg\"><B>GLENDALOUGH</b><br><b>Description:</b> Glendalough, is one of the most important<br> sites of monastic ruins in Ireland. Known as the city<br> of the seven Churches, it was founded by saint Kevin in<br> the 6th century. The combination of the stunning scenery<br> and the fascinating history make it one of the most visited<br> tourist attractions in Ireland.<br><b>Visitor Centre:</b> Yes<br><b>Getting there:</b> Take the N11 south to Kilmacanogue.<br> It is signposted from here. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.698841, -6.429062);
    var marker = createMarker(point, "Newgrange, Co. Meath<br>", "<div class=\"map-point-info\"><img src=\"images/newgrange-meath.jpg\"><B>NEWGRANGE</b><br><b>Description:</b> Foremost among the passage-tombs<br> of Europe and one of the most famous prehistoric sites<br> in the world. Newgrange is over 3000 years old. It is<br> 500 years older than the Great Pyramid of Giza.<br> The passage and chamber are illuminated by the<br> winter solstice sunrise.<br><b>Visitor Centre:</b> Yes<br><b>Getting there:</b> South of the river Boyne on the L21,<br> 2 km west of Donore. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.57569, -6.612396);
    var marker = createMarker(point, "Hill of Tara, Co. Meath<br>", "<div class=\"map-point-info\"><img src=\"images/hill-of-tara-county-meath.jpg\"><B>HILL OF TARA</b><br><b>Description:</b> In use since ca. 4000 B.C., at first as a burial<br> ground and religious center, Tara was also a center of Irish<br> kingship and a key medieval site. Nothing remains of the<br> wooden structures that once made up the hilltop's forts,<br> and houses, but the outline of the ditch and earthen rampart<br> that enclosed the site can still be seen.<br><b>Visitor Centre:</b> Yes<br><b>Getting there:</b> 12 km south of Navan off N3. </div>")
    map.addOverlay(marker);


    // put the assembled side_bar_html contents into the side_bar div
    document.getElementById("side_bar").innerHTML = side_bar_html;
}