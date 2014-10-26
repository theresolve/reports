$(function() {

  buildTrackingKonyGraph();

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
    csv_url: "/data/tracking-kony/kony-locations.csv",
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
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-10').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-10').show();
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

  $('#tracking-kony-break-14').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-14').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-15').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-15').show(); 
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
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-20').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-20').show(); 
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-21').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-21').show(); 
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-22').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-22').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-23').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-23').show();
  }, {offset: waypoints_offset});


  $('#tracking-kony-break-24').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-24').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-25').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-25').show();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-26').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').hide();
    $('#tracking-kony-visual-26').show();
  }, {offset: waypoints_offset});
});




var dark_blue = 'rgb(13, 35, 58)';
var blue = 'rgb(25, 68, 112)';
var light_blue = 'rgb(37, 99, 163)';
var gray = '#DDDDDD';


function buildTrackingKonyGraph() {
  if ($('#tracking-kony-graph').length) {
    $('#tracking-kony-graph').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: ["#555555", dark_blue, blue, light_blue, gray],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ["Active", "Defected","Possibly Killed or Captured", "Killed", "Captured"]
      },
      yAxis: {
        min: 0,
        gridLineColor: 'transparent',
        title: {
          text: ''
        }
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
          colorByPoint: true,
          showInLegend: false
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: ["Status of LRA Combatants - 2013"],
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [147,28,12,11,2]
      }]
    });
  }
};



