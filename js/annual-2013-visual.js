$(document).ready(function() {
  getVisualData()
});

function getVisualData() {  

  $.when().done(function() {
  buildES1();
  buildES2();
  buildES4();
  buildES5();
  buildES6();
  });
};

function buildES1() {
    if ($('#A13_ES_1').length) {
      $('#A13_ES_1').highcharts({
      chart: {
          type: 'line'
      },
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: 'Return of Ugandan Male Fighters By Quarter'
      },
      subtitle: {
        text: 'January-December 2013'
      },
      xAxis: {
        categories: ['Q1','Q2','Q3', 'Q4']
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Number of Ugandan Male Fighters'
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
          name: 'Number of Ugandan Male Fighters',
          data: [5, 5, 5, 5]
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
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: 'Long-term Women and Child Returnees by Year'
      },
      subtitle: {
        text: '2011-2013'
      },
      xAxis: {
        categories: ['2011','2012','2013']
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Long-term Women and Child Returnees'
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
          name: 'Long-term Women and Child Returnees',
          data: [5, 5, 5]
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
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: 'Mass LRA Attacks and Total Abductions'
      },
      subtitle: {
        text: 'January-December 2013'
      },
      xAxis: {
        categories: ['Areas of CAR controlled by ex-Seleka rebels', 'Other LRA-affected areas']
      },
      yAxis: {
          min: 0,
          title: {
              text: '# of Mass LRA Attacks or Total Abductions'
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
          name: '# of Mass LRA Attacks',
          data: [5, 5]
      }, {
          name: '# of Total Abductions',
          data: [5, 5]
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
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: 'LRA Attacks and Victim Livelihood'
      },
      subtitle: {
        text: 'January-December 2013'
      },
      xAxis: {
        categories: ['Hunters', 'Fisherpeople', 'Farmers', 'Traders']
      },
      yAxis: {
          min: 0,
          title: {
              text: '# of LRA-affected individuals'
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
          name: 'Killed',
          data: [5, 5, 5, 5]
      }, {
          name: 'Abducted',
          data: [5, 5, 5, 5]
      },  {
          name: 'Robbed',
          data: [5, 5, 5, 5]
      }]
    });
  }
};

function buildES6() {
    if ($('#A13_ES_6').length) {
      $('#A13_ES_6').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
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