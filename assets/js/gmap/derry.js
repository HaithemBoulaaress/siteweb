    function createMarker(point, html) {
        var marker = new GMarker(point);
        GEvent.addListener(marker, "click", function () {
            marker.openInfoWindowHtml(html);
        });
        return marker;
    }
    function load() {
        // Display the map, with some controls and set the initial location
        var map = new GMap2(document.getElementById("map_canvas"));
        map.addControl(new GLargeMapControl());
        map.addControl(new GMapTypeControl());
        map.addMapType(G_PHYSICAL_MAP);
        map.addControl(new GScaleControl());
        map.addControl(new GOverviewMapControl());
        map.setCenter(new GLatLng(54.997312, -7.314148), 13);

        // Set up three markers with info windows

        var point = new GLatLng(54.997312, -7.314148);
        var marker = createMarker(point, '<div style="width:240px"><b>Getting there:-</h5> <b>Airport:</b> <a href="http://www.cityofderryairport.com">Derry Airport</a><br><b>Trains:</b> <a href="http://www.translink.co.uk">Derry Train Station</a><br><b>Buses:</b> <a href="http://www.ulsterbus.co.uk">Derry Bus Station</a><br><b>Driving:</b> <a href="route-planner.htm">Routes</a></div>')
        map.addOverlay(marker);
    }