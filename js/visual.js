$(function () {
  if ($('#attack-by-country-visual').length) {
    $('#attack-by-country-visual').highcharts({
      title: {
          text: 'Attacks by Country',
          x: -20 //center
      },
      subtitle: {
          text: 'January 2011 - January 2013',
          x: -20
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
          title: {
              text: 'Attacks'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: [{
          name: 'DR Congo',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
          name: 'CAR',
          data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
      }, {
          name: 'S Sudan',
          data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
      }, {
          name: 'Sudan',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
    });
  };
});

$(function () {
  if ($('#attacks-by-province-car').length) {
    $('#attacks-by-province-car').highcharts({
      title: {
          text: 'Reported Attacks in CAR by Province',
          x: -20 //center
      },
      subtitle: {
          text: 'January 2010 - June 2013',
          x: -20
      },
      xAxis: {
          categories: ['Q1 10', 'Q2', 'Q3', 'Q4', 'Q1 11', 'Q2', 'Q3', 'Q4', 'Q1 12', 'Q2', 'Q3', 'Q4','Q1 13', 'Q2']
      },
      yAxis: {
          title: {
              text: 'Attacks'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: [{
          name: 'Mbomou',
          data: [23, 23, 2, 2, 5, 2, 5, 0, 15, 8, 4, 3, 4, 0]
      }, {
          name: 'Haut-Mbomou',
          data: [19, 18, 4, 8, 9, 11, 4, 2, 9, 0, 3, 6, 10, 1]
      }, {
          name: 'Haute Kotto',
          data: [ 1, 1, 3, 0, ,0, 0, 0, 0, 2, 0, 0, 1, 1, 7]
      }]
    });
  };
});




