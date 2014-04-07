$(function() {
  buildMap("nambia-map", 4.144433, 27.867907, 8);
  buildMap("bases-map", 4.144433, 27.867907, 8);
  buildMap("combatant-defections-map", 4.144433, 27.867907, 8);
  buildMap("northern-attacks-map", 4.144433, 27.867907, 8);
  
  $.fn.waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    horizontal: false,
    offset: 130,
    triggerOnce: false
  }
  
  $('#executive_summary_navbar_title').addClass("active-nav-item");
  $('#executive_summary_title').waypoint(function(direction) {
    $('#executive_summary_navbar_title').addClass("active-nav-item");
    $('#obo_mboki_navbar_title').removeClass("active-nav-item");
    $('#defection_navbar_title').removeClass("active-nav-item");
    $('#congo_navbar_title').removeClass("active-nav-item");
    $('#resupplying_kony_navbar_title').removeClass("active-nav-item");
  });
  
  $('#obo_mboki_title').waypoint(function(direction) {
    $('#executive_summary_navbar_title').removeClass("active-nav-item");
    $('#obo_mboki_navbar_title').addClass("active-nav-item");
    $('#defection_navbar_title').removeClass("active-nav-item");
    $('#congo_navbar_title').removeClass("active-nav-item");
    $('#resupplying_kony_navbar_title').removeClass("active-nav-item");
  });
  
  $('#defection_title').waypoint(function(direction) {
    $('#executive_summary_navbar_title').removeClass("active-nav-item");
    $('#obo_mboki_navbar_title').removeClass("active-nav-item");
    $('#defection_navbar_title').addClass("active-nav-item");
    $('#congo_navbar_title').removeClass("active-nav-item");
    $('#resupplying_kony_navbar_title').removeClass("active-nav-item");
  });
  
  $('#congo_title').waypoint(function(direction) {
    $('#executive_summary_navbar_title').removeClass("active-nav-item");
    $('#obo_mboki_navbar_title').removeClass("active-nav-item");
    $('#defection_navbar_title').removeClass("active-nav-item");
    $('#congo_navbar_title').addClass("active-nav-item");
    $('#resupplying_kony_navbar_title').removeClass("active-nav-item");
  });
  
  $('#resupplying_kony_title').waypoint(function(direction) {
    $('#executive_summary_navbar_title').removeClass("active-nav-item");
    $('#obo_mboki_navbar_title').removeClass("active-nav-item");
    $('#defection_navbar_title').removeClass("active-nav-item");
    $('#congo_navbar_title').removeClass("active-nav-item");
    $('#resupplying_kony_navbar_title').addClass("active-nav-item");
  });
});


var dark_blue = 'rgb(13, 35, 58)';
var blue = 'rgb(25, 68, 112)';
var light_blue = 'rgb(37, 99, 163)';
var gray = '#DDDDDD';
var language = "en"
if (location.pathname.split('/')[1] == "fr-print" || location.pathname.split('/')[1] == "fr") {
  language = "fr"
};
$(document).ready(function () {
  getVisualData()
});

function getVisualData() {
  $.when().done(function () {
    buildES();
    buildHM();
    buildHU();
    buildCombatant();
  });
};

function buildES() {
  if ($('#Q12014_ES').length) {

    // TRANSLATIONS
    if (language == "fr") {
    } else {
      x_axis_categories = ['Q1 2012', 'Q2', 'Q3', 'Q4', 'Q1 2013', 'Q2', 'Q3', 'Q4', 'Q1 2014'];
      series_name_1 = '# of attacks';
      series_name_2 = '# of abductions';
    };

    $('#Q12014_ES').highcharts({
      chart: {
        type: 'line'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, light_blue],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: x_axis_categories
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
          borderWidth: 0
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: series_name_1,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [112,  80, 47, 38, 65, 38, 36, 42, 63]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [198, 118, 92, 149, 82, 136, 67, 182, 133]
      }]
    });
  }
};


function buildHM() {
  if ($('#Q12014_HM').length) {

    // TRANSLATIONS
    if (language == "fr") {
    } else {
      x_axis_categories = ['Q1 2010', 'Q2', 'Q3', 'Q4', 'Q1 2011', 'Q2', 'Q3', 'Q4', 'Q1 2012', 'Q2', 'Q3', 'Q4', 'Q1 2013', 'Q2', 'Q3', 'Q4', 'Q1 2014'];
      series_name_1 = '# of attacks';
      series_name_2 = '# of abductions';
    };

    $('#Q12014_HM').highcharts({
      chart: {
        type: 'line'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, light_blue],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: x_axis_categories
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
          borderWidth: 0
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: series_name_1,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [38, 36, 42, 63, 112,  80, 47, 38, 65, 38, 36, 42, 63, 38, 36, 42, 63]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [118, 92, 149, 82, 136, 67, 182, 38, 36, 42, 63, 198, 133, 38, 36, 42, 63]
      }]
    });
  }
};

function buildHU() {
  if ($('#Q12014_HU').length) {

    // TRANSLATIONS
    if (language == "fr") {
    } else {
      x_axis_categories = ['Q1 2010', 'Q2', 'Q3', 'Q4', 'Q1 2011', 'Q2', 'Q3', 'Q4', 'Q1 2012', 'Q2', 'Q3', 'Q4', 'Q1 2013', 'Q2', 'Q3', 'Q4', 'Q1 2014'];
      series_name_1 = '# of attacks';
      series_name_2 = '# of abductions';
    };

    $('#Q12014_HU').highcharts({
      chart: {
        type: 'line'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, light_blue],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: x_axis_categories
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
          borderWidth: 0
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: series_name_1,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [38, 36, 42, 63, 112,  80, 47, 38, 65, 38, 36, 42, 63, 38, 36, 42, 63]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [118, 92, 149, 82, 136, 67, 182, 38, 36, 42, 63, 198, 133, 38, 36, 42, 63]
      }]
    });
  }
};

function buildCombatant() {
  if ($('#Q12014_Combatant').length) {

    // TRANSLATIONS
    if (language == "fr") {
    } else {
      x_axis_categories = ['Q1 2010', 'Q2', 'Q3', 'Q4', 'Q1 2011', 'Q2', 'Q3', 'Q4', 'Q1 2012', 'Q2', 'Q3', 'Q4', 'Q1 2013', 'Q2', 'Q3', 'Q4', 'Q1 2014'];
      series_name_1 = '# of attacks';
      series_name_2 = '# of abductions';
    };

    $('#Q12014_Combatant').highcharts({
      chart: {
        type: 'line'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, light_blue],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: x_axis_categories
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
          borderWidth: 0
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: series_name_1,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [38, 36, 42, 63, 112,  80, 47, 38, 65, 38, 36, 42, 63, 38, 36, 42, 63]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [118, 92, 149, 82, 136, 67, 182, 38, 36, 42, 63, 198, 133, 38, 36, 42, 63]
      }]
    });
  }
};
