$(document).ready(function(){
	// automatic height for sidenav
	$(window).resize(function() {
	    heightAdj();
	});
    heightAdj();
	function heightAdj(){
		var doc_height = $(document).height();
		// console.log(doc_height);
		// var header = $(".header-content").outerHeight();
		$(".sidenav, .content").outerHeight(doc_height);
	}
	// sidenave toggle
	$(".hamburger").click(function(){
		$(".sidenav").toggleClass("sidenav-toggle");
		$(".black-layer").show();
		$(".adcon").toggleClass("col-md-offset-0 col-sm-offset-0 col-sm-12 col-xs-offset-0 col-xs-12 fullwidth-class");
	});
	 

	$(".sidenav").click(function(e){
  e.stopPropagation();
	});

	$(".black-layer").click(function(){
	  $(".sidenav").removeClass("sidenav-toggle");
	  $(".black-layer").hide();
	});
	// nav-list operation code
	$(".nav-list li a label").click(function(){
		// $(".child-nav-list").slideToggle();
		$(this).parent("a").siblings(".child-nav-list").slideToggle();
		$(this).parents("li").siblings("li").find(".child-nav-list").slideUp();
		$(this).parents("li").siblings("li").find(".child-nav-list li a label").removeClass("arrow_box");
		$(this).parent("a").siblings("i").toggleClass("rotate-arrow");
		$(this).parents("li").siblings("li").find("i").removeClass("rotate-arrow");
	});
	$(".child-nav-list li a label").click(function(){
		$(this).toggleClass("arrow_box active");
		$(this).parents("li").siblings("li").find("label").removeClass("arrow_box active");
	});


	$('.input-daterange input').each(function() {
	    $(this).datepicker('clearDates');
	});

	// Amchart scripts
	// chart 1
	var chart = AmCharts.makeChart( "chartdiv", {
	  "type": "pie",
	  "colors": [
	  "#fd703c",
	  "#2ad4f8"
	  ],
	  "dataProvider": [ {
	    "title": "New",
	    "value": 4852
	  }, {
	    "title": "Returning",
	    "value": 9899
	  } ],
	  "titleField": "title",
	  "valueField": "value",
	  "labelRadius": 5,

	  "radius": "20%",
	  "innerRadius": "55%",
	  "labelText": "[[title]]",
	  "export": {
	    "enabled": true
	  }
	} );
	// chart 2
	var chart = AmCharts.makeChart("chartdiv2", {
	  "type": "serial",
	  "colors": [
		  "#556ea5",
		  "#e9483c",
	    "#5219b7"
		  ],
	  "marginRight": 70,
	  "dataProvider": [{
	    "country": "USA",
	    "visits": 2025,
	    "color": "#556ea5"
	  }, {
	    "country": "China",
	    "visits": 1882,
	    "color": "#e9483c"
	  }, {
	    "country": "Japan",
	    "visits": 1809,
	    "color": "#5219b7"
	  }, {
	    "country": "Germany",
	    "visits": 1622,
	    "color": "#556ea5"
	  }, {
	    "country": "UK",
	    "visits": 1922,
	    "color": "#e9483c"
	  }],
	  "valueAxes": [{
	    "axisAlpha": 0,
	    "position": "left",
	    "title": "Visitors from country"
	  }],
	  "startDuration": 1,
	  "graphs": [{
	    "balloonText": "<b>[[category]]: [[value]]</b>",
	    "fillColorsField": "color",
	    "fillAlphas": 0.9,
	    "lineAlpha": 0.2,
	    "type": "column",
	    "valueField": "visits"
	  }],
	  "chartCursor": {
	    "categoryBalloonEnabled": false,
	    "cursorAlpha": 0,
	    "zoomable": false
	  },
	  "categoryField": "country",
	  "categoryAxis": {
	    "gridPosition": "start",
	    "labelRotation": 45
	  },
	  "export": {
	    "enabled": true
	  }

	});
	// chart3
	var chart = AmCharts.makeChart( "chartdiv3", {
	  "type": "pie",
	  "colors": [
	  "#05b488",
	  "#47b9c2"
	  ],
	  "dataProvider": [ {
	    "title": "New",
	    "value": 4852
	  }, {
	    "title": "Returning",
	    "value": 9899
	  } ],
	  "titleField": "title",
	  "valueField": "value",
	  "labelRadius": 5,

	  "radius": "20%",
	  "innerRadius": "55%",
	  "labelText": "[[title]]",
	  "export": {
	    "enabled": true
	  }
	} );
	// chart4
	var chart = AmCharts.makeChart( "chartdiv4", {
	  "type": "pie",
	  "colors": [
	  "#f23811",
	  "#fa5a1e"
	  ],
	  "dataProvider": [ {
	    "title": "New",
	    "value": 4852
	  }, {
	    "title": "Returning",
	    "value": 9899
	  } ],
	  "titleField": "title",
	  "valueField": "value",
	  "labelRadius": 5,

	  "radius": "20%",
	  "innerRadius": "55%",
	  "labelText": "[[title]]",
	  "export": {
	    "enabled": true
	  }
	} );
	// chart5
	var chart = AmCharts.makeChart( "chartdiv5", {
	  "type": "pie",
	  "colors": [
	  "#017041",
	  "#30a578"
	  ],
	  "dataProvider": [ {
	    "title": "New",
	    "value": 4852
	  }, {
	    "title": "Returning",
	    "value": 9899
	  } ],
	  "titleField": "title",
	  "valueField": "value",
	  "labelRadius": 5,

	  "radius": "20%",
	  "innerRadius": "55%",
	  "labelText": "[[title]]",
	  "export": {
	    "enabled": true
	  }
	} );
	// chart6
	var chart = AmCharts.makeChart("chartdiv6",
	{
	    "type": "serial",
	    "theme": "light",
	    "dataProvider": [{
	        "name": "John",
	        "points": 35654,
	        "color": "#7F8DA9",
	        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
	    }, {
	        "name": "Damon",
	        "points": 65456,
	        "color": "#FEC514",
	        "bullet": "https://www.amcharts.com/lib/images/faces/C02.png"
	    }, {
	        "name": "Patrick",
	        "points": 45724,
	        "color": "#DB4C3C",
	        "bullet": "https://www.amcharts.com/lib/images/faces/D02.png"
	    }],
	    "valueAxes": [{
	        "maximum": 80000,
	        "minimum": 0,
	        "axisAlpha": 0,
	        "dashLength": 4,
	        "position": "left"
	    }],
	    "startDuration": 1,
	    "graphs": [{
	        "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
	        "bulletOffset": 10,
	        "bulletSize": 52,
	        "colorField": "color",
	        "cornerRadiusTop": 8,
	        "customBulletField": "bullet",
	        "fillAlphas": 0.8,
	        "lineAlpha": 0,
	        "type": "column",
	        "valueField": "points"
	    }],
	    "marginTop": 0,
	    "marginRight": 0,
	    "marginLeft": 0,
	    "marginBottom": 0,
	    "autoMargins": false,
	    "categoryField": "name",
	    "categoryAxis": {
	        "axisAlpha": 0,
	        "gridAlpha": 0,
	        "inside": true,
	        "tickLength": 0
	    },
	    "export": {
	    	"enabled": true
	     }
		});
		//chart7 
		var chart = AmCharts.makeChart( "chartdiv7", {
	  "type": "radar",
	  "theme": "light",
	  "dataProvider": [ {
	    "country": "Czech Republic",
	    "litres": 156.9
	  }, {
	    "country": "Ireland",
	    "litres": 131.1
	  }, {
	    "country": "Germany",
	    "litres": 115.8
	  }, {
	    "country": "Australia",
	    "litres": 109.9
	  }, {
	    "country": "Austria",
	    "litres": 108.3
	  }, {
	    "country": "UK",
	    "litres": 99
	  } ],
	  "valueAxes": [ {
	    "axisTitleOffset": 20,
	    "minimum": 0,
	    "axisAlpha": 0.15
	  } ],
	  "startDuration": 2,
	  "graphs": [ {
	    "balloonText": "[[value]] litres of beer per year",
	    "bullet": "round",
	    "lineThickness": 2,
	    "valueField": "litres"
	  } ],
	  "categoryField": "country",
	  "export": {
	    "enabled": true
	  }
	} );
		// chart8
		var chart = AmCharts.makeChart( "chartdiv8", {
	  "type": "serial",
	  "theme": "light",
	  "marginRight": 40,
	  "marginLeft": 40,
	  "autoMarginOffset": 20,
	  "dataDateFormat": "YYYY-MM-DD",
	  "valueAxes": [ {
	    "id": "v1",
	    "axisAlpha": 0,
	    "position": "left",
	    "ignoreAxisWidth": true
	  } ],
	  "balloon": {
	    "borderThickness": 1,
	    "shadowAlpha": 0
	  },
	  "graphs": [ {
	    "id": "g1",
	    "balloon": {
	      "drop": true,
	      "adjustBorderColor": false,
	      "color": "#ffffff",
	      "type": "smoothedLine"
	    },
	    "fillAlphas": 0.2,
	    "bullet": "round",
	    "bulletBorderAlpha": 1,
	    "bulletColor": "#FFFFFF",
	    "bulletSize": 5,
	    "hideBulletsCount": 50,
	    "lineThickness": 2,
	    "title": "red line",
	    "useLineColorForBulletBorder": true,
	    "valueField": "value",
	    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
	  } ],
	  "chartCursor": {
	    "valueLineEnabled": true,
	    "valueLineBalloonEnabled": true,
	    "cursorAlpha": 0,
	    "zoomable": false,
	    "valueZoomable": true,
	    "valueLineAlpha": 0.5
	  },
	  "valueScrollbar": {
	    "autoGridCount": true,
	    "color": "#000000",
	    "scrollbarHeight": 50
	  },
	  "categoryField": "date",
	  "categoryAxis": {
	    "parseDates": true,
	    "dashLength": 1,
	    "minorGridEnabled": true
	  },
	  "export": {
	    "enabled": true
	  },
	  "dataProvider": [ {
	    "date": "2012-07-27",
	    "value": 13
	  }, {
	    "date": "2012-07-28",
	    "value": 11
	  }, {
	    "date": "2012-07-29",
	    "value": 15
	  }, {
	    "date": "2012-07-30",
	    "value": 16
	  }, {
	    "date": "2012-07-31",
	    "value": 18
	  }, {
	    "date": "2012-08-01",
	    "value": 13
	  }, {
	    "date": "2012-08-02",
	    "value": 22
	  }, {
	    "date": "2012-08-03",
	    "value": 23
	  }, {
	    "date": "2012-08-04",
	    "value": 20
	  }, {
	    "date": "2012-08-05",
	    "value": 17
	  }, {
	    "date": "2012-08-06",
	    "value": 16
	  }, {
	    "date": "2012-08-07",
	    "value": 18
	  }, {
	    "date": "2012-08-08",
	    "value": 21
	  }, {
	    "date": "2012-08-09",
	    "value": 26
	  }, {
	    "date": "2012-08-10",
	    "value": 24
	  }, {
	    "date": "2012-08-11",
	    "value": 29
	  }, {
	    "date": "2012-08-12",
	    "value": 32
	  }, {
	    "date": "2012-08-13",
	    "value": 18
	  }, {
	    "date": "2012-08-14",
	    "value": 24
	  }, {
	    "date": "2012-08-15",
	    "value": 22
	  }, {
	    "date": "2012-08-16",
	    "value": 18
	  }, {
	    "date": "2012-08-17",
	    "value": 19
	  }, {
	    "date": "2012-08-18",
	    "value": 14
	  }, {
	    "date": "2012-08-19",
	    "value": 15
	  }, {
	    "date": "2012-08-20",
	    "value": 12
	  }, {
	    "date": "2012-08-21",
	    "value": 8
	  }, {
	    "date": "2012-08-22",
	    "value": 9
	  }, {
	    "date": "2012-08-23",
	    "value": 8
	  }, {
	    "date": "2012-08-24",
	    "value": 7
	  }, {
	    "date": "2012-08-25",
	    "value": 5
	  }, {
	    "date": "2012-08-26",
	    "value": 11
	  }, {
	    "date": "2012-08-27",
	    "value": 13
	  }, {
	    "date": "2012-08-28",
	    "value": 18
	  }, {
	    "date": "2012-08-29",
	    "value": 20
	  }, {
	    "date": "2012-08-30",
	    "value": 29
	  }, {
	    "date": "2012-08-31",
	    "value": 33
	  }, {
	    "date": "2012-09-01",
	    "value": 42
	  }, {
	    "date": "2012-09-02",
	    "value": 35
	  }, {
	    "date": "2012-09-03",
	    "value": 31
	  }, {
	    "date": "2012-09-04",
	    "value": 47
	  }, {
	    "date": "2012-09-05",
	    "value": 52
	  }, {
	    "date": "2012-09-06",
	    "value": 46
	  }, {
	    "date": "2012-09-07",
	    "value": 41
	  }, {
	    "date": "2012-09-08",
	    "value": 43
	  }, {
	    "date": "2012-09-09",
	    "value": 40
	  }, {
	    "date": "2012-09-10",
	    "value": 39
	  }, {
	    "date": "2012-09-11",
	    "value": 34
	  }, {
	    "date": "2012-09-12",
	    "value": 29
	  }, {
	    "date": "2012-09-13",
	    "value": 34
	  }, {
	    "date": "2012-09-14",
	    "value": 37
	  }, {
	    "date": "2012-09-15",
	    "value": 42
	  }, {
	    "date": "2012-09-16",
	    "value": 49
	  }, {
	    "date": "2012-09-17",
	    "value": 46
	  }, {
	    "date": "2012-09-18",
	    "value": 47
	  }, {
	    "date": "2012-09-19",
	    "value": 55
	  }, {
	    "date": "2012-09-20",
	    "value": 59
	  }, {
	    "date": "2012-09-21",
	    "value": 58
	  }, {
	    "date": "2012-09-22",
	    "value": 57
	  }, {
	    "date": "2012-09-23",
	    "value": 61
	  }, {
	    "date": "2012-09-24",
	    "value": 59
	  }, {
	    "date": "2012-09-25",
	    "value": 67
	  }, {
	    "date": "2012-09-26",
	    "value": 65
	  }, {
	    "date": "2012-09-27",
	    "value": 61
	  }, {
	    "date": "2012-09-28",
	    "value": 66
	  }, {
	    "date": "2012-09-29",
	    "value": 69
	  }, {
	    "date": "2012-09-30",
	    "value": 71
	  }, {
	    "date": "2012-10-01",
	    "value": 67
	  }, {
	    "date": "2012-10-02",
	    "value": 63
	  }, {
	    "date": "2012-10-03",
	    "value": 46
	  }, {
	    "date": "2012-10-04",
	    "value": 32
	  }, {
	    "date": "2012-10-05",
	    "value": 21
	  }, {
	    "date": "2012-10-06",
	    "value": 18
	  }, {
	    "date": "2012-10-07",
	    "value": 21
	  }, {
	    "date": "2012-10-08",
	    "value": 28
	  }, {
	    "date": "2012-10-09",
	    "value": 27
	  }, {
	    "date": "2012-10-10",
	    "value": 36
	  }, {
	    "date": "2012-10-11",
	    "value": 33
	  }, {
	    "date": "2012-10-12",
	    "value": 31
	  }, {
	    "date": "2012-10-13",
	    "value": 30
	  }, {
	    "date": "2012-10-14",
	    "value": 34
	  }, {
	    "date": "2012-10-15",
	    "value": 38
	  }, {
	    "date": "2012-10-16",
	    "value": 37
	  }, {
	    "date": "2012-10-17",
	    "value": 44
	  }, {
	    "date": "2012-10-18",
	    "value": 49
	  }, {
	    "date": "2012-10-19",
	    "value": 53
	  }, {
	    "date": "2012-10-20",
	    "value": 57
	  }, {
	    "date": "2012-10-21",
	    "value": 60
	  }, {
	    "date": "2012-10-22",
	    "value": 61
	  }, {
	    "date": "2012-10-23",
	    "value": 69
	  }, {
	    "date": "2012-10-24",
	    "value": 67
	  }, {
	    "date": "2012-10-25",
	    "value": 72
	  }, {
	    "date": "2012-10-26",
	    "value": 77
	  }, {
	    "date": "2012-10-27",
	    "value": 75
	  }, {
	    "date": "2012-10-28",
	    "value": 70
	  }, {
	    "date": "2012-10-29",
	    "value": 72
	  }, {
	    "date": "2012-10-30",
	    "value": 70
	  }, {
	    "date": "2012-10-31",
	    "value": 72
	  }, {
	    "date": "2012-11-01",
	    "value": 73
	  }, {
	    "date": "2012-11-02",
	    "value": 67
	  }, {
	    "date": "2012-11-03",
	    "value": 68
	  }, {
	    "date": "2012-11-04",
	    "value": 65
	  }, {
	    "date": "2012-11-05",
	    "value": 71
	  }, {
	    "date": "2012-11-06",
	    "value": 75
	  }, {
	    "date": "2012-11-07",
	    "value": 74
	  }, {
	    "date": "2012-11-08",
	    "value": 71
	  }, {
	    "date": "2012-11-09",
	    "value": 76
	  }, {
	    "date": "2012-11-10",
	    "value": 77
	  }, {
	    "date": "2012-11-11",
	    "value": 81
	  }, {
	    "date": "2012-11-12",
	    "value": 83
	  }, {
	    "date": "2012-11-13",
	    "value": 80
	  }, {
	    "date": "2012-11-14",
	    "value": 81
	  }, {
	    "date": "2012-11-15",
	    "value": 87
	  }, {
	    "date": "2012-11-16",
	    "value": 82
	  }, {
	    "date": "2012-11-17",
	    "value": 86
	  }, {
	    "date": "2012-11-18",
	    "value": 80
	  }, {
	    "date": "2012-11-19",
	    "value": 87
	  }, {
	    "date": "2012-11-20",
	    "value": 83
	  }, {
	    "date": "2012-11-21",
	    "value": 85
	  }, {
	    "date": "2012-11-22",
	    "value": 84
	  }, {
	    "date": "2012-11-23",
	    "value": 82
	  }, {
	    "date": "2012-11-24",
	    "value": 73
	  }, {
	    "date": "2012-11-25",
	    "value": 71
	  }, {
	    "date": "2012-11-26",
	    "value": 75
	  }, {
	    "date": "2012-11-27",
	    "value": 79
	  }, {
	    "date": "2012-11-28",
	    "value": 70
	  }, {
	    "date": "2012-11-29",
	    "value": 73
	  }, {
	    "date": "2012-11-30",
	    "value": 61
	  }, {
	    "date": "2012-12-01",
	    "value": 62
	  }, {
	    "date": "2012-12-02",
	    "value": 66
	  }, {
	    "date": "2012-12-03",
	    "value": 65
	  }, {
	    "date": "2012-12-04",
	    "value": 73
	  }, {
	    "date": "2012-12-05",
	    "value": 79
	  }, {
	    "date": "2012-12-06",
	    "value": 78
	  }, {
	    "date": "2012-12-07",
	    "value": 78
	  }, {
	    "date": "2012-12-08",
	    "value": 78
	  }, {
	    "date": "2012-12-09",
	    "value": 74
	  }, {
	    "date": "2012-12-10",
	    "value": 73
	  }, {
	    "date": "2012-12-11",
	    "value": 75
	  }, {
	    "date": "2012-12-12",
	    "value": 70
	  }, {
	    "date": "2012-12-13",
	    "value": 77
	  }, {
	    "date": "2012-12-14",
	    "value": 67
	  }, {
	    "date": "2012-12-15",
	    "value": 62
	  }, {
	    "date": "2012-12-16",
	    "value": 64
	  }, {
	    "date": "2012-12-17",
	    "value": 61
	  }, {
	    "date": "2012-12-18",
	    "value": 59
	  }, {
	    "date": "2012-12-19",
	    "value": 53
	  }, {
	    "date": "2012-12-20",
	    "value": 54
	  }, {
	    "date": "2012-12-21",
	    "value": 56
	  }, {
	    "date": "2012-12-22",
	    "value": 59
	  }, {
	    "date": "2012-12-23",
	    "value": 58
	  }, {
	    "date": "2012-12-24",
	    "value": 55
	  }, {
	    "date": "2012-12-25",
	    "value": 52
	  }, {
	    "date": "2012-12-26",
	    "value": 54
	  }, {
	    "date": "2012-12-27",
	    "value": 50
	  }, {
	    "date": "2012-12-28",
	    "value": 50
	  }, {
	    "date": "2012-12-29",
	    "value": 51
	  }, {
	    "date": "2012-12-30",
	    "value": 52
	  }, {
	    "date": "2012-12-31",
	    "value": 58
	  }, {
	    "date": "2013-01-01",
	    "value": 60
	  }, {
	    "date": "2013-01-02",
	    "value": 67
	  }, {
	    "date": "2013-01-03",
	    "value": 64
	  }, {
	    "date": "2013-01-04",
	    "value": 66
	  }, {
	    "date": "2013-01-05",
	    "value": 60
	  }, {
	    "date": "2013-01-06",
	    "value": 63
	  }, {
	    "date": "2013-01-07",
	    "value": 61
	  }, {
	    "date": "2013-01-08",
	    "value": 60
	  }, {
	    "date": "2013-01-09",
	    "value": 65
	  }, {
	    "date": "2013-01-10",
	    "value": 75
	  }, {
	    "date": "2013-01-11",
	    "value": 77
	  }, {
	    "date": "2013-01-12",
	    "value": 78
	  }, {
	    "date": "2013-01-13",
	    "value": 70
	  }, {
	    "date": "2013-01-14",
	    "value": 70
	  }, {
	    "date": "2013-01-15",
	    "value": 73
	  }, {
	    "date": "2013-01-16",
	    "value": 71
	  }, {
	    "date": "2013-01-17",
	    "value": 74
	  }, {
	    "date": "2013-01-18",
	    "value": 78
	  }, {
	    "date": "2013-01-19",
	    "value": 85
	  }, {
	    "date": "2013-01-20",
	    "value": 82
	  }, {
	    "date": "2013-01-21",
	    "value": 83
	  }, {
	    "date": "2013-01-22",
	    "value": 88
	  }, {
	    "date": "2013-01-23",
	    "value": 85
	  }, {
	    "date": "2013-01-24",
	    "value": 85
	  }, {
	    "date": "2013-01-25",
	    "value": 80
	  }, {
	    "date": "2013-01-26",
	    "value": 87
	  }, {
	    "date": "2013-01-27",
	    "value": 84
	  }, {
	    "date": "2013-01-28",
	    "value": 83
	  }, {
	    "date": "2013-01-29",
	    "value": 84
	  }, {
	    "date": "2013-01-30",
	    "value": 81
	  } ]
	} );

});