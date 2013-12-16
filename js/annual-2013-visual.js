$(document).ready(function() {
  getVisualData()
});

function getVisualData() {  
  var executive_summary_1_killing_data = [];

  $.when().done(function() {
  buildES1()
  buildES2()
  });
};

function buildES1() {
    if ($('#A13_ES_1').length) {
      $('#A13_ES_1').highcharts({
      chart: {
          type: 'column'
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