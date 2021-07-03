var mymap = null;
var mmr;
var default_lat = 53.2734;
var default_lng = -7.77832031;
var default_zoom = 19;
var map_div = "latlongmap";

$(document).ready(function() {
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
    // var satelliteURL = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    //     satelliteAttrib = '&copy; <a href="http://www.esri.com/">Esri</a>, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
    //     satellite = L.tileLayer(satelliteURL, {maxZoom: 18, attribution: satelliteAttrib});
    hybrid = L.esri.basemapLayer('ImageryLabels');
    satellite = L.esri.basemapLayer('Imagery');
    var sHybrid = L.layerGroup([satellite, hybrid]);
    mymap = L.map(map_div, { layers: [ satellite ] });
    var	drawnItems = L.featureGroup().addTo(mymap);

    var baseLayers = {
        "Satellite": satellite,
        "Hybrid":  sHybrid,
        "Map": osm
    };
    L.control.layers(baseLayers, {}, {position: 'topright', collapsed: false}).addTo(mymap);

    var engine = new PhotonAddressEngine({
        url: 'https://photon.komoot.de',
        lang: 'en',
    });
    $('#street_address').typeahead({
        hint: true,
        highlight: true,
        minLength: 3
    }, {
        source: engine.ttAdapter(),
        displayKey: 'description'
    });
    engine.bindDefaultTypeaheadEvent($('#street_address'));
    $(engine).bind('addresspicker:predictions', showPredictions);
    $(engine).bind('addresspicker:selected', showSelected);

    function showPredictions(event, predictions) {
        if(predictions.length == 0) {
            $('#results').html('No results found');
        }
        else {
            $('#results').html('')
        }
    }

    function showSelected(event, selected) {
        chooseAddr(selected.description, selected.geometry.coordinates[1], selected.geometry.coordinates[0]);
    }
    mmr = L.marker([default_lat, default_lng], {
        draggable: "true",
    });
    mmr.addTo(mymap), sm(default_lat, default_lng), mymap.setZoom(default_zoom);

    $.when(response = getElevation(default_lat, default_lng)).then(function() {
        mmr.bindPopup(setMarkerPopupContent(default_lat, default_lng, response.responseJSON.srtm3)).openPopup();
    });

    mmr.on('moveend', function (e) {
        var lat = mmr.getLatLng().lat;
        var lng = mmr.getLatLng().lng;
        $.when(response = getElevation(lat, lng)).then(function() {
            mmr.bindPopup(setMarkerPopupContent(lat, lng, response.responseJSON.srtm3)).openPopup();
        });
    });
});
function setMarkerPopupContent(mLat, mLng, mElev) {
    var rString = '<div class="googleMap_infowindow">'
        +'<span class="info_details"><strong>Drag marker to required location.</strong></span>'
        + '<span class="info_details">Latitude:</span><span class="info_details"> <input type="text" value="'+ mLat + '" onchange="updateMarker()" id="marker-lat" /></span>'
        + '<span class="info_details">Longitude:</span><span class="info_details"> <input type="text" value="'+ mLng + '" onchange="updateMarker()" id="marker-lng" /></span>';
    if(mElev !== undefined) {
        rString += '<span class="info_details">Elevation:</span><span class="info_details">'+mElev+' m</span>';
    }
    rString += '<span class="info_details"><a style="line-height: 20px; margin-top: 7px; color: #fff !important" href="mailto:?body=See%20my%20location%20on%20this%20map%20-%20https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2F'+mLat+'+'+mLng+'%2F@'+mLat+','+mLng+',17z&subject=My%20Location" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-envelope" style="font-size: 16px; margin-right: 4px"></span>Send this location</a></span></div>';
    return rString;
}
function updateMarker() {
    var markerLat = document.getElementById("marker-lat").value;
    var markerLng = document.getElementById("marker-lng").value;
    var location = new L.LatLng(markerLat, markerLng);
    mymap.setView(location, default_zoom);

    mmr.setLatLng(location);
    $.when(response = getElevation(markerLat, markerLng)).then(function() {
        mmr.bindPopup(setMarkerPopupContent(markerLat, markerLng, response.responseJSON.srtm3)).openPopup();
    });
}
function getElevation(lat, lng) {
    return $.ajax({
        url: 'https://secure.geonames.org/srtm3JSON?lat='+lat+'&lng='+lng+'&username=galwayireland',
        dataType: 'json',
    });
}
// function codeAddress(e) {
//     e.preventDefault && e.preventDefault();
//     var t = document.getElementById("street_address").value;
// 	if("" === t) {
// 		alert("Address can not be empty!")
// 	}
// 	else {
// 		$.getJSON('https://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + t, function(data) {
// 			var items = [];
//
// 			$.each(data, function(key, val) {
// 				bb = val.boundingbox;
// 				items.push("<li><a href='#' onclick='chooseAddr(" + "\"" + val.display_name + "\"" + ", " + bb[0] + ", " + bb[2] + ", " + bb[1] + ", " + bb[3]  + ", \"" + val.osm_type + "\");return false;'>" + val.display_name + '</a></li>');
// 			});
//
// 			$('#results').empty();
// 			if (items.length != 0) {
// 				$('<ul/>', {
// 					'class': 'result-list',
// 					html: items.join('')
// 				}).appendTo('#results');
// 				$("#street_address").removeClass('loading');
// 			} else {
// 				$('<p>', { html: "No results found" }).appendTo('#results');
// 			}
// 		});
// 	}
// }

function chooseAddr(address, lat, lng) {
    var location = new L.LatLng(lat, lng);
    mymap.setView(location, default_zoom);

    mmr.setLatLng(location);
    $.when(response = getElevation(lat, lng)).then(function() {
        mmr.bindPopup(setMarkerPopupContent(lat, lng, response.responseJSON.srtm3)).openPopup();
    });

    document.getElementById("street_address").value = address;
    // document.getElementById("results").innerHTML = "";
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    var location = new L.LatLng(position.coords.latitude, position.coords.longitude);
    mymap.setView(location, default_zoom);

    mmr.setLatLng(location);
    $.when(response = getElevation(position.coords.latitude, position.coords.longitude)).then(function() {
        mmr.bindPopup(setMarkerPopupContent(position.coords.latitude, position.coords.longitude, response.responseJSON.srtm3)).openPopup();
    });
}
function sm(t, e) {
    setui(t, e), mmr.setLatLng(L.latLng(t, e)), mymap.setView([t, e], 12)
}

function setui(t, e) {
    t = Number(t).toFixed(6), e = Number(e).toFixed(6),
        mmr.setPopupContent(t + "," + e).openPopup()
}

