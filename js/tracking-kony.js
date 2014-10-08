$(function() {

  var map_1_options = {
    basemap_id: "ktransier.basemap",
    map_id: "tracking-kony-map-1",
    lat: 7.041546,
    long: 25.946838,
    zoom: 6,
    marker_radius: 5,
    // csv_url: "/data/q1-2014-attacks.csv",
    animate: false,
    start_date: "1/1/2014",
    end_date: "3/31/2014",
    legend: false,
    offset: false,
    min_offset: -2,
    max_offset: 2
  }

  var map_2_options = {
    basemap_id: "ktransier.basemap",
    map_id: "tracking-kony-map-2",
    lat: 7.041546,
    long: 25.946838,
    zoom: 6,
    marker_radius: 5,
    // csv_url: "/data/q1-2014-attacks.csv",
    animate: false,
    start_date: "1/1/2014",
    end_date: "3/31/2014",
    legend: false,
    offset: false,
    min_offset: -2,
    max_offset: 2
  };

  var map_4_options = {
    basemap_id: "ktransier.basemap",
    map_id: "tracking-kony-map-4",
    lat: 4.954764,
    long: 30.670959,
    zoom: 7,
    marker_radius: 5,
    // csv_url: "/data/q1-2014-attacks.csv",
    animate: false,
    start_date: "1/1/2014",
    end_date: "3/31/2014",
    legend: false,
    offset: false,
    min_offset: -2,
    max_offset: 2
  };

  var map_9_options = {
    basemap_id: "ktransier.basemap",
    map_id: "tracking-kony-map-9",
    lat: 6.095723,
    long: 25.849612,
    zoom: 8,
    marker_radius: 5,
    // csv_url: "/data/q1-2014-attacks.csv",
    animate: false,
    start_date: "1/1/2014",
    end_date: "3/31/2014",
    legend: false,
    offset: false,
    min_offset: -2,
    max_offset: 2
  };

  var map_10_options = {
    basemap_id: "ktransier.basemap",
    map_id: "tracking-kony-map-10",
    lat: 5.133576, 
    long: 27.371219,
    zoom: 7,
    marker_radius: 5,
    // csv_url: "/data/q1-2014-attacks.csv",
    animate: false,
    start_date: "1/1/2014",
    end_date: "3/31/2014",
    legend: false,
    offset: false,
    min_offset: -2,
    max_offset: 2
  };

  var map_13_options = {
    basemap_id: "ktransier.basemap",
    map_id: "tracking-kony-map-13",
    lat: 9.204556,
    long: 24.092241,
    zoom: 8,
    marker_radius: 5,
    // csv_url: "/data/q1-2014-attacks.csv",
    animate: false,
    start_date: "1/1/2014",
    end_date: "3/31/2014",
    legend: false,
    offset: false,
    min_offset: -2,
    max_offset: 2
  };

  var map_14_options = {
    basemap_id: "ktransier.basemap",
    map_id: "tracking-kony-map-14",
    lat: 7.827544,
    long: 22.867266, 
    zoom: 7,
    marker_radius: 5,
    // csv_url: "/data/q1-2014-attacks.csv",
    animate: false,
    start_date: "1/1/2014",
    end_date: "3/31/2014",
    legend: false,
    offset: false,
    min_offset: -2,
    max_offset: 2
  };

  var map_15_options = {
    basemap_id: "ktransier.basemap",
    map_id: "tracking-kony-map-15",
    lat: 6.228630, 
    long: 25.775988,
    zoom: 8,
    marker_radius: 5,
    // csv_url: "/data/q1-2014-attacks.csv",
    animate: false,
    start_date: "1/1/2014",
    end_date: "3/31/2014",
    legend: false,
    offset: false,
    min_offset: -2,
    max_offset: 2
  };

  var map_19_options = {
    basemap_id: "ktransier.basemap",
    map_id: "tracking-kony-map-19",
    lat: 3.705923,
    long: 27.737609,
    zoom: 7,
    marker_radius: 5,
    // csv_url: "/data/q1-2014-attacks.csv",
    animate: false,
    start_date: "1/1/2014",
    end_date: "3/31/2014",
    legend: false,
    offset: false,
    min_offset: -2,
    max_offset: 2
  };

  var map_20_options = {
    basemap_id: "ktransier.basemap",
    map_id: "tracking-kony-map-20",
    lat: 8.529, 
    long: 23.249,
    zoom: 8,
    marker_radius: 5,
    // csv_url: "/data/q1-2014-attacks.csv",
    animate: false,
    start_date: "1/1/2014",
    end_date: "3/31/2014",
    legend: false,
    offset: false,
    min_offset: -2,
    max_offset: 2
  };



  waypoints_offset = '160'



  $('.tracking-kony-visual-container').hide();


  $('#tracking-kony-break-header').waypoint(function(direction) {
    $('.tracking-kony-visual-container').hide();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-0').waypoint(function(direction) {
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-0').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-1').waypoint(function(direction) {
    // map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-1').show();
    buildMap(map_1_options);   
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-2').waypoint(function(direction) {
    // map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-2').show();
    buildMap(map_2_options);     
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-3').waypoint(function(direction) {
    // map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-3').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-4').waypoint(function(direction) {
    // map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-4').show();
    buildMap(map_4_options); 
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-5').waypoint(function(direction) {
    // map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-5').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-6').waypoint(function(direction) {
    // map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-6').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-7').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-7').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-8').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-8').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-9').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-9').show();
    buildMap(map_9_options);  
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-10').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-10').show();
    buildMap(map_10_options);  
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-11').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-11').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-12').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-12').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-13').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-13').show();
    buildMap(map_13_options);  
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-14').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-14').show();
    buildMap(map_14_options);  
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-15').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-15').show();
    buildMap(map_15_options);  
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-16').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-16').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-17').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-17').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-18').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-18').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-19').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-19').show();
    buildMap(map_19_options);   
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-20').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-20').show();
    buildMap(map_20_options);  
  }, {offset: waypoints_offset});

});