$(function() {
  $('.tracking-kony-visual-container').hide();
})

$(window).load(function(){

  buildTrackingKonyGraph();

  waypoints_offset = '160'
  fade_in_duration = 250
  fade_out_duration = 150


  $('#tracking-kony-break-header').waypoint(function(direction) {
    $('.tracking-kony-visual-container').hide();
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-0').waypoint(function(direction) {
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-0').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-1').waypoint(function(direction) {
    // map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-1').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-3').waypoint(function(direction) {
    // map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-3').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-4').waypoint(function(direction) {
    // map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-4').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-5').waypoint(function(direction) {
    // map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-5').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-6').waypoint(function(direction) {
    // map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-6').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-7').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-7').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-8').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-8').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-9').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-9').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-10').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-10').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-11').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-11').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-12').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-12').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-14').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-14').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-15').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-15').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-16').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-16').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-17').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-17').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-18').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-18').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-19').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-19').fadeIn( fade_in_duration );  
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-20').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-20').fadeIn( fade_in_duration ); 
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-21').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-21').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-22').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-22').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-23').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-23').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});


  $('#tracking-kony-break-24').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-24').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-25').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-25').fadeIn( fade_in_duration );
  }, {offset: waypoints_offset});

  $('#tracking-kony-break-26').waypoint(function(direction) {
    map = null;
    $('.tracking-kony-visual-container').fadeOut( fade_out_duration );
    $('#tracking-kony-visual-26').fadeIn( fade_in_duration );
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
        categories: ["Active", "Defected","Reportedly Killed or Captured", "Killed", "Captured"]
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



