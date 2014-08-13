$(window).load(function() {
  $("#twentytwentycontainer").twentytwenty();
});

$(function() {

  $('#executive_summary_sidebar_title').addClass("fixed-sidebar-item-active");
  $('#executive_summary_title').waypoint(function(direction) {
    $('#executive_summary_sidebar_title').addClass("fixed-sidebar-item-active");
    $('#section_1_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_2_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_3_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_4_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_5_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_6_sidebar_title').removeClass("fixed-sidebar-item-active");
  });

  $('#section_1_title').waypoint(function(direction) {
    $('#executive_summary_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_1_sidebar_title').addClass("fixed-sidebar-item-active");
    $('#section_2_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_3_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_4_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_5_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_6_sidebar_title').removeClass("fixed-sidebar-item-active");
  });

  $('#section_2_title').waypoint(function(direction) {
    $('#executive_summary_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_1_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_2_sidebar_title').addClass("fixed-sidebar-item-active");
    $('#section_3_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_4_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_5_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_6_sidebar_title').removeClass("fixed-sidebar-item-active");
  });

  $('#section_3_title').waypoint(function(direction) {
    $('#executive_summary_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_1_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_2_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_3_sidebar_title').addClass("fixed-sidebar-item-active");
    $('#section_4_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_5_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_6_sidebar_title').removeClass("fixed-sidebar-item-active");
  });

  $('#section_4_title').waypoint(function(direction) {
    $('#executive_summary_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_1_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_2_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_3_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_4_sidebar_title').addClass("fixed-sidebar-item-active");
    $('#section_5_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_6_sidebar_title').removeClass("fixed-sidebar-item-active");
  });

  $('#section_5_title').waypoint(function(direction) {
    $('#executive_summary_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_1_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_2_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_3_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_4_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_5_sidebar_title').addClass("fixed-sidebar-item-active");
    $('#section_6_sidebar_title').removeClass("fixed-sidebar-item-active");
  });

  $('#section_6_title').waypoint(function(direction) {
    $('#executive_summary_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_1_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_2_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_3_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_4_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_5_sidebar_title').removeClass("fixed-sidebar-item-active");
    $('#section_6_sidebar_title').addClass("fixed-sidebar-item-active");
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
    buildCongo();
  });
};




function buildES() {
  if ($('#MY2014_ES').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['T1 2010', 'T2', 'T3', 'T4', 'T1 2011', 'T2', 'T3', 'T4', 'T1 2012', 'T2', 'T3', 'T4', 'T1 2013', 'T2', 'T3', 'T4', 'T1 2014'];
      series_name_1 = 'Attaques de la LRA par trimestre, 2010-2014';
    } else {
      x_axis_categories = ['January-June 2009', 'January-June 2010', 'January-June 2011', 'January-June 2012', 'January-June 2013', 'January-June 2014',];
      series_name_1 = '# of total LRA attacks';
      series_name_2 = '# of total LRA abductions';
    };

    $('#MY2014_ES').highcharts({
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
        data: [91, 352, 214, 192, 103, 119,]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [499, 988, 500, 316, 218, 329]
      }]
    });
  }
};

function buildCongo() {
  if ($('#MY2014_CONGO').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['T1 2010', 'T2', 'T3', 'T4', 'T1 2011', 'T2', 'T3', 'T4', 'T1 2012', 'T2', 'T3', 'T4', 'T1 2013', 'T2', 'T3', 'T4', 'T1 2014'];
      series_name_1 = 'Attaques de la LRA par trimestre, 2010-2014';
    } else {
      x_axis_categories = ['January-June 2009', 'January-June 2010', 'January-June 2011', 'January-June 2012', 'January-June 2013', 'January-June 2014',];
      series_name_1 = '# of total LRA attacks';
      series_name_2 = '# of total LRA abductions';
    };

    $('#MY2014_CONGO').highcharts({
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
        data: [36, 195, 134, 140, 57, 73,]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [182, 318, 226, 189, 62, 127]
      }]
    });
  }
};

MY2014_CONGO


function buildHM() {
  if ($('#MY2014_Congo_2').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['T1 2012', 'T2', 'T3', 'T4', 'T1 2013', 'T2', 'T3', 'T4', 'T1 2014'];
      series_name_1 = "Nombre d'attaques de la LRA dans le Haut Mbomou";
      series_name_2 = "Nombre d'enlèvements de la LRA dans le Haut Mbomou";
    } else {
      x_axis_categories = ['Q1 2012', 'Q2 2012', 'Q3', 'Q4', 'Q1 2013', 'Q2', 'Q3', 'Q4', 'Q1 2014', 'Q2'];
      series_name_1 = 'LRA';
      series_name_2 = 'Unidentified armed groups';
      series_name_3 = 'Other identified armed groups (not LRA)';
      series_name_4 = 'Total # of attacks';
    };

    $('#MY2014_Congo_2').highcharts({
      chart: {
        type: 'line'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, light_blue, blue, blue],
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
        data: [82, 58, 37, 20, 37, 20, 31, 21, 35, 38]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [37, 10, 6, 8, 16, 11, 8, 7, 8, 34]
      }, {
        name: series_name_3,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [0, 1, 0, 0, 3, 0, 2, 4, 6, 7]
      }, {
        name: series_name_4,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [119, 69, 43, 28, 56, 31, 41, 32, 49, 79]
      }]
    });
  }
};
