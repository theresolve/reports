$(function () {
  if ($('#decline-mass-events-congo').length) {
  $('#decline-mass-events-congo').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Decline in Mass Killings and Abductions in Congo'
    },
    subtitle: {
        text: 'January 2009 - June 2013'
    },
    xAxis: {
        categories: ['Q1 09','Q2','Q3','Q4', 'Q1 10','Q2','Q3','Q4', 'Q1 11','Q2','Q3','Q4', 'Q1 12','Q2','Q3','Q4', 'Q1 13','Q2']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Major Attacks'
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
        name: 'Major LRA attacks in Congo (5 or more killings and/or 10 or more abductions)',
        data: [16, 9, 20, 18, 29, 5, 3, 2, 3, 5, 1, 0, 1, 2, 0, 0, 1, 0]
    }]
  });
}
});

$(function () {
  if ($('#executive-summary-visual-3').length) {
  $('#executive-summary-visual-3').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'LRA Activity in Haut Kotto'
    },
    subtitle: {
        text: 'January-June 2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    xAxis: {
        categories: [
          'Haut Kotto'
        ]
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
        name: 'Attacks',
        data: [8]

    }, {
        name: 'Killings',
        data: [25]

    }, {
        name: 'Abductions',
        data: [79]

    }]
  });
}
});

$(function () {
  if ($('#executive-summary-visual-2').length) {
  $('#executive-summary-visual-2').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of LRA Killings in Congo & CAR'
    },
    subtitle: {
        text: '2012-2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    xAxis: {
        categories: [
          'Congo',
          'CAR'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Killings'
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
        data: [12, 20]

    }, {
        name: '2013',
        data: [13, 34]

    }]
  });
}
});

$(function () {
  if ($('#executive-summary-visual-1').length) {
  $('#executive-summary-visual-1').highcharts({
    chart: {
        type: 'column'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    title: {
        text: 'Number of LRA Attacks From January - June'
    },
    subtitle: {
      text: '2010-2013'
    },
    xAxis: {
        categories: [
          'LRA Attacks'
        ]
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
        name: 'Jan-June 2010',
        data: [359]

    }, {
        name: 'Jan-June 2011',
        data: [218]

    }, {
        name: 'Jan-June 2012',
        data: [194]

    }, {
        name: 'Jan-June 2013',
        data: [90]

    }]
  });
}
});


$(function () {
  if ($('#attack-by-country-visual').length) {
    $('#attack-by-country-visual').highcharts({
      colors: ['rgb(51,51,51)', 'rgb(179, 84, 72)', 'rgb(150, 150, 150)'],
      title: {
          text: 'Attacks by Country',
      },
      subtitle: {
          text: 'January 2011 - January 2013',
      },
      xAxis: {
          categories: ['Jul 2011', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2012', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2013', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
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
      credits: {
        enabled: false
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: [{
          name: 'Congo',
          data: [23, 15, 6, 13, 7, 9, 13, 35, 38, 31, 21, 20, 17, 12, 11, 6, 12, 7, 17, 13, 15, 8, 5, 7]
      }, {
          name: 'CAR',
          data: [4, 0, 5, 1, 0, 1, 1, 4, 23, 1, 0, 7, 1, 0, 6, 2, 6, 3, 3, 8, 5, 1, 5, 8]
      }, {
          name: 'S Sudan',
          data: [3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    });
  };
});

$(function () {
  if ($('#attacks-by-province-car').length) {
    $('#attacks-by-province-car').highcharts({
      title: {
          text: 'LRA Attacks in CAR by Province',
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
      credits: {
        enabled: false
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

$(function () {
  if ($('#abductions-killings-car').length) {
  $('#abductions-killings-car').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'LRA Killings and Abductions by Prefecture in CAR'
    },
    subtitle: {
        text: 'January 2010 - June 2013'
    },
    xAxis: {
        categories: [
          'Killings',
          'Abductions'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Civilians'
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
        name: 'Haute Kotto',
        data: [33, 256]

    }, {
        name: 'Haut-Mbomou',
        data: [117, 307]

    }, {
        name: 'Mboumou',
        data: [107, 542]

    }, {
        name: 'Vakaga',
        data: [3, 125]

    }]
  });
  }
});
    
$(function () {
  if ($('#updf-controlled-areas-of-car').length) {
  $('#updf-controlled-areas-of-car').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'UPDF Controlled vs. Uncontrolled Areas of CAR'
    },
    subtitle: {
        text: 'January 2011 - June 2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252'],
    xAxis: {
        categories: [
          'Controlled',
          'Uncontrolled'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Killings'
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
        data: [66, 44]

    },{
        name: 'Killings',
        data: [36, 63]

    }, {
        name: 'Abductions',
        data: [179, 332]

    }]
  });
}
});

$(function () {
  if ($('#decline_in_killings').length) {
  $('#decline_in_killings').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'LRA Killings in Congo and CAR'
    },
    subtitle: {
        text: 'January 2011 - June 2013'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252'],
    xAxis: {
      categories: ['Q1 11', 'Q2', 'Q3', 'Q4', 'Q1 12', 'Q2', 'Q3', 'Q4','Q1 13', 'Q2']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Killings'
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
        name: 'Congo',
        data: [45, 49, 11, 5, 6, 6, 1, 0, 13, 0]

    },{
        name: 'CAR',
        data: [5, 6, 5, 0, 18, 2, 7, 11, 15, 30]

    }]
  });
}
});