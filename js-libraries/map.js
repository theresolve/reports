
// Variables
var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var basemap_id = 'ktransier.hm2e9p06';

// Helper functions
function popup(point) {  
  var url, start_date, summary, confidence_level;
  if (point.url && point.id) {url = "<a href=" + point.url + point.id + "' target=_blank>" + point.id + "</a> | "};
  if (point.confidence_level) {confidence_level = "<em>Confidence Level:</em> <strong>" + report.confidence_level + "</strong>"};
  if (point.start_date) { start_date = formatDate(point.start_date) };
  if (point.summary) { summary = "<p class=map-popup-summary>" + point.summary + "</p>"};
  return url + start_date + summary + confidence_level;
}

function formatDate(date) {
  var date = new Date(date);
  var month = month_names[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();
  return month + " " + day + ", " + year;
};

// Build Map
function buildMap(map_id, lat, long, zoom) {
  var map;
  // Build map if not initialized
  if (!map) {
    map = L.mapbox.map(map_id, basemap_id, {
      zoomControl: false,
      scrollWheelZoom: false
    }).setView([lat, long], zoom);
    L.control.scale().addTo(map); // Load scale
    map.addControl(new L.Control.ZoomFS()); // Load map controls
  };
  
  // Build legend
  if (document.getElementById('legend-content')) {
    map.legendControl.addLegend(document.getElementById('legend-content').innerHTML);
  };
};

function generateMarkers(data) {
  // Remove existing layers 
  if (markers) { markers.clearLayers() };
  
  // Set variables
  var markers, marker;
  
  // Build marker cluster layer
  markers = new L.MarkerClusterGroup({maxClusterRadius: 20, spiderfyOnMaxZoom: true});
  
  // Add marker layers to marker cluster
  for (i = 0; i < data.length; i++) {
    if (data[i].latitude && data[i].longitude) {
      marker = L.circleMarker([data[i].latitude, data[i].longitude], {color: data[i].marker_color});
      marker.bindPopup(popup(data[i]));
      markers.addLayer(marker);
    };
  };
  
  // Add marker cluster to basemap
  map.addLayer(markers);
}
