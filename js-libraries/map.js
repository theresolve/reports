marker_group = null;
run_animation = false;

// Add days to dates
Date.prototype.addDays = function(days) {
  var new_date = new Date(this.valueOf())
  new_date.setDate(new_date.getDate() + days);
  return new_date;
}

// Create array of dates between two dates
function getDates(start_date, stop_date) {
  var date_array = new Array();
  var current_date = start_date;
  while (current_date <= stop_date) {
    date_array.push( new Date (current_date) )
    current_date = current_date.addDays(1);
  }
  return date_array;
}

// Group data by date
function groupByDate(data) {
  var grouped_data = {};
  for (var i = 0; i < data.length; i++) {
    start_date = new Date(data[i].start_date);  
    if (grouped_data[start_date] == null) {
      grouped_data[start_date] = [data[i]]; // Create group
    } else {
      grouped_data[start_date].push(data[i]); // Add to existing group
    };
  };
  return grouped_data;
};

// Insert data into the date array  
function combineDateArrayGroupedData(date_array, grouped_data) {
  var markers = {}
  for (var i = 0; i < date_array.length; i++) {
    if (grouped_data[date_array[i]] == null) {
      markers[date_array[i]] = "Zero records";
    } else {
      markers[date_array[i]] = grouped_data[date_array[i]];
    };
  };
  return markers;
};

//convert object to array of values
function convertToArray(object) {
  var array = new Array();
  for(key in object) {
    array.push([key, object[key]])
  };
  return array
};

// Animate Markers
function animateMarkers(data, map_id) {
  if (marker_group != null) { marker_group.clearLayers(); }
  marker_group = L.layerGroup();

  var x = 0;
  // Add marker layers to marker cluster
  function animate() {
    
    if (data[x][1] != "Zero records" && data[x][1] != undefined) {
      for (var i = 0; i < data[x][1].length; i++) {
        reports = data[x][1];
        if (reports[i].latitude && reports[i].longitude) {
          marker = L.circleMarker([reports[i].latitude, reports[i].longitude], 
            { 
              stroke: true,
              color: '#fff',
              weight: 2,
              opacity: 1,
              fill: true,
              fillColor: reports[i].marker_color,
              fillOpacity: 1
            });
          marker.setRadius(6);
          marker_group.addLayer(marker);
          
          map_id.addLayer(marker_group);
        };
      };
    };
    
    $(".map-date").html(formatDate(data[x][0]))
    if (x++ < data.length) {
      if (run_animation == true) {
        setTimeout(animate, 200);
      };
    };
  };

  animate();
};

function setupAnimation(csv_url, start_date, end_date, map_id) {
  var markers = {};
  $.get(csv_url, function(data) {
    data = $.csv.toObjects(data);
    
    // Generate all dates between beginning and end of data     
    var date_array = getDates(new Date(start_date), new Date(end_date));
    
    // Group data by date
    var grouped_data = groupByDate(data);
    
    // combineDateArrayGroupedData  
    markers = combineDateArrayGroupedData(date_array, grouped_data);
    
    markers = convertToArray(markers)
    
  });
  $(".map-animate-control").click( function() {
    if (run_animation) {
      run_animation = false;
      $(".map-animate-control").html("<i class='fa fa-play'></i>");
    } else {
      run_animation = true;
      animateMarkers(markers, map_id);
      $(".map-animate-control").html("<i class='fa fa-stop'></i>");
    };
  });
};

// Variables
var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var basemap_id = 'ktransier.map-xya6pg28';

// Helper functions
function popup(point) {  
  var url = "";
  var start_date = "";
  var summary = "";
  if (point.url && point.id) {url = "<a href=" + point.url + point.id + "' target=_blank>" + point.id + "</a> | "};
  if (point.start_date) { start_date = formatDate(point.start_date) };
  if (point.summary) { summary = "<p class=map-popup-summary>" + point.summary + "</p>"};
  return url + start_date + summary;
}

function formatDate(date) {
  var date = new Date(date);
  var month = month_names[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();
  return month + " " + day + ", " + year;
};

// Build Map
function buildMap(options) {
  var map = L.mapbox.map(options.map_id, basemap_id, {
    zoomControl: false,
    scrollWheelZoom: false
  }).setView([options.lat, options.long], options.zoom);
  L.control.scale().addTo(map); // Load scale
  map.addControl(new L.Control.ZoomFS()); // Load map controls

  // Build legend
  if (options.legend) {
    console.log(options.map_id + '_legend')
    map.legendControl.addLegend(document.getElementById(options.map_id + '_legend').innerHTML);
  };
  if (options.animate) {
    setupAnimation(options.csv_url, options.start_date, options.end_date, map);
  } else if (!options.animate && options.csv_url) {
    $.get(options.csv_url, function(data) {
      data = $.csv.toObjects(data);
      generateMarkers(data, map, options)    
    });
  } else {
  };
  
  $('.mapbox-control-info').addClass('hide');
};

//todo: build seperate generatemarkers and generatemarkercluster functions
function generateMarkers(data, map, options) {
  // Set variables
  var markers, marker;
  
  // Build marker cluster layer
  markers = new L.MarkerClusterGroup({maxClusterRadius: 20, spiderfyOnMaxZoom: true});
  // Add marker layers to marker cluster
  for (i = 0; i < data.length; i++) {
    if (data[i].latitude && data[i].longitude) {
      marker = L.circleMarker([data[i].latitude, data[i].longitude], 
        { 
          stroke: true,
          color: '#fff',
          weight: 2,
          opacity: 1,
          fill: true,
          fillColor: data[i].marker_color,
          fillOpacity: 1
        });
      marker.bindPopup(popup(data[i]));
      marker.setRadius(options.marker_radius);
      map.addLayer(marker);
    };
  };
  
  // Add marker cluster to basemap
  // map.addLayer(markers);
}
