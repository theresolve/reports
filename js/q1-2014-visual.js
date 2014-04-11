$(function() {
  
  bases_map_options = {
    map_id: "bases_map",
    lat: 4.144433, 
    long: 27.867907, 
    zoom: 8, 
    marker_radius: 4,
    csv_url: "/data/lra.csv",
    animate: false,
    start_date: null, 
    end_date: null,
    legend: true
  }
  
  combatant_defections_map_options = {
    map_id: "combatant_defections_map",
    lat: 6.226528, 
    long: 25.816990, 
    zoom: 6, 
    marker_radius: 5,
    csv_url: "/data/ugandan-combatant-returnees.csv",
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
    marker_radius: 4,
    csv_url: false,
    animate: false,
    start_date: null, 
    end_date: null,
    legend: true
  }
  
  nambia_map_options = {
    map_id: "nambia_map",
    lat: 4.136,
    long: 27.900, 
    zoom: 8, 
    marker_radius: 4,
    csv_url: "/data/lra.csv",
    animate: true,
    start_date: "1-1-2010", 
    end_date: "3-31-2014",
  }
  
  buildMap(bases_map_options);
  buildMap(combatant_defections_map_options);
  buildMap(northern_attacks_map_options);
  buildMap(nambia_map_options);
  
  $("#twentytwentycontainer").twentytwenty();
  
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
    buildF();
  });
};

function buildES() {
  if ($('#Q12014_ES').length) {

    // TRANSLATIONS
    if (language == "fr") {
    } else {
      x_axis_categories = ['Q1 2010', 'Q2', 'Q3', 'Q4', 'Q1 2011', 'Q2', 'Q3', 'Q4', 'Q1 2012', 'Q2', 'Q3', 'Q4', 'Q1 2013', 'Q2', 'Q3', 'Q4', 'Q1 2014'];
      series_name_1 = '# of total LRA attacks';
    };

    $('#Q12014_ES').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, blue, blue, blue],
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
          borderWidth: 0,
          colorByPoint: true,
          showInLegend: false
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
        data: [215, 142, 94, 69, 118, 98, 55, 31, 112,  80, 47, 38, 65, 38, 36, 42, 63]
      }]
    });
  }
};


function buildHM() {
  if ($('#Q12014_HM').length) {

    // TRANSLATIONS
    if (language == "fr") {
    } else {
      x_axis_categories = ['2010','2011','2012','2013','2014'];
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
        data: [45, 26, 18, 18, 17]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [137, 109, 37, 25, 35]
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
        data: [131, 64, 69, 41, 66, 67, 36, 27, 82, 59, 37, 20, 37, 20, 31, 21, 36]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [246, 72, 91, 56, 131, 80, 50, 17, 131, 58, 23, 33, 37, 25, 24, 23, 40]
      }]
    });
  }
};

function buildCombatant() {
  if ($('#Q12014_Combatant').length) {

    // TRANSLATIONS
    if (language == "fr") {
    } else {
      x_axis_categories = ['Q1 2013', 'Q2', 'Q3', 'Q4', 'Q1 2014'];
      series_name_1 = '# of Ugandan combatant returnees';
      series_name_2 = '# of non-Ugandan combatant returnees';
      series_name_3 = '# of women and children long-term returnees';
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
        data: [1, 9,1,6,4]
            
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [1,0,0,5,0]
      }, {
        name: series_name_3,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [35,8,5,14,13]
      }]
    });
  }
};

function buildF() {
  if ($('#Q12014_F').length) {

    // TRANSLATIONS
    if (language == "fr") {
    } else {
      x_axis_categories = ['Q1 2010', 'Q2', 'Q3', 'Q4', 'Q1 2011', 'Q2', 'Q3', 'Q4', 'Q1 2012', 'Q2', 'Q3', 'Q4', 'Q1 2013', 'Q2', 'Q3', 'Q4', 'Q1 2014'];
      series_name_1 = '# of attacks within 140km of Faradje';
      series_name_2 = '# of abductions within 140km of Faradje';
    };

    $('#Q12014_F').highcharts({
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
        data: [50, 21, 26, 17, 37, 29, 16, 13, 34, 17, 26, 11, 24, 13, 18, 9, 2]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [55, 29, 45, 18, 39, 38, 28, 14, 48, 21, 16, 27, 30, 6, 10, 5, 0]
      }]
    });
  }
};
