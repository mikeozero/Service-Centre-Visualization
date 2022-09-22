// Mortgage left bottom
// ec_c1 ****************************************************************************
var ec_c1 = echarts.init(document.getElementById("c1"));

var color=['#00EE00','#ff9f7f','#FFD700','#00ced1','#4682B4','#FF0000','#000000']

var option_c1 = {

      	// backgroundColor: '#FFF0F5',

      	title: {
      		text: 'Residential Mortgage Regional Delinquency',
      		// subtext: '模拟数据',
      		// x: 'center',
			textStyle: {
				color: 'gray',
				fontSize: 15
			},
			left: 'left'
      	},

      	legend: {
      		// orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
      		// orient: 'horizontal',
      		// x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
      		// x: 'left',
      		// y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
      		// y: 'top',
			orient: 'horizontal',
			x: 'left',
			y: 'bottom',
			left: 'center',
      		data: [],
			textStyle: {
				color: 'gray'
			}
      	},

      	//  图表距边框的距离,可选值：'百分比'¦ {number}（单位px）
      	grid: {
      		top: '15%', // 50 等价于 y: '16%'
      		left: '6%',
      		right: '5%',
      		bottom: '20%',
      		containLabel: true
      	},

      	// 提示框
      	tooltip: {
      		trigger: 'axis',
			axisPointer: {
				type: 'line',
				lineStyle: {
					color: '#7171C6'
				}
			},
			formatter: '{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />{a4}: {c4}%<br />{a5}: {c5}%<br />{a6}: {c6}%'
      	},

      	xAxis: {
      		// name: '周几',
      		type: 'category',
			// splitNumber: 0,
			axisLine: {
				show: true,
				lineStyle: {
					// 设置y轴颜色
					color: 'gray'
				}
			},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12,
				rotate: 0,
				interval: 0 //设置X轴数据间隔几个显示一个，为0表示都显示
			},
      		// // boundaryGap值为false的时候，折线第一个点在y轴上
      		// boundaryGap: false,
      		data: []
      	},

      	yAxis: {
      		name: '% Delinquency Rate',
			nameLocation: 'middle',
			nameGap: 35,
      		type: 'value',
      		// min: 0, // 设置y轴刻度的最小值
      		// max: 1800, // 设置y轴刻度的最大值
      		splitNumber: 0, // 设置y轴刻度间隔个数
      		axisLine: {
				show: true,
      			lineStyle: {
      				// 设置y轴颜色
      				color: 'gray'
      			}
      		},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12,
				formatter: '{value}%'
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#172738',
					width: 1,
					type: 'solid'
				}
			}
      	},

      	series: [{
      			name: 'xxx',
      			data: [],
      			type: 'line',
      			// 设置小圆点消失 symbol: 'none',
      			// 注意：设置symbol: 'none'以后，拐点不存在了，设置拐点上显示数值无效
      			// 设置折线弧度，取值：0-1之间
				color: '#00EE00',
      			smooth: false
      		}
      	]
    };

ec_c1.setOption(option_c1)
// window.addEventListener("resize",function(){
// 	   ec_c1.resize();
// });
// window.addEventListener("click",function(){
// 	   ec_c1.resize();
// });

// Mortgage right bottom ec_c2 *********************************************************************************************
var ec_c2 = echarts.init(document.getElementById("c2"));

var option_c2 = {
    title: {
        text: 'New Uninsured Mortgage: Authorized Amount',
        textStyle: {
            color: 'gray',
            fontSize: 15
        },
        subtext: 'Distribution by Amortization Range',
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
        formatter: '{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%'
    },
    legend: {
        x: 'left',
		y: 'bottom',
        left: 'center',
        textStyle: {
            color: 'gray'
        },
        data: ['20 yrs or Less', '20 to 25 yrs', 'More than 25yrs']
    },
    grid: {
        top: '23%',
        left: '6%',
        right: '5%',
        bottom: '12%',
        containLabel: true
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            axisLine: {
				show: true,
				lineStyle: {
					color: 'gray'
				}
			},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12
			},
            data: ['Q4-13', 'Q1-14', 'Q2-14', 'Q3-14', 'Q4-14']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Percent',
            nameLocation: 'middle',
            nameGap: 40,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'gray'
                }
      		},
            axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12,
				formatter: '{value}%'
			},
            splitLine: {
				show: false,
				lineStyle: {
					color: '#808080',
					width: 1,
					type: 'solid'
				}
			}
        }
    ],
    series: [
        {
            name: '20 yrs or Less',
            type: 'bar',
            barGap: 0,
            label: {show: true,color: 'gray',fontSize: 11,position: 'top',formatter: '{c}%'},
            emphasis: {
                focus: 'series'
            },
            color: 'steelblue',
            data: [320, 332, 301, 334, 390]
        },
        {
            name: '20 to 25 yrs',
            type: 'bar',
            label: {show: true,color: 'gray',fontSize: 11,position: 'top',formatter: '{c}%'},
            emphasis: {
                focus: 'series'
            },
            color: '#CD5C5C',
            data: [220, 182, 191, 234, 290]
        },
        {
            name: 'More than 25yrs',
            type: 'bar',
            label: {show: true,color: 'gray',fontSize: 11,position: 'top',formatter: '{c}%'},
            emphasis: {
                focus: 'series'
            },
            color: '#ADCD7E',
            data: [150, 232, 201, 154, 190]
        }
    ]
};

ec_c2.setOption(option_c2);
// window.addEventListener("resize",function(){
// 	   ec_c2.resize();
// });
// window.addEventListener("click",function(){
// 	   ec_c2.resize();
// });

// Mortgage left top ec_l1 ********************************************************************************************
var ec_l1 = echarts.init(document.getElementById("l1"));

var option_l1 = {
        title: {
            text: 'Residential Mortgages Reportable Delinquency',
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
            formatter: '{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%'
        },
        grid: {
      		top: '15%',
      		left: '6%',
      		right: '5%',
      		bottom: '15%',
      		containLabel: true
      	},
        legend: {
            x: 'left',
			y: 'bottom',
            data: ['>90 dpd', '31-90 dpd', 'Reportable Delinquency'],
            left: 'center',
			textStyle: {
				color: 'gray'
			}
        },
        xAxis: {
            type: 'category',
            axisLine: {
				show: true,
				lineStyle: {
					color: 'gray'
				}
			},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12
			},
            data: ['Q4-13','Q1-14','Q2-14','Q3-14','Q4-14']
        },
        yAxis: {
            type: 'value',
            // scale: true,
            name: '% Delinquency',
            nameLocation: 'middle',
            nameGap: 35,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'gray'
                }
      		},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12,
				formatter: '{value}%'
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#808080',
					width: 1,
					type: 'solid'
				}
			}
        },
        series: [
            {
                name: '>90 dpd',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: 'steelblue',
                data: [2.7, 6.0, 5.0, 3.0, 8.0]
            },
            {
                name: '31-90 dpd',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#CD5C5C',
                data: [7.3, 7.0, 10.0, 5.0, 4.0]
            },
            {
                name: 'Reportable Delinquency',
                type: 'line',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                symbol: 'circle',
                color: 'black',
                data: [10.0, 13.0, 15.0, 8.0, 12.0]
            }
        ]
    };

ec_l1.setOption(option_l1);
// window.addEventListener("resize",function(){
// 	   ec_l1.resize();
// });
// window.addEventListener("click",function(){
// 	   ec_l1.resize();
// });

// Credit Card left bottom ec_lb *****************************************************************************************
var ec_lb = echarts.init(document.getElementById("lb"));

var option_lb = {
        title: {
            text: 'Credit Card Risk Composition - CRI',
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
            formatter: '{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%'
        },
        grid: {
      		top: '18%',
      		left: '4%',
      		right: '6%',
      		bottom: '15%',
      		containLabel: true
      	},
        legend: {
            x: 'left',
			y: 'bottom',
            data: ['A+B', 'C', 'D+E'],
            left: 'center',
			textStyle: {
				color: 'gray'
			}
        },
        xAxis: {
            type: 'category',
            axisLine: {
				show: true,
				lineStyle: {
					color: 'gray'
				}
			},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12
			},
            data: ['Q4-13','Q1-14','Q2-14','Q3-14','Q4-14']
        },
        yAxis: [
            {
                type: 'value',
                // scale: true,
                name: '% Share of Outstandings',
                max: 100,
                nameLocation: 'middle',
                nameGap: 40,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'gray'
                    }
                },
                axisLabel: {
                    show: true,
                    color: 'gray',
                    fontSize: 12,
                    formatter: '{value}%'
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#808080',
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        ],

        series: [
            {
                name: 'A+B',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: 'steelblue',
                data: [25, 25, 28]
            },
            {
                name: 'C',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#CD5C5C',
                data: [10, 11, 10]
            },
            {
                name: 'D+E',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#ADCD7E',
                data: [16, 15, 15]
            }
        ]
    };

ec_lb.setOption(option_lb);
// ['resize','click'].forEach(function (item) {
//     window.addEventListener(item,function(){
// 	   ec_lb.resize();
//     });
// });

// credit card left top ec_lt ************************************************************************************************
var ec_lt = echarts.init(document.getElementById("lt"));

var option_lt = {
        title: {
            text: 'Credit Card Delinquency',
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
            formatter: '{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%'
        },
        grid: {
      		top: '15%',
      		left: '6%',
      		right: '5%',
      		bottom: '15%',
      		containLabel: true
      	},
        legend: {
            x: 'left',
			y: 'bottom',
            data: ['>90 dpd', '31-90 dpd', 'Reportable Delinquency'],
            left: 'center',
			textStyle: {
				color: 'gray'
			}
        },
        xAxis: {
            type: 'category',
            axisLine: {
				show: true,
				lineStyle: {
					color: 'gray'
				}
			},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12
			},
            data: ['Q4-13','Q1-14','Q2-14','Q3-14','Q4-14']
        },
        yAxis: {
            type: 'value',
            // scale: true,
            name: '% Delinquency',
            nameLocation: 'middle',
            nameGap: 35,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'gray'
                }
      		},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12,
				formatter: '{value}%'
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#808080',
					width: 1,
					type: 'solid'
				}
			}
        },
        series: [
            {
                name: '>90 dpd',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: 'steelblue',
                data: [2.7, 6.0, 5.0, 3.0, 8.0]
            },
            {
                name: '31-90 dpd',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#CD5C5C',
                data: [7.3, 7.0, 10.0, 5.0, 4.0]
            },
            {
                name: 'Reportable Delinquency',
                type: 'line',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                symbol: 'circle',
                color: 'black',
                data: [10.0, 13.0, 15.0, 8.0, 12.0]
            }
        ]
    };

ec_lt.setOption(option_lt);
// ['resize','click'].forEach(function (item) {
//     window.addEventListener(item,function(){
// 	   ec_lt.resize();
//     });
// });

// Mortgage right top ec_r1 ****************************************************************************
var ec_r1 = echarts.init(document.getElementById("r1"));

var option_r1 = {
        title: {
            text: 'LTV of New Uninsured Mortgages',
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
            formatter: '{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />{a4}: {c4}%'
        },
        grid: {
      		top: '15%',
      		left: '4%',
      		right: '6%',
      		bottom: '18%',
      		containLabel: true
      	},
        legend: {
            x: 'left',
			y: 'bottom',
            data: ['Less than 50%', '50.01 to 60%', '60.01 to 70%', '70.01 to 80%', 'Avg LTV'],
            left: 'center',
			textStyle: {
				color: 'gray'
			}
        },
        xAxis: {
            type: 'category',
            axisLine: {
				show: true,
				lineStyle: {
					color: 'gray'
				}
			},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12
			},
            data: ['Q4-13','Q1-14','Q2-14','Q3-14','Q4-14']
        },
        yAxis: [
            {
                type: 'value',
                // scale: true,
                name: 'Percent',
                max: 100,
                nameLocation: 'middle',
                nameGap: 40,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'gray'
                    }
                },
                axisLabel: {
                    show: true,
                    color: 'gray',
                    fontSize: 12,
                    formatter: '{value}%'
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#808080',
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            {
                type: 'value',
                // scale: true,
                name: 'Avg LTV',
                min: 45,
                max: 60,
                nameRotate: 270,
                nameLocation: 'middle',
                nameGap: 40,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'gray'
                    }
                },
                axisLabel: {
                    show: true,
                    color: 'gray',
                    fontSize: 12,
                    formatter: '{value}%'
                }
            }
        ],

        series: [
            {
                name: 'Less than 50%',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: 'steelblue',
                data: [25, 25, 28, 29, 29]
            },
            {
                name: '50.01 to 60%',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#CD5C5C',
                data: [10, 11, 10, 10, 10]
            },
            {
                name: '60.01 to 70%',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#ADCD7E',
                data: [16, 15, 15, 15, 15]
            },
            {
                name: '70.01 to 80%',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#816D9B',
                data: [48, 49, 46, 46, 46]
            },
            {
                name: 'Avg LTV',
                type: 'line',
                symbol: 'circle',
                yAxisIndex: 1,
                color: 'black',
                data: [66, 64, 60, 59, 58]
            }
        ]
    };

ec_r1.setOption(option_r1);
// ['resize','click'].forEach(function (item) {
//     window.addEventListener(item,function(){
// 	   ec_r1.resize();
//     });
// });

// credit card right bottom ec_rb ************************************************************************
var ec_rb = echarts.init(document.getElementById("rb"));

var color=['#00EE00','#ff9f7f','#FFD700','#00ced1','#4682B4','#FF0000','#000000']

var option_rb = {

      	title: {
      		text: 'Credit Cards - Reportable Delinquency (%)',
			textStyle: {
				color: 'gray',
				fontSize: 15
			},
			left: 'left'
      	},

      	legend: {
			x: 'left',
			y: 'bottom',
			left: 'center',
      		data: [],
			textStyle: {
				color: 'gray'
			}
      	},

      	grid: {
      		top: '15%', // 50 等价于 y: '16%'
      		left: '6%',
      		right: '5%',
      		bottom: '20%',
      		containLabel: true
      	},

      	tooltip: {
      		trigger: 'axis',
			axisPointer: {
				type: 'line',
				lineStyle: {
					color: '#7171C6'
				}
			},
			formatter: '{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />{a4}: {c4}%<br />{a5}: {c5}%<br />{a6}: {c6}%'
      	},

      	xAxis: {
      		type: 'category',
			axisLine: {
				show: true,
				lineStyle: {
					color: 'gray'
				}
			},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12,
				rotate: 0,
				interval: 0
			},
      		data: []
      	},

      	yAxis: {
      		name: '% Delinquency',
			nameLocation: 'middle',
			nameGap: 35,
      		type: 'value',
      		splitNumber: 0,
      		axisLine: {
				show: true,
      			lineStyle: {
      				color: 'gray'
      			}
      		},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12,
				formatter: '{value}%'
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#172738',
					width: 1,
					type: 'solid'
				}
			}
      	},

      	series: [{
      			name: 'xxx',
      			data: [],
      			type: 'line',
				color: '#00EE00',
      			smooth: false
      		}
      	]
    };

ec_rb.setOption(option_rb)
// window.addEventListener("resize",function(){
// 	   ec_rb.resize();
// });
// window.addEventListener("click",function(){
// 	   ec_rb.resize();
// });

// credit card right top ec_rt ******************************************************************
var ec_rt = echarts.init(document.getElementById("rt"));

var option_rt = {
        title: {
            text: 'Total Limit, New Credit Card Bookings',
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
            formatter: '{b0}<br/>{a0}: ${c0}<br />{a1}: ${c1}'
        },
        grid: {
      		top: '15%',
      		left: '6%',
      		right: '5%',
      		bottom: '15%',
      		containLabel: true
      	},
        legend: {
            x: 'left',
			y: 'bottom',
            data: ['Visa Total Limit', 'Amex Total Limit'],
            left: 'center',
			textStyle: {
				color: 'gray'
			}
        },
        xAxis: {
            type: 'category',
            axisLine: {
				show: true,
				lineStyle: {
					color: 'gray'
				}
			},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12
			},
            data: ['Q4-13','Q1-14','Q2-14','Q3-14','Q4-14']
        },
        yAxis: {
            type: 'value',
            // scale: true,
            name: 'Millions',
            nameLocation: 'middle',
            nameGap: 35,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'gray'
                }
      		},
			axisLabel: {
				show: true,
				color: 'gray',
				fontSize: 12,
				formatter: '${value}'
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#808080',
					width: 1,
					type: 'solid'
				}
			}
        },
        series: [
            {
                name: 'Visa Total Limit',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '${c}'
                },
                emphasis: {
                    focus: 'series'
                },
                color: 'steelblue',
                data: [2.7, 6.0, 5.0, 3.0, 8.0]
            },
            {
                name: 'Amex Total Limit',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '${c}'
                },
                emphasis: {
                    focus: 'series'
                },
                color: '#CD5C5C',
                data: [7.3, 7.0, 10.0, 5.0, 4.0]
            }
        ]
    };

ec_rt.setOption(option_rt);
// ['resize','click'].forEach(function (item) {
//     window.addEventListener(item,function(){
// 	    ec_rt.resize();
//     });
// });

['resize','click'].forEach(function (item) {
    window.addEventListener(item,function(){
        ec_c1.resize();
        ec_c2.resize();
        ec_l1.resize();
        ec_lb.resize();
        ec_lt.resize();
        ec_r1.resize();
        ec_rb.resize();
	    ec_rt.resize();
    });
});


// Financial dashboards controller
function gettime(){
	$.ajax({
		url:"/time",
		timeout:10000,
		success:function(data){
			$("#tim h2").html(data)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}

function get_l1_data(){
	$.ajax({
		url:"/l1",
		success:function(data){
			option_l1.xAxis.data = data.quarters
			option_l1.series[0].data = data.gt90
			option_l1.series[1].data = data.gt30
			option_l1.series[2].data = data.rpt
			ec_l1.setOption(option_l1)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}

function get_r1_data(){
	$.ajax({
		url:"/r1",
		success:function(data){
			option_r1.xAxis.data = data.quarters
			option_r1.series[0].data = data.l5rt
			option_r1.series[1].data = data.b56rt
			option_r1.series[2].data = data.b67rt
			option_r1.series[3].data = data.b78rt
			option_r1.series[4].data = data.avg
			ec_r1.setOption(option_r1)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}

function get_c1_data(){
	$.ajax({
		url:"/c1",
		success:function(data){
			option_c1.legend.data = data.regions
			option_c1.xAxis.data = data.quarters
			var series = [];
			for(var i=0;i<data.regions.length;i++){
				series.push({
					name: data.regions[i],
					data: data.values[i],
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 5,
					color: color[i],
					smooth: false
				})
			}
			option_c1.series = series
			ec_c1.setOption(option_c1)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}
function get_c2_data(){
	$.ajax({
		url:"/c2",
		success:function(data){
			option_c2.xAxis.data = data.quarters
			option_c2.series[0].data = data.lt20
			option_c2.series[1].data = data.lt25
			option_c2.series[2].data = data.gt25
			ec_c2.setOption(option_c2)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}

function get_lt_data(){
	$.ajax({
		url:"/lt",
		success:function(data){
			option_lt.xAxis.data = data.quarters
			option_lt.series[0].data = data.gt90
			option_lt.series[1].data = data.gt30
			option_lt.series[2].data = data.rpt
			ec_lt.setOption(option_lt)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}
function get_rt_data(){
	$.ajax({
		url:"/rt",
		success:function(data){
			option_rt.xAxis.data = data.quarters
			option_rt.series[0].data = data.visa
			option_rt.series[1].data = data.amex
			ec_rt.setOption(option_rt)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}
function get_lb_data(){
	$.ajax({
		url:"/lb",
		success:function(data){
			option_lb.xAxis.data = data.quarters
			option_lb.series[0].data = data.abrt
			option_lb.series[1].data = data.crt
			option_lb.series[2].data = data.dert
			ec_lb.setOption(option_lb)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}
function get_rb_data(){
	$.ajax({
		url:"/rb",
		success:function(data){
			option_rb.legend.data = data.regions
			option_rb.xAxis.data = data.quarters
			var series = [];
			for(var i=0;i<data.regions.length;i++){
				series.push({
					name: data.regions[i],
					data: data.values[i],
					type: 'line',
					symbol: 'emptyCircle',
					symbolSize: 5,
					color: color[i],
					smooth: false
				})
			}
			option_rb.series = series
			ec_rb.setOption(option_rb)
		},
		error:function(xhr,type,errorThrown){
		}
	})
}

// 初始化运行一次
gettime()
get_l1_data()
get_r1_data()
get_c1_data()
get_c2_data()
get_lt_data()
get_rt_data()
get_lb_data()
get_rb_data()


setInterval(gettime,1000)
// setInterval(get_l1_data,1000*86400)
// setInterval(get_r1_data,1000*86400)
// setInterval(get_c1_data,1000*86400)
// setInterval(get_c2_data,1000*86400)
// setInterval(get_lt_data,1000*86400)
// setInterval(get_rt_data,1000*86400)
// setInterval(get_lb_data,1000*86400)
// setInterval(get_rb_data,1000*86400)









