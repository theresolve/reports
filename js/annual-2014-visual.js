var dark_blue = 'rgb(13, 35, 58)';
var blue = 'rgb(25, 68, 112)';
var light_blue = 'rgb(37, 99, 163)';
var gray = '#DDDDDD';
var language = "en"

$(document).ready(function () {
  getVisualData()
});

function getVisualData() {
  $.when().done(function () {
    buildV1();
    buildV2();
    buildV3();
    buildV4();
  });
};



function buildV1() {
  if ($('#2014-fighting-capacity').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['T1 2011', 'T2', 'T3', 'T4', 'T1 2012', 'T2', 'T3', 'T4', 'T1 2013', 'T2', 'T3', 'T4', 'T1 2014'];
      series_name_1 = "Nombre d'attaques de la LRA dans la région de Niangara-Bangadi, Congo";
      series_name_2 = "Nombre d'enlèvements de la LRA dans la région de Niangara-Bangadi, Congo";
    } else {
      x_axis_categories = ['2012', '2013', '2014'];
      series_name_1 = 'Defected Ugandan fighters';
      series_name_2 = 'Captured Ugandan fighters';
      series_name_3 = 'Presumed/confirmed dead Ugandan fighters';
      series_name_4 = ' Total reduction in Ugandan fighters';
    };

    $('#2014-fighting-capacity').highcharts({
      chart: {
        type: 'line'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, blue, light_blue,  gray],
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
        data: [16, 17, 12]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [3, 1, 1]
      }, {
        name: series_name_3,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: ["none", 0,18]
      }, {
        name: series_name_4,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [19, 36, 13]
      }]
    });
  }
};


function buildV2() {
  if ($('#2014-women-children').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['T1 2011', 'T2', 'T3', 'T4', 'T1 2012', 'T2', 'T3', 'T4', 'T1 2013', 'T2', 'T3', 'T4', 'T1 2014'];
      series_name_1 = "Nombre d'attaques de la LRA dans la région de Niangara-Bangadi, Congo";
      series_name_2 = "Nombre d'enlèvements de la LRA dans la région de Niangara-Bangadi, Congo";
    } else {
      x_axis_categories = ['2012', '2013', '2014'];
      series_name_1 = '# of long-term Ugandan women and children returnees';
      series_name_2 = '# of long-term non-Ugandan women and children returnees';
      series_name_4 = '# of long-term women and children returnees of unknown nationality'
      series_name_5 = 'Total # of long-term women and children returnees';

    };

    $('#2014-women-children').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, blue, light_blue,  gray],
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
        data: [13, 10, 40]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [25, 50, 27]
      }, {
        name: series_name_4,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [6, 8, 78]
      }, {
        name: series_name_5,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [44, 68, 145]
      }]
    });
  }
};

function buildV3() {
  if ($('#2014-reversed-decline').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['T1 2011', 'T2', 'T3', 'T4', 'T1 2012', 'T2', 'T3', 'T4', 'T1 2013', 'T2', 'T3', 'T4', 'T1 2014'];
      series_name_1 = "Nombre d'attaques de la LRA dans la région de Niangara-Bangadi, Congo";
      series_name_2 = "Nombre d'enlèvements de la LRA dans la région de Niangara-Bangadi, Congo";
    } else {
      x_axis_categories = ['2010', '2011','2012', '2013', '2014'];
      series_name_1 = 'LRA attacks';
      series_name_2 = 'LRA killings';
      series_name_3 = 'LRA abductions';

    };

    $('#2014-reversed-decline').highcharts({
      chart: {
        type: 'line'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, blue, light_blue,  gray],
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
        data: [513, 299, 275, 183, 202]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [776, 150, 52, 76, 13]
      }, {
        name: series_name_3,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [1495, 649, 557, 467, 616]
      }]
    });
  }
};

function buildV4() {
  if ($('#2014-other-groups').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['T1 2011', 'T2', 'T3', 'T4', 'T1 2012', 'T2', 'T3', 'T4', 'T1 2013', 'T2', 'T3', 'T4', 'T1 2014'];
      series_name_1 = "Nombre d'attaques de la LRA dans la région de Niangara-Bangadi, Congo";
      series_name_2 = "Nombre d'enlèvements de la LRA dans la région de Niangara-Bangadi, Congo";
    } else {
      x_axis_categories = ['2012', '2013', '2014'];
      series_name_1 = 'LRA attacks';
      series_name_2 = 'Unidentified armed groups attacks';
      series_name_3 = 'Other identified armed groups (not LRA) attacks';
      series_name_4 = 'Total # of attacks';
    };

    $('#2014-other-groups').highcharts({
      chart: {
        type: 'line'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, blue, light_blue,  gray],
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
        data: [197, 109, 112]
      }, {
        name: series_name_2,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [61, 42, 65]
      }, {
        name: series_name_3,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [4, 13, 21]
      }, {
        name: series_name_4,
        animation: false,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [287, 183, 242]
      }]
    });
  }
};
