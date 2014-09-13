$(function() {
  
  overview_map_options = {
    basemap_id: "ktransier.basemap",
    map_id: "tracking-kony-visual-1",
    lat: 3.894397793715443,
    long: 28.2843017578125,
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
  }

  $('.tracking-kony-visuals').hide();
  $('#tracking-kony-visual-0').show();

  $('#tracking-kony-break-0').waypoint(function(direction) {
    $('.tracking-kony-visuals').hide();
    if (!map === null || !map === undefined) {
      map.remove();
    };
    $('#tracking-kony-visual-0').show();
  });

  $('#tracking-kony-break-1').waypoint(function(direction) {
    $('.tracking-kony-visuals').hide();
    if (!map === null || !map === undefined) {
      map.remove();
    };
    $('#tracking-kony-visual-1').show();
    buildMap(overview_map_options);
  });

  $('#tracking-kony-break-2').waypoint(function(direction) {
    $('.tracking-kony-visuals').hide();
    if (!map === null || !map === undefined) {
      map.remove();
    };
    $('#tracking-kony-visual-2').show();
  });

  $('#tracking-kony-break-3').waypoint(function(direction) {
    $('.tracking-kony-visuals').hide();
    if (!map === null || !map === undefined) {
      map.remove();
    };
    $('#tracking-kony-visual-3').show();
  });
});