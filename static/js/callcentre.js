// call centre map ********************************************************************
var symbolmap = echarts.init(document.getElementById("symbolmap"));

var option_symbolmap = {
        title: {
            text: 'Customer Location',
            textStyle: {
                color: 'gray',
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name + ' : ' + params.value;
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {}
            }
        },
        visualMap: {
            show: false,
            min: 1200,
            max: 6800,
            realtime: false,
            calculable: true,
            color: ['#527697', '#C5E4DC']
        },
        series: [{
            type: 'map',
            map: 'world',
            roam: true,
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {
                    name: 'United States',
                    value: 6616
                },
                {
                    name: 'Canada',
                    value: 1460
                },
                {
                    name: 'Australia',
                    value: 3189
                },
                {
                    name: 'France',
                    value: 1657
                },
                {
                    name: 'United Kingdom',
                    value: 1580
                },
                {
                    name: 'Germany',
                    value: 1498
                }
            ]
        }]
    };

option_symbolmap && symbolmap.setOption(option_symbolmap, true);
// window.addEventListener("resize",function(){
// 	   symbolmap.resize();
// });


// call centre horizontal bar ******************************************************************
var horizontalbars = echarts.init(document.getElementById("horizontalbars"));

var option_horizontalbars = {
        dataset: {
            source: [
                ['servicetype','amount','satisfaction'],
                ['Parts Order', 768, 77],
                ['Contact Information Change', 768, 77],
                ['Warranty Question', 864, 81],
                ['Produt Defect', 928, 79],
                ['Legal Issue', 976, 80],
                ['Installation Issue', 992, 79],
                ['Delivery Issue', 992, 80],
                ['Billing Issue', 1008, 85],
                ['Product Operation Issue', 1008, 88],
                ['Product Unusable', 1024, 79],
                ['Health & Safety Question', 1040, 83],
                ['Functionality Question', 1056, 80],
                ['Product Order', 1088, 85],
                ['Contact Cancellation Request', 1088, 82],
                ['Licensing Question', 1104, 82],
                ['Service Renewal', 1296, 76]
            ]
        },
        title: {
            text: 'Service Type',
            textStyle: {
                color: 'gray',
                fontSize: 15
            },
            subtext: '*Colored by %Satisfication',
            subtextStyle: {
            color: 'gray',
            fontSize: 12
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            // formatter: '{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%'
        },
        grid: {
      		top: '15%',
      		left: '5%',
      		right: '5%',
      		bottom: '6%',
      		containLabel: true
      	},
        xAxis: {
            type: 'value',
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    width: 0.5,
                    type: 'dashed',
                }
            }
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                color: 'gray',
                fontSize: 12
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
            // data: ['Service Renewal', 'Licensing Question', 'Contact Cancellation Request', 'Product Order', 'Functionality Question', 'Health & Safety Question', 'Product Unusable', 'Billing Issue', 'Product Operation Issue', 'Delivery Issue']
        },
        visualMap: {
            // type: 'continuous',
            show: false,
            min: 76,
            max: 88,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            // inRange: {
            //     color: ['#65B581', '#FFCE34', '#FD665F']
            // },
            dimension: 2,  // 根据数据源的哪一列做渐变色
            bottom: '15%'
        },
        series: [
            {
                type: 'bar',
                label: {show: true,color: 'gray',fontSize: 11,position: 'right'},
                encode: {
                    x: 'amount',
                    y: 'servicetype'
                }
            }
        ]
    };

option_horizontalbars && horizontalbars.setOption(option_horizontalbars);
// window.addEventListener("resize",function(){
// 	   horizontalbars.resize();
// });


// call centre stacked bar *****************************************************************************
var stackedbars = echarts.init(document.getElementById("stackedbars"));

var color=['#ECC95B','#5CA057','#79B6B2','#DE5A5C','#F0903E','#5079A4','#000000']

var option_stackedbars = {
        title: {
            text: 'Weekly Call Volume',
            textStyle: {
                color: 'gray',
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            // formatter: '{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />{a4}: {c4}%'
        },
        grid: {
      		top: '15%',
      		left: '4%',
      		right: '2%',
      		bottom: '10%',
      		containLabel: true
      	},
        legend: {
            x: 'left',
			y: 'bottom',
            data: ['Australia', 'Canada', 'France', 'Germany', 'United Kingdom', 'United States'],
            left: 'center',
			textStyle: {
				color: 'gray'
			}
        },
        xAxis: {
            type: 'category',
            axisLine: {
				show: false,
				lineStyle: {
					color: 'gray'
				}
			},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12,
                interval: 0, // 0: 标签全显示; 1: 隔一个显示
                rotate: 60
			},
            axisTick: {
              show: false
            },
            data: ['Week 46', 'Week 47', 'Week 48', 'Week 49', 'Week 50', 'Week 51', 'Week 52', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22', 'Week 23', 'Week 24', 'Week 25', 'Week 26']
        },
        yAxis: [
            {
                type: 'value',
                // scale: true,
                name: 'CallVolume',
                max: 1000,
                nameLocation: 'middle',
                nameGap: 40,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'gray'
                    }
                },
                axisLabel: {
                    show: true,
                    color: 'gray',
                    fontSize: 12,
                    // formatter: '{value}%'
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 0.5,
                        type: 'dashed',
                    }
                }
            }
        ],

        series: [
            {
                name: 'United States',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false,
                    // formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#ECC95B',
                data: [117, 127, 283, 329, 301, 178, 262, 414, 421, 345, 243, 182, 128, 109, 69, 252, 334, 310, 204, 125, 96, 96, 117, 92, 74, 26, 108, 282, 365, 265, 135, 117, 110]
            },
            {
                name: 'United Kingdom',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false,
                    // formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#5CA057',
                data: [18, 16, 97, 104, 71, 42, 44, 100, 106, 83, 50, 42, 26, 27, 11, 72, 105, 81, 47, 32, 26, 28, 33, 24, 21, 3, 23, 50, 75, 56, 22, 23, 22]
            },
            {
                name: 'Germany',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false,
                    // formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#79B6B2',
                data: [26, 21, 87, 79, 91, 36, 66, 85, 80, 68, 48, 35, 24, 16, 14, 69, 102, 93, 55, 36, 25, 32, 28, 24, 18, 4, 14, 38, 71, 55, 16, 17, 25]
            },
            {
                name: 'France',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false,
                    // formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#DE5A5C',
                data: [18, 18, 84, 110, 101, 50, 64, 93, 102, 82, 54, 41, 31, 12, 14, 62, 112, 84, 50, 47, 46, 28, 37, 29, 17, 9, 25, 62, 75, 42, 16, 17, 25]
            },
            {
                name: 'Canada',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false,
                    // formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#F0903E',
                data: [20, 23, 64, 73, 70, 46, 49, 90, 99, 89, 52, 31, 30, 23, 21, 56, 90, 67, 43, 25, 16, 34, 33, 12, 17, 6, 36, 56, 66, 50, 28, 23, 22]
            },
            {
                name: 'Australia',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false,
                    // formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#5079A4',
                data: [78, 62, 134, 145, 117, 68, 140, 213, 210, 167, 123, 91, 70, 79, 43, 108, 152, 116, 83, 69, 50, 36, 40, 33, 27, 10, 59, 161, 179, 132, 64, 68, 62]
            }
        ]
    };

option_stackedbars && stackedbars.setOption(option_stackedbars, true);
// window.addEventListener("resize",function(){
// 	   stackedbars.resize();
// });

['resize','click'].forEach(function (item) {
    window.addEventListener(item,function(){
	   symbolmap.resize();
       horizontalbars.resize();
       stackedbars.resize();
    });
});


// call centre dashboard controller ********************************************************************
function getCustomerLocation(){
	$.ajax({
		url:"/getCustomerLocation",
		success:function(data){
			option_symbolmap.visualMap.min = data.datarange.min
			option_symbolmap.visualMap.max = data.datarange.max
			option_symbolmap.series[0].data = data.dataset
			option_symbolmap && symbolmap.setOption(option_symbolmap, true)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}

function getStackedBars(){
	$.ajax({
		url:"/getStackedBars",
		success:function(data){
			option_stackedbars.legend.data = data.countrylist
			option_stackedbars.xAxis.data = data.weeknum
			var series = [];
			for(var i=0;i<data.countrylist.length;i++){
				series.push({
					name: data.countrylist[i],
					data: data.values[i],
					type: 'bar',
					stack: 'total',
					label: {show: false,},
					emphasis: {focus: 'series'},
					color: color[i],
				})
			}
            // for (const vl of series) {console.log(vl.data)}
			option_stackedbars.series = series
			option_stackedbars && stackedbars.setOption(option_stackedbars, true)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}

function getHorizontalBars(){
	$.ajax({
		url:"/getServiceTypeSort",
		success:function(data){
			option_horizontalbars.visualMap.min = data.min
			option_horizontalbars.visualMap.max = data.max
			option_horizontalbars.dataset.source = data.source
			option_horizontalbars && horizontalbars.setOption(option_horizontalbars, true)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}

function getKPIs(){
	$.ajax({
		url:"/getKPIs",
		success:function(data){
			$(".num").eq(0).text(data.opentickets)
			$(".num").eq(1).text(data.processed)
			$(".num").eq(2).text(data.firstresolved)
			$(".num").eq(3).text(data.satisfaction)
			$(".num").eq(4).text(data.sla)
			$(".num").eq(5).text(data.nps)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}

// 初始化运行一次
getCustomerLocation()
getStackedBars()
getHorizontalBars()
getKPIs()
// setInterval(getCustomerLocation,1000*86400)
// setInterval(getStackedBars,1000*86400)
// setInterval(get_r1_data,1000*86400)