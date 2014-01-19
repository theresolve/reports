$(document).ready(function() {
  getVisualData()
});

function getVisualData() {  

  $.when().done(function() {
  buildES1();
  buildES2();
  buildES4a();
  buildES4b();
  buildES4c();
  buildES5();

  buildLooting1();
  buildLooting2();

  buildReductionCapacity();
  buildLongTermReturnees();
  buildLengthAbduction();

  buildForcesObserved();
  buildNumberAbductedPerAttack();
  buildLivelihood();
  buildUAG();
  buildDecline();

  buildPrefectures();
  buildHotspotsa();
  buildHotspotsb();
  buildHotspotsc();
  });
};

function buildES1() {
    if ($('#A13_ES_1').length) {
      $('#A13_ES_1').highcharts({
      chart: {
          type: 'column'
      },
      colors: ['#0d233a', "#4884c5"],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['2012','2013'],
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
              pointWidth: 35
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
          name: 'Killed',
          data: [0, 5]
      }, {
          name: 'Captured/Escaped',
          data: [20, 17]
      }]
    });
  }
};

function buildES2() {
    if ($('#A13_ES_2').length) {
      $('#A13_ES_2').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#4884c5",'#0d233a', '#525252', '#910000'],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Released by LRA combatant', 'Escaped with LRA combatant', 'Escaped on own', 'Rescued by South Sudanese hunters or Arrow Boys', 'Rescued by Ugandan troops']
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
          name: 'Long-term Women and Child Returnees',
          data: [31, 14, 7, 7, 3]
      }]
    });
  }
};

function buildES4a() {
    if ($('#A13_ES_4a').length) {
      $('#A13_ES_4a').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#4884c5",'#0d233a', '#525252', '#910000'],
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
              pointWidth: 12
          }
      },
      credits: {
        enabled: false
      },
      series: [{
          name: '# of Attacks',
          data: [363, 228, 223, 125]
      }]
    });
  }
};

function buildES4b() {
    if ($('#A13_ES_4b').length) {
      $('#A13_ES_4b').highcharts({
      chart: {
          type: 'column'
      },
      colors: ['#0d233a', '#525252', '#910000'],
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
              pointWidth: 12
          }
      },
      credits: {
        enabled: false
      },
      series: [{
          name: '# of Abductees',
          data: [665, 412, 294, 155]
      }]
    });
  }
};

function buildES4c() {
    if ($('#A13_ES_4c').length) {
      $('#A13_ES_4c').highcharts({
      chart: {
          type: 'column'
      },
      colors: ['#525252', '#910000'],
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
              pointWidth: 12
          }
      },
      credits: {
        enabled: false
      },
      series: [{
          name: '# of Displaced',
          data: [316800, 368600, 368800, 261000]
      }]
    });
  }
};


function buildES5() {
    if ($('#A13_ES_5').length) {
      $('#A13_ES_5').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#4884c5",'#0d233a', '#525252', '#910000'],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Areas of CAR controlled by ex-Seleka rebels', 'All other LRA-affected areas of CAR, Congo, and South Sudan']
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
          name: '# of Total Mass Attacks',
          data: [10, 5]
      }]
    });
  }
};

function buildLooting1() {
    if ($('#A13_Looting1').length) {
      $('#A13_Looting1').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Groundnuts', 'Meat/Fish', 'Rice', 'Flour', 'Maize', 'Cassava', 'Alcohol', 'Beans', 'Cooking Oil'],
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
          name: '# of Lootings',
          data: [23, 19, 15, 14, 12, 9, 5,  5, 2]
      }]
    });
  }
};

function buildLooting2() {
    if ($('#A13_Looting2').length) {
      $('#A13_Looting2').highcharts({
      chart: {
          type: 'column'
      },
      colors: ['#0d233a', '#525252', '#910000'],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Clothing', 'Money', 'Electronics/batteries', 'Soap', 'Firearms', 'Cooking utensils', 'Blades', 'Medical supplies',],
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
          name: '# of Lootings',
          data: [36, 16, 15, 7, 7, 6, 4, 2]
      }]
    });
  }
};

function buildReductionCapacity() {
    if ($('#A13_ReductionCapacity').length) {
      $('#A13_ReductionCapacity').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
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
          name: '# of Combatants',
          data: [2700,800,400,240]
      }]
    });
  }
};

function buildLongTermReturnees() {
    if ($('#A13_LongTermReturnees').length) {
      $('#A13_LongTermReturnees').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: 'Long-term Returnees'
      },
      subtitle: {
        text: 'January 2011-December 2013'
      },
      xAxis: {
        categories: ['2011', '2012', '2013']
      },
      yAxis: {
          min: 0,
          gridLineColor: 'transparent',
          title: {
              text: '# of Long-term Returnees'
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
          name: '# of Women',
          data: [5, 5, 5]
      }, {
          name: '# of Children',
          data: [5, 5, 5]
      }]
    });
  }
};

function buildLengthAbduction() {
    if ($('#A13_LengthAbduction').length) {
      $('#A13_LengthAbduction').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Adults', 'Children']
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
          name: '< 1 Month',
          data: [5, 5]
      }, {
          name: '> 1 Month',
          data: [5, 5]
      }]
    });
  }
};

function buildForcesObserved() {
    if ($('#A13_ForcesObserved').length) {
      $('#A13_ForcesObserved').highcharts({
      chart: {
          type: 'column'
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
          name: 'LRA Forces Observed Per Attack',
          data: [8, 23, 19, 21, 15, 16]
      }]
    });
  }
};

function buildNumberAbductedPerAttack() {
    if ($('#A13_NumberAbductedPerAttack').length) {
      $('#A13_NumberAbductedPerAttack').highcharts({
      chart: {
          type: 'column'
      },
      colors: ['#0d233a', '#525252', '#910000'],
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
          name: '# Abducted Per Attack',
          data: [21, 15, 2, 0, 1, 3]
      }]
    });
  }
};

function buildLivelihood() {
    if ($('#A13_Livelihood').length) {
      $('#A13_Livelihood').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Trading', 'Hunting or Fishing', 'Farming']
      },
      yAxis: {
          min: 0,
          gridLineColor: 'transparent',
          title: {
              text: '# Attacks'
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
          name: '# Attacks',
          data: [51, 28, 14]
      }]
    });
  }
};

function buildUAG() {
    if ($('#A13_UAG').length) {
      $('#A13_UAG').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: 'LRA vs. Unidentified Armed Group (UAG) Attacks in LRA-affected Areas of Congo'
      },
      subtitle: {
        text: '2013'
      },
      xAxis: {
        categories: ['Q1 13','Q2 13','Q3 13', 'Q4 13']
      },
      yAxis: {
          min: 0,
          gridLineColor: 'transparent',
          title: {
              text: 'Number of Attacks'
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
          name: 'LRA',
          data: [62, 38, 37, 5]
      }, {
          name: 'UAG',
          data: [31, 22, 13, 5]
      }]
    });
  }
};

function buildDecline() {
    if ($('#A13_Decline').length) {
      $('#A13_Decline').highcharts({
      chart: {
          type: 'column'
      },
      colors: ['#0d233a',"#2f7ed8", '#525252', '#910000'],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Attacks', 'Killed', 'Abducted'] 
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
          name: '2008-2010',
          data: [947, 2866, 3952]
      }, {
          name: '2011-2013',
          data: [575, 136, 895]
      }]
    });
  }
};

function buildPatterns() {
    if ($('#A13_Patterns').length) {
      $('#A13_Patterns').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['December 2008 - December 2010', 'January 2011 - December 2013'] 
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
          name: 'Attacks',
          data: [612, 575]
      }, {
          name: 'Killed',
          data: [2141, 136]
      }, {
          name: 'Abducted',
          data: [2120, 895]
      }]
    });
  }
};

function buildHotspotsa() {
    if ($('#A13_Hotspotsa').length) {
      $('#A13_Hotspotsa').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#4884c5",'#0d233a', '#525252', '#910000'],
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
              pointWidth: 20
          }
      },
      credits: {
        enabled: false
      },
      series: [{
          name: '# of Attacks',
          data: [113, 38, 54, 52]
      }]
    });
  }
};

function buildHotspotsb() {
    if ($('#A13_Hotspotsb').length) {
      $('#A13_Hotspotsb').highcharts({
      chart: {
          type: 'column'
      },
      colors: ['#0d233a', '#525252', '#910000'],
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
              pointWidth: 20
          }
      },
      credits: {
        enabled: false
      },
      series: [{
          name: '# of Abductees',
          data: [728, 182, 228, 253]
      }]
    });
  }
};

function buildHotspotsc() {
    if ($('#A13_Hotspotsc').length) {
      $('#A13_Hotspotsc').highcharts({
      chart: {
          type: 'column'
      },
      colors: ['#525252', '#910000'],
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
              pointWidth: 20
          }
      },
      credits: {
        enabled: false
      },
      series: [{
          name: '# of Displaced',
          data: [44100, 22000, 22700, 27000]
      }]
    });
  }
};

function buildPrefectures() {
    if ($('#A13_Prefectures').length) {
      $('#A13_Prefectures').highcharts({
      chart: {
          type: 'line'
      },
      colors: ["#4884c5",'#0d233a', '#525252', '#C7C7C7', '#910000'],
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
              pointWidth: 20
          }
      },
      credits: {
        enabled: false
      },
      series: [{
          name: 'Mbomou',
          data: [4, 55, 12, 30, 11]
      }, {
          name: 'Haut Mbomou',
          data: [61, 44, 26, 18, 18]
      }, {
          name: 'Vakaga',
          data: [1, 7, 0, 0, 0]
      }, {
          name: 'Haut Kotto',
          data: [0, 5, 0, 3, 20]
      }, {
          name: 'CAR total',
          data: [67, 113, 38, 54, 52]
      }]
    });
  }
};