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
function animateMarkers(data) {
  if (marker_group != null) { marker_group.clearLayers(); }
  marker_group = L.layerGroup();

  var x = 0;
  // Add marker layers to marker cluster
  function animate() {
    if (data[x][1] != "Zero records" && data[x][1] != undefined) {
      for (var i = 0; i < data[x][1].length; i++) {
        reports = data[x][1];
        if (reports[i].latitude && reports[i].longitude) {
          marker = L.marker([reports[i].latitude, reports[i].longitude]);
          marker_group.addLayer(marker);
          map.addLayer(marker_group);
        };
      };
    };
    $(".map-date").html(formatDate(data[x][0]))
    if (x++ < data.length) {
      if (run_animation == true) {
        setTimeout(animate, 100);
      };
    };
  };

  animate();
};

// Start
$(function() {
  var markers = {};
  $.get('/data/lra.csv', function(data) {
    data = $.csv.toObjects(data);
    
    console.log(data)
    
    // Generate all dates between beginning and end of data     
    var date_array = getDates(new Date("1-1-2014"), new Date("3-31-2014"));
    
    // Group data by date
    var grouped_data = groupByDate(data);
    
    // combineDateArrayGroupedData  
    markers = combineDateArrayGroupedData(date_array, grouped_data);
    
    markers = convertToArray(markers)
    
  });
  $(".map-play").click( function() {
    run_animation = true;
    animateMarkers(markers);
  });
  
  $(".map-stop").click( function() {
    run_animation = false;
  });

})
