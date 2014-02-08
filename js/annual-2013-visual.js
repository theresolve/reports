var dark_blue = 'rgb(13, 35, 58)';
var blue = 'rgb(25, 68, 112)';
var light_blue = 'rgb(37, 99, 163)';
var gray = '#DDDDDD';
var language = "en"
if (location.pathname.split('/')[1] == "fr") {
  language = "fr"
};
$(document).ready(function () {
  getVisualData()
});

function getVisualData() {
  $.when().done(function () {
    buildES1();
    buildES2();
    buildES4a();
    buildES4b();
    buildES4c();
    buildES5();
    buildLooting1();
    buildLooting2();
    buildReductionCapacity();
    buildForcesObserved();
    buildNumberAbductedPerAttack();
    buildLivelihood();
    buildDecline();
    buildPrefectures();
    buildHotspotsa();
    buildHotspotsb();
    buildHotspotsc();
    buildAdultVsChild();
    buildLongVsShort();
  });
};

function buildES1() {
  if ($('#A13_ES_1').length) {

    // TRANSLATIONS
    if (language == "fr") {
      title = "Sort des combattants<br> ougandais <br>de la LRA (2013)";
      series_name = "Nombre de combattants ougandais de la LRA";
      label_1 = "Déserteurs";
      label_2 = "Tué ou capturé";
      label_3 = "Peut-être tué ou capturé";
      label_4 = "Restant avec la LRA";
    } else {
      title = "Fate of Ugandan <br> LRA combatants <br>(2013)";
      series_name = "# of Ugandan LRA combatants";
      label_1 = "Defected";
      label_2 = "Killed or captured";
      label_3 = "Possibly killed or captured";
      label_4 = "Remaining with the LRA";
    };

    $('#A13_ES_1').highcharts({
      chart: {
        type: 'pie'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, blue, light_blue, gray],
      title: {
        verticalAlign: 'middle',
        text: title,
        style: {
          fontSize: '10px'
        },
        y: -25
      },
      xAxis: {
        categories: ['2012', '2013'],
      },
      yAxis: {
        min: 0,
        gridLineColor: 'transparent',
        title: {
          text: ''
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          borderWidth: 0,
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        itemStyle: {
          color: '#000000',
          fontSize: '10px'
        }
      },
      series: [{
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        innerSize: '70%',
        data: [
          [label_1, 16],
          [label_2, 16],
          [label_3, 8],
          [label_4, 160]
        ]
      }]
    });
  }
};

function buildES2() {
  if ($('#A13_ES_2').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['Libérés par les combattants de la LRA', 'échappés avec des combattants de la LRA', 'échappé seul', 'Sauvé par les chasseurs Sud-Soudanais','Sauvé par les troupes Ougandaises'];
      series_name = "Nombre de femmes et d'enfants qui se sont échappés de la LRA en 2013 après une captivité à long terme"
    } else {
      x_axis_categories = ['Released by LRA combatants', 'Escaped with LRA combatants', 'Escaped on own', 'Rescued by South Sudanese hunters', 'Rescued by Ugandan troops'];
      series_name = "# of women and children who escaped long-term LRA captivity in 2013"
    };

    $('#A13_ES_2').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [blue],
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
      legend: {
        itemStyle: {
          color: '#000000',
          fontSize: '10px'
        }
      },
      series: [{
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [31, 14, 7, 7, 3]
      }]
    });
  }
};

function buildES4a() {
  if ($('#A13_ES_4a').length) {

    // TRANSLATIONS
    if (language == "fr") {
      series_name = "Nombre d'attaques de la LRA au Congo";
    } else {
      series_name = "# of LRA attacks <br>in Congo";
    };

    $('#A13_ES_4a').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ["'10", "'11", "'12", "'13"]
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
        },
        series: {
          pointWidth: 19
        }
      },
      legend: {
        itemStyle: {
          color: '#000000',
          fontSize: '10px'
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [367, 228, 223, 126]
      }]
    });
  }
};

function buildES4b() {
  if ($('#A13_ES_4b').length) {

    // TRANSLATIONS
    if (language == "fr") {
      series_name = "Nombre d'enlèvements de la LRA au Congo";
    } else {
      series_name = "# of LRA abductions <br>in Congo";
    };

    $('#A13_ES_4b').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [blue],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ["'10", "'11", "'12", "'13"]
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
        },
        series: {
          pointWidth: 19
        }
      },
      legend: {
        itemStyle: {
          color: '#000000',
          fontSize: '10px'
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [669, 412, 294, 191]
      }]
    });
  }
};

function buildES4c() {
  if ($('#A13_ES_4c').length) {

    // TRANSLATIONS
    if (language == "fr") {
      series_name = "Nombre de personnes Congolaises <br>déplacées internes et réfugiées <br>en raison de la LRA";
    } else {
      series_name = "# of Congolese <br>IDPs and refugees <br>displaced by the LRA";
    };

    $('#A13_ES_4c').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [gray],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ["'10", "'11", "'12", "'13"]
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
        },
        series: {
          pointWidth: 19
        }
      },
      legend: {
        itemStyle: {
          color: '#000000',
          fontSize: '10px'
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [316800, 368600, 368800, 229200]
      }]
    });
  }
};

function buildES5() {
  if ($('#A13_ES_5').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['Domaines de la RCA sous l’autorité des combattants Séléka', 'Toutes les autres zones touchées par la LRA en RCA, Congo et Soudan du Sud'];
      y_axis_title = 'Nombre d’enlèvements';
    } else {
      x_axis_categories = ['Areas of CAR under the authority of Seleka fighters', 'All other LRA-affected areas of CAR, Congo, and South Sudan'];
      y_axis_title = '# of abudctions';
    };

    $('#A13_ES_5').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [blue, gray],
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
          text: y_axis_title,
          style: { color: '#888', fontWeight: 300}
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
        name: '2012',
        states: {
          hover: {
            enabled: false
          }
        },
        data: [174, 348]
      }, {
        name: '2013',
        states: {
          hover: {
            enabled: false
          }
        },
        data: [216, 243]
      }]
    });
  }
};

function buildLooting1() {
  if ($('#A13_Looting1').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['Arachides', 'Viande / poisson', 'Riz', 'Farine', 'Maïs', 'Manioc', 'Alcool', 'Haricots', 'Huile de cuisine'];
      series_name = 'Nombre d’incidents dans lesquels l’article a été pillé par la LRA en 2013';
    } else {
      x_axis_categories = ['Groundnuts', 'Meat/fish', 'Rice', 'Flour', 'Maize', 'Cassava', 'Alcohol', 'Beans', 'Cooking Oil'];
      series_name = '# of incidents in which item was looted by the LRA in 2013';
    };

    $('#A13_Looting1').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: x_axis_categories,
        labels: {
          rotation: -45
        }
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
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [23, 19, 15, 14, 12, 9, 5, 5, 2]
      }]
    });
  }
};

function buildLooting2() {
  if ($('#A13_Looting2').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['Vêtements', 'Argent', 'électroniques / batteries', 'Savon', 'Armes à feu', 'Ustensiles de cuisine', 'Couteaux / machettes', 'Fournitures médicales'];
      series_name = 'Nombre d’incidents dans lesquels l’article a été pillé par la LRA en 2013';
    } else {
      x_axis_categories = ['Clothing', 'Money', 'Electronics/batteries', 'Soap', 'Firearms', 'Cooking utensils', 'Knives/machetes', 'Medical supplies'];
      series_name = '# of incidents in which item was looted by the LRA in 2013';
    };

    $('#A13_Looting2').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [blue],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: x_axis_categories,
        labels: {
          rotation: -45
        }
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
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [36, 16, 15, 7, 7, 6, 4, 2]
      }]
    });
  }
};

function buildReductionCapacity() {
  if ($('#A13_ReductionCapacity').length) {

    // TRANSLATIONS
    if (language == "fr") {
      series_name = '# Total estimé de combattants de la LRA';
    } else {
      series_name = 'Estimated # of total LRA combatants';
    };

    $('#A13_ReductionCapacity').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [blue],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['1999', '2008', '2010', '2013']
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
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [2700, 800, 400, 220]
      }]
    });
  }
};


function buildForcesObserved() {
  if ($('#A13_ForcesObserved').length) {

    // TRANSLATIONS
    if (language == "fr") {
      series_name = 'Nombre de forces de la LRA observées par attaque';
    } else {
      series_name = 'LRA forces observed per attack';
    };


    $('#A13_ForcesObserved').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: ['#525252', '#910000'],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['1-2', '3-4', '5-6', '7-8', '9-10', '11+']
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
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [8, 23, 19, 21, 15, 16]
      }]
    });
  }
};

function buildNumberAbductedPerAttack() {
  if ($('#A13_NumberAbductedPerAttack').length) {

    // TRANSLATIONS
    if (language == "fr") {
      y_axis_title = 'Nombre d’attaques';
      series_name = 'Nombre de civils enlevés par attaque en 2013';
    } else {
      y_axis_title = '# of attacks';
      series_name = '# of civilians abudcted per attack in 2013';
    };


    $('#A13_NumberAbductedPerAttack').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [gray],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['1-2', '3-4', '5-6', '7-8', '9-10', '11+'],
        title: {
          text: ''
        }
      },
      yAxis: {
        min: 0,
        gridLineColor: 'transparent',
        title: {
          text: y_axis_title,
          style: { color: '#888', fontWeight: 300}
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
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [38, 24, 4, 2, 3, 13]
      }]
    });
  }
};

function buildLivelihood() {
  if ($('#A13_Livelihood').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['Commerce', 'Chasse ou pêche', 'Agriculture'];
      series_name = 'Nombre de civils Congolais tués, enlevés ou pillés par la LRA en 2013';
    } else {
      x_axis_categories = ['Trading', 'Hunting or fishing', 'Farming'];
      series_name = '# of Congolese civilians killed, abducted, or looted by the LRA in 2013';
    };

    $('#A13_Livelihood').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue],
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
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [51, 28, 14]
      }]
    });
  }
};

function buildDecline() {
  if ($('#A13_Decline').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['Nombre d’attaques de la LRA', 'Nombre de meurtres de la LRA', 'Nombre d’enlèvements de la LRA'];
    } else {
      x_axis_categories = ['# of LRA attacks', '# of LRA killings', '# of LRA abductions'];
    };

    $('#A13_Decline').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [blue, gray],
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
        name: 'Congo, 2008-2010',
        states: {
          hover: {
            enabled: false
          }
        },
        data: [651, 2348, 2475]
      }, {
        name: 'Congo, 2011-2013',
        states: {
          hover: {
            enabled: false
          }
        },
        data: [575, 136, 895]
      }]
    });
  }
};

function buildPatterns() {
  if ($('#A13_Patterns').length) {

    // TRANSLATIONS
    if (language == "fr") {
      series_name_1 = 'Nombre d’attaques de la LRA';
      series_name_2 = 'Nombre de meurtres de la LRA';
      series_name_3 = 'Nombre d’enlèvements de la LRA';
    } else {
      series_name_1 = '# of LRA attacks';
      series_name_2 = '# of LRA killings';
      series_name_3 = '# of LRA abductions';
    };


    $('#A13_Patterns').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: ["#2f7ed8", '#0d233a', '#525252', '#910000'],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Congo, 2008&ndash;2010', 'Congo, 2011&ndash;2013']
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
        states: {
          hover: {
            enabled: false
          }
        },
        data: [612, 575]
      }, {
        name: series_name_2,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [2141, 136]
      }, {
        name: series_name_3,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [2120, 895]
      }]
    });
  }
};

function buildHotspotsa() {
  if ($('#A13_Hotspotsa').length) {

    // TRANSLATIONS
    if (language == "fr") {
      series_name = 'Nombre d’attaques de la LRA dans le Haut Mbomou';
    } else {
      series_name = '# LRA attacks in Haut Mbomou';
    };

    $('#A13_Hotspotsa').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ["'10", "'11", "'12", "'13"]
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
        },
        series: {
          pointWidth: 30
        }
      },
      legend: {
        itemStyle: {
          color: '#000000',
          fontSize: '10px'
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [43, 26, 18, 19]
      }]
    });
  }
};

function buildHotspotsb() {
  if ($('#A13_Hotspotsb').length) {

    // TRANSLATIONS
    if (language == "fr") {
      series_name = 'Nombre d’enlèvements de la LRA dans le Haut Mbomou';
    } else {
      series_name = '# of LRA abductions in Haut Mbomou';
    };

    $('#A13_Hotspotsb').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [blue],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ["'10", "'11", "'12", "'13"]
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
        },
        series: {
          pointWidth: 30
        }
      },
      legend: {
        itemStyle: {
          color: '#000000',
          fontSize: '10px'
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [128, 109, 37, 25]
      }]
    });
  }
};

function buildHotspotsc() {
  if ($('#A13_Hotspotsc').length) {

    // TRANSLATIONS
    if (language == "fr") {
      series_name = 'Nombre de personnes déplacées dans le Haut Mbomou*';
    } else {
      series_name = '# of people displaced in Haut Mbomou*';
    };

    $('#A13_Hotspotsc').highcharts({
      chart: {
        type: 'column'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [gray],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ["'10", "'11", "'12", "'13"]
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
        },
        series: {
          pointWidth: 30
        }
      },
      legend: {
        itemStyle: {
          color: '#000000',
          fontSize: '10px'
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: series_name,
        states: {
          hover: {
            enabled: false
          }
        },
        data: [11900, 13900, 12500, 18000]
      }]
    });
  }
};

function buildPrefectures() {
  if ($('#A13_Prefectures').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_title =  'Nombre d’enlèvements';
    } else {
      x_axis_title =  '# of abductions';
    };

    $('#A13_Prefectures').highcharts({
      chart: {
        type: 'line'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [dark_blue, blue, light_blue, '#777777'],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ["'09", "'10", "'11", "'12", "'13"],
        title: {
          text: x_axis_title
        }
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
        },
        series: {
          lineWidth: 2,
          pointWidth: 20
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Mbomou',
        states: {
          hover: {
            enabled: false
          }
        },
        data: [60, 315, 73, 157, 21]
      }, {
        name: 'Haut Mbomou',
        states: {
          hover: {
            enabled: false
          }
        },
        data: [149, 128, 109, 37, 25]
      }, {
        name: 'Vakaga',
        states: {
          hover: {
            enabled: false
          }
        },
        data: [2, 125, 0, 0, 0]
      }, {
        name: 'Haut Kotto',
        states: {
          hover: {
            enabled: false
          }
        },
        data: [0, 151, 0, 26, 207]
      }]
    });
  }
};

function buildAdultVsChild() {
  if ($('#A13_AdultVsChild').length) {

    // TRANSLATIONS
    if (language == "fr") {
      series_name = 'Nombre d’enlevés';
      slice_1_title = 'Nombre d’adultes enlevés';
      slice_2_title = 'Nombre d’enfants enlevés';
    } else {
      series_name = '# abducted';
      slice_1_title = '# of adults abducted';
      slice_2_title = '# of children abducted';
    };

    $('#A13_AdultVsChild').highcharts({
      chart: {
        type: 'pie'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [blue, gray],
      title: {
        text: ''
      },
      subtitle: {
        text: '2013'
      },
      xAxis: {
        categories: ['2012', '2013'],
      },
      yAxis: {
        min: 0,
        gridLineColor: 'transparent',
        title: {
          text: ''
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        itemStyle: {
          color: '#000000',
          fontSize: '10px'
        }
      },
      series: [{
        name: series_name,
        innerSize: '70%',
        states: {
          hover: {
            enabled: false
          }
        },
        data: [
          [slice_1_title, 145],
          [slice_2_title, 52]
        ]
      }]
    });
  }
};

function buildLongVsShort() {
  if ($('#A13_LongVsShort').length) {

    // TRANSLATIONS
    if (language == "fr") {
      x_axis_categories = ['# D’enlèvements de moins d’un mois', '# D’enlèvements de plus dun mois ou de longueur inconnue'];
      series_name = 'Nombre d’enlevés';
      slice_1_title = '# D’enlèvements de moins d’un mois';
      slice_2_title = '# D’enlèvements de plus d’un mois <br>ou de longueur inconnue';
    } else {
      x_axis_categories = ['# of abductions of less than one month', '# of abductions over one month <br>in lenght or of unknown length'];
      series_name = '# abducted';
      slice_1_title = '# of abductions of less than one month';
      slice_2_title = '# of abductions over one month <br>or of unknown length';
    };

    $('#A13_LongVsShort').highcharts({
      chart: {
        type: 'pie'
      },
      tooltip: {
        formatter: function () {
          return this.y;
        }
      },
      colors: [blue, gray],
      title: {
        text: ''
      },
      subtitle: {
        text: '2013'
      },
      xAxis: {
        categories: x_axis_categories,
        title: {
          text: '2013'
        }
      },
      yAxis: {
        min: 0,
        gridLineColor: 'transparent',
        title: {
          text: ''
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        itemStyle: {
          color: '#000000',
          fontSize: '10px'
        }
      },
      series: [{
        name: series_name,
        innerSize: '70%',
        states: {
          hover: {
            enabled: false
          }
        },
        data: [
          [slice_1_title, 276],
          [slice_2_title, 86]
        ]
      }]
    });
  }
};
