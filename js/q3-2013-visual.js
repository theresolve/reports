$(document).ready(function() {
  getVisualData()
});

function getVisualData() {  
  var executive_summary_1_killing_data = [];
  var executive_summary_1_abduction_data = [];
  var executive_summary_2_drc_data = [];
  var executive_summary_2_car_data = [];  

  var get_executive_summary_1_killing_data = $.getJSON( 'http://lra.herokuapp.com/metrics/incidents.json?callback=?&type=attacks&start_date=2011-01-01&end_date=2013-09-01&duration=quarter&group=civilian_fatalities', function (data) {
      for(var i = 0; i < data.periods.length; i++) { 
        executive_summary_1_killing_data.push([data.periods[i].count])
      }
  });
  var get_executive_summary_1_abduction_data = $.getJSON( 'http://lra.herokuapp.com/metrics/incidents.json?callback=?&type=attacks&start_date=2011-01-01&end_date=2013-09-01&duration=quarter&group=civilian_abductions', function (data) {
      for(var i = 0; i < data.periods.length; i++) { 
        executive_summary_1_abduction_data.push([data.periods[i].count])
      }
  });
  var get_executive_summary_2_drc_data = $.getJSON( 'http://lra.herokuapp.com/metrics/incidents.json?callback=?&type=attacks&start_date=2011-01-01&end_date=2013-09-01&duration=quarter&country=DRC', function (data) {
      for(var i = 0; i < data.periods.length; i++) { 
        executive_summary_2_drc_data.push([data.periods[i].count])
      }
  });
  var get_executive_summary_2_car_data = $.getJSON( 'http://lra.herokuapp.com/metrics/incidents.json?callback=?&type=attacks&start_date=2011-01-01&end_date=2013-09-01&duration=quarter&country=CAR', function (data) {
      for(var i = 0; i < data.periods.length; i++) { 
        executive_summary_2_car_data.push([data.periods[i].count])
      }
  });
  $.when(
           
           get_executive_summary_1_killing_data, 
           get_executive_summary_1_abduction_data,
           get_executive_summary_2_drc_data, 
           get_executive_summary_2_car_data

        ).done(function() {
    
    window.data = executive_summary_2_drc_data;
    buildExecutiveSummary1(executive_summary_1_killing_data, executive_summary_1_abduction_data)
    buildExecutiveSummary2(executive_summary_2_drc_data, executive_summary_2_car_data)
    buildUAG()
  });
};

function buildExecutiveSummary1(executive_summary_1_killing_data, executive_summary_1_abduction_data) {
    if ($('#executive-summary-1').length) {
  $('#executive-summary-1').highcharts({
    chart: {
      type: 'line'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    title: {
        text: "LRA Killings and Abductions by Quarter"
    },
    subtitle: {
        text: "January 2011-September 2013"
    },
    xAxis: {
      categories: ['Q1 11','Q2','Q3','Q4', 'Q1 12','Q2','Q3','Q4', 'Q1 13','Q2','Q3']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    // tooltip: {
    //   formatter: function() {
    //     return '<b>'+ this.series.name +'</b><br/>'+
    //     Highcharts.dateFormat(' Start of Quarter - %b %e, %Y', this.x) +'<br/>'+ this.y;
    //   }
    // },
    credits: {
      enabled: false
    },
    series: [{
        name: "LRA Fatalities",
        data: executive_summary_1_killing_data
    },{
        name: "LRA Abductions",
        data: executive_summary_1_abduction_data
    }]
  });
};
};

function buildExecutiveSummary2(executive_summary_2_drc_data, executive_summary_2_car_data) {
  if ($('#executive-summary-2').length) {
  $('#executive-summary-2').highcharts({
    chart: {
        type: 'column'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    title: {
        text: "LRA Attacks in CAR and Congo"
    },
    subtitle: {
        text: "January 2010-September 2013"
    },
    xAxis: {
      categories: ['Q1 11','Q2','Q3','Q4', 'Q1 12','Q2','Q3','Q4', 'Q1 13','Q2','Q3']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    // tooltip: {
    //   formatter: function() {
    //     return '<b>'+ this.series.name +'</b><br/>'+
    //     Highcharts.dateFormat(' Start of Quarter - %b %e, %Y', this.x) +'<br/>'+ this.y;
    //   }
    // },
    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },
    credits: {
      enabled: false
    },
    series: [ {
        name: "LRA Attacks in CAR",
        data: executive_summary_2_car_data
    },{
        name: "LRA Attacks in DRC",
        data: executive_summary_2_drc_data
    }]
  });
 };
};

function buildUAG() {
    if ($('#uag-q3-2013').length) {
      $('#uag-q3-2013').highcharts({
      chart: {
          type: 'column'
      },
      colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
      title: {
        text: 'LRA vs. Unidentified Armed Group (UAG) Attacks in LRA-affected Areas of Congo'
      },
      subtitle: {
        text: 'July-Sept 2013'
      },
      xAxis: {
          labels: {
            enabled: false
          }
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
          data: [31]
      }, {
          name: 'UAG',
          data: [10]
      }]
    });
  }
};