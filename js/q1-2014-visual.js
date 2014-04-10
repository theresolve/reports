$(function() {
  
  bases_map_options = {
    map_id: "bases_map",
    lat: 4.144433, 
    long: 27.867907, 
    zoom: 8, 
    csv_url: "/data/lra.csv",
    animate: false,
    start_date: null, 
    end_date: null,
    legend: true
  }
  
  combatant_defections_map_options = {
    map_id: "combatant_defections_map",
    lat: 4.144433, 
    long: 27.867907, 
    zoom: 8, 
    csv_url: false,
    animate: false,
    start_date: null, 
    end_date: null,
    legend: true
  }
  
  northern_attacks_map_options = {
    map_id: "northern_attacks_map",
    lat: 4.144433, 
    long: 27.867907, 
    zoom: 8, 
    csv_url: false,
    animate: false,
    start_date: null, 
    end_date: null,
    legend: true
  }
  
  nambia_map_options = {
    map_id: "nambia_map",
    lat: 4.144433, 
    long: 27.867907, 
    zoom: 8, 
    csv_url: "/data/lra.csv",
    animate: true,
    start_date: "1-1-2014", 
    end_date: "3-31-2014",
  }
  
  buildMap(bases_map_options);
  buildMap(combatant_defections_map_options);
  buildMap(northern_attacks_map_options);
  buildMap(nambia_map_options);
  
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
      series_name_1 = '# of total LRA attacks';
      series_name_2 = '# of total LRA abductions';
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
      series_name_1 = '# of attacks in Haut Mbomou';
      series_name_2 = '# of abductions in Haut Mbomou';
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
      series_name_1 = '# of attacks in Haut Uele';
      series_name_2 = '# of abductions in Haut Uele';
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
      x_axis_categories = ['Q1 2012', 'Q2', 'Q3', 'Q4', 'Q1 2013', 'Q2', 'Q3', 'Q4', 'Q1 2014'];
      series_name_1 = '# of Ugandan combatant returnees';
      series_name_2 = '# of other long-term returnees';
    };

    $('#Q12014_Combatant').highcharts({
      chart: {
        type: 'column'
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
