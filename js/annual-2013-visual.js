$(document).ready(function() {
  getVisualData()
});

function getVisualData() {  

  $.when().done(function() {
  buildES1();
  buildES2();
  buildES4();
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
          data: [4, 9]
      }, {
          name: 'Captured/Escaped',
          data: [9, 3]
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

function buildES4() {
    if ($('#A13_ES_4').length) {
      $('#A13_ES_4').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#4884c5",'#0d233a', '#525252', '#910000'],
      title: {
        text: 'Long-term Vs. Short-term Abductions by Age'
      },
      subtitle: {
        text: 'January-December 2013'
      },
      xAxis: {
        categories: ['Adults held < 30 days', 'Adults held > 30 days', 'Children < 30 days', 'Children > 30 days']
      },
      yAxis: {
          min: 0,
          title: {
              text: '# of Abductees'
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
          name: '# of Abductees',
          data: [5, 5, 5, 5]
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
          name: '# of Total Abductions',
          data: [5, 5]
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
        text: 'Foodstuffs Looted'
      },
      subtitle: {
        text: 'January-December 2013'
      },
      xAxis: {
        categories: ['Grain', 'Rice']
      },
      yAxis: {
          min: 0,
          title: {
              text: '# of Lootings'
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
          data: [5, 5]
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
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: 'Non-Foodstuffs Looted'
      },
      subtitle: {
        text: 'January-December 2013'
      },
      xAxis: {
        categories: ['Batteries', 'Sat Phones']
      },
      yAxis: {
          min: 0,
          title: {
              text: '# of Lootings'
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
          data: [5, 5]
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
        text: 'Reduction in LRA Fighting Capacity'
      },
      subtitle: {
        text: 'January-December 2013'
      },
      xAxis: {
        categories: ['Killed', 'Defected', 'Captured']
      },
      yAxis: {
          min: 0,
          title: {
              text: '# of Combatants'
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
          data: [5, 5, 5]
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
        text: 'Length of Abduction'
      },
      subtitle: {
        text: 'January-December 2013'
      },
      xAxis: {
        categories: ['Adults', 'Children']
      },
      yAxis: {
          min: 0,
          title: {
              text: 'No. of Abductees'
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
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: 'Forces Observed'
      },
      subtitle: {
        text: 'January-December 2013'
      },
      xAxis: {
        categories: ['1-2', '3-4', '5-6', '7-8', '9-10', '11+']
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Forces Observed'
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
          name: 'LRA Forces Observed',
          data: [5, 5, 5, 5, 5, 5]
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
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: 'Number of Civilians Abducted Per Attack'
      },
      subtitle: {
        text: 'January-December 2013'
      },
      xAxis: {
        categories: ['1-2', '3-4', '5-6', '7-8', '9-10', '11+']
      },
      yAxis: {
          min: 0,
          title: {
              text: '# Abudcted'
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
          name: '# Abducted',
          data: [5, 5, 5, 5, 5, 5]
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
        text: 'LRA Attacks and Victim Livelihoods'
      },
      subtitle: {
        text: 'January-December 2013'
      },
      xAxis: {
        categories: ['Fishermen', 'Hunters', 'Traders', 'Farmers']
      },
      yAxis: {
          min: 0,
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
          data: [5, 5, 5, 5]
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