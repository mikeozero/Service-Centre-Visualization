// customer service tickets vs days to resolve
var ticketsvsdaystoresolve = echarts.init(document.getElementById("ticketsvsdaystoresolve"));

const datatd = [
    // callvolume,avgdays,satisfaction%,agent
    [112, 6, 1.0, 'Hoyt Barr(56)'],
    [160, 15, 1.0, 'Leonard Curtis(23)'],
    [112, 16, 0.5714, 'Lucius Ferguson(90)'],
    [192, 14, 0.9167, 'Dieter Gomez(68)'],
    [176, 19, 0.6364, 'Chancellor Mckenzie(2)'],
    [144, 10, 0.8889, 'Jerome Weber(13)'],
    [160, 9, 0.7, 'Gavin Frederick(39)'],
    [160, 11, 0.8, 'Sawyer Finley(58)'],
    [64, 10, 0.5, 'Theodore Fletcher(83)'],
    [176, 15, 1.0, 'Kelly Frank(99)'],
    [160, 6, 0.8, 'Cooper Lyons(7)'],
    [176, 8, 0.9091, 'Marvin Buck(65)'],
    [64, 26, 0.75, 'Lamar Pace(3)'],
    [160, 11, 0.6, 'Jin Kidd(53)'],
    [208, 12, 0.7692, 'Jesse Rodriquez(77)'],
    [144, 11, 1.0, 'Blaze Lloyd(75)'],
    [176, 6, 0.8182, 'Brennan Rivas(16)'],
    [80, 14, 0.6, 'Beau Neal(55)'],
    [192, 12, 0.9167, 'Brenden Nguyen(4)'],
    [80, 7, 0.8, 'Kato Moody(29)'],
    [112, 15, 0.7143, 'Hakeem Francis(96)'],
    [160, 24, 0.9, 'Oleg Roy(54)'],
    [176, 13, 1.0, 'Paul Cabrera(62)'],
    [240, 20, 0.8, 'Ali Booker(51)'],
    [240, 6, 0.8, 'Coby Fuentes(15)'],
    [224, 21, 0.7857, 'Cadman Floyd(12)'],
    [192, 34, 1.0, 'Holmes Shaw(86)'],
    [160, 21, 0.8, 'Barclay Winters(33)'],
    [160, 17, 0.8, 'Kaseem Boyer(89)'],
    [144, 11, 0.6667, 'Branden Heath(85)'],
    [320, 15, 0.9, 'Hunter Hyde(37)'],
    [208, 16, 0.6923, 'Jakeem Randall(14)'],
    [176, 10, 0.6364, 'Hyatt Lindsey(49)'],
    [96, 18, 0.8333, 'Neville Lucas(79)'],
    [192, 11, 1.0, 'Raymond Hanson(34)'],
    [128, 47, 1.0, 'Merritt Richmond(38)'],
    [192, 13, 0.9167, 'Macaulay Mclaughlin(98)'],
    [32, 31, 1.0, 'Daquan Bradley(50)'],
    [96, 31, 0.8333, 'Upton Melendez(74)'],
    [160, 14, 0.9, 'Tarik Espinoza(10)'],
    [176, 20, 0.9091, 'Keaton Ingram(80)'],
    [112, 10, 1.0, 'Ulric Francis(32)'],
    [144, 16, 1.0, 'Cairo Sloan(69)'],
    [208, 12, 0.6923, 'Walter Avery(60)'],
    [160, 24, 0.9, 'Jarrod Todd(1)'],
    [208, 15, 0.6154, 'Elvis Cross(78)'],
    [176, 18, 0.8182, 'Kasper Valdez(92)'],
    [160, 25, 0.5, 'Zephania Herman(9)'],
    [240, 16, 0.8667, 'Steel Burks(48)'],
    [208, 30, 0.7692, 'Ralph Rodriquez(52)'],
    [160, 22, 0.8, 'Benedict Rojas(63)'],
    [112, 14, 1.0, 'Barclay Gray(22)'],
    [256, 12, 0.8125, 'Paul Wilcox(76)'],
    [224, 11, 0.9286, 'Aladdin Calhoun(93)'],
    [224, 13, 0.8571, 'Daniel Barry(67)'],
    [144, 20, 0.8889, 'Nehru Hyde(91)'],
    [160, 15, 0.8, 'Peter Sanders(42)'],
    [144, 15, 0.6667, 'Nero Bentley(59)'],
    [112, 9, 1.0, 'Yardley Rose(20)'],
    [96, 7, 0.6667, 'Keaton Lucas(40)'],
    [192, 11, 0.8333, 'Uriah Guzman(24)'],
    [144, 27, 0.6667, 'Salvador Bonner(26)'],
    [208, 12, 0.7692, 'Clark Olson(21)'],
    [144, 18, 0.5556, 'Nicholas Talley(82)'],
    [112, 8, 0.8571, 'Dane Pennington(72)'],
    [240, 11, 0.8667, 'Berk Farmer(73)'],
    [144, 25, 1.0, 'Tyrone Gamble(44)'],
    [96, 16, 0.8333, 'Galvin Wilson(19)'],
    [112, 5, 0.5714, 'Brett Fuller(36)'],
    [176, 8, 0.7273, 'Geoffrey Ryan(66)'],
    [160, 26, 0.6, 'John Cochran(87)'],
    [192, 14, 0.6667, 'Perry Roberson(57)'],
    [192, 20, 0.75, 'Zephania Nixon(35)'],
    [224, 13, 0.6429, 'Reece Galloway(28)'],
    [176, 10, 0.8182, 'Xenos Walter(64)'],
    [64, 27, 0.75, 'Caleb Nunez(94)'],
    [304, 9, 0.7895, 'Mannix Shaffer(84)'],
    [192, 16, 0.8333, 'Carson Blackburn(70)'],
    [128, 16, 0.75, 'Micah Gilbert(5)'],
    [96, 14, 1.0, 'George Raymond(27)'],
    [112, 22, 0.7143, 'Tyler Stephenson(97)'],
    [128, 21, 0.875, 'Jack Johns(47)'],
    [112, 8, 1.0, 'Herman Glover(81)'],
    [112, 17, 0.8571, 'Allistair Nelson(45)'],
    [144, 9, 0.8889, 'Gray Huber(18)'],
    [112, 16, 0.8571, 'Chadwick Lancaster(11)'],
    [160, 10, 0.6, 'Julian Acevedo(43)'],
    [224, 18, 0.9286, 'Ian Underwood(71)'],
    [112, 19, 0.5714, 'Acton Calderon(6)'],
    [192, 12, 0.6667, 'Chase Watkins(25)'],
    [240, 17, 0.8667, 'Ferdinand Reid(61)'],
    [96, 31, 0.8333, 'Prescott Pierce(31)'],
    [208, 10, 0.6923, 'Laith Curry(95)'],
    [144, 20, 0.7778, 'Harding Irwin(46)'],
    [128, 33, 0.875, 'Chaney Mcclain(88)'],
    [256, 8, 0.9375, 'Forrest Bernard(30)'],
    [112, 17, 1.0, 'Tarik Chaney(41)'],
    [96, 13, 0.8333, 'Garrison Bentley(8)'],
    [112, 16, 0.8571, 'Wallace Marquez(17)'],
    [176, 5, 0.8182, 'Carson Bartlett(100)']
];

const schema = [
    {name: 'Call Volumes', index: 0, text: 'Call Volumes'},
    {name: 'Avg. Days', index: 1, text: 'Avg. Days to Resolve'},
    {name: '%Satisfaction', index: 2, text: '%Satisfaction'},
    {name: 'Agent', index: 3, text: 'Agent'}
];
const itemStyle = {
    opacity: 0.9,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0,0,0,0.3)'
};

var option_ticketsvsdaystoresolve = {
    title: {
        text: 'Tickets vs. Days to Resolve',
        textStyle: {
            color: 'gray',
            fontSize: 15
        },
        subtext: '*Bubble Sized by Call Volume and Colored by %Satisfication',
        subtextStyle: {
            color: 'gray',
            fontSize: 12
        }
    },
    color: ['#dd4444'],
    grid: {
        left: '15%',
        right: '10%',
        top: '18%',
        bottom: '18%'
    },
    tooltip: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        formatter: function (param) {
            var value = param.value;
            // prettier-ignore
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); color: gray; font-size: 13px;padding-bottom: 7px;margin-bottom: 7px">'
                    + schema[3].name + '：&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + value[3] + '<br>'
                    + schema[1].name + '：&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + value[1] + '<br>'
                    + schema[0].name + '：&nbsp' + value[0] + '<br>'
                    + schema[2].name + '：' + value[2]*100+'%'
                    + '</div>';
        }
    },
    xAxis: {
        type: 'value',
        name: 'Call Volume',
        nameLocation: 'middle',
        nameGap: 30,
        nameTextStyle: {
          fontSize: 15
        },
        // max: 300,
        splitLine: {
            show: true,
            lineStyle: {
              width: 0.5,
              type: 'dashed',
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: 'Avg. Days to Resolve',
        nameLocation: 'middle',
        nameGap: 35,
        nameTextStyle: {
          fontSize: 15
        },
        // max: 40,
        splitLine: {
            show: true,
            lineStyle: {
              width: 0.5,
              type: 'dashed',
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
        // interval: 20
    },
    visualMap: [
        {
            left: 'right',
            show: false,
            top: '10%',
            dimension: 0,
            min: 30,
            max: 320,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['Size：Call Vollumes'],
            textGap: 30,
            inRange: {
                symbolSize: [6, 20]
            },
            outOfRange: {
                symbolSize: [6, 30],
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#999']
                }
            }
        },
        {
            left: 'right',
            show: false,
            bottom: '5%',
            dimension: 2,
            min: 0.5,
            max: 1,
            itemHeight: 120,
            text: ['Lightness：%Satisfaction'],
            textGap: 30,
            inRange: {
                // colorLightness: [1, 0.5],
                color: ['#F4D166','#B71D3E'] // #EBD888 #F4D166
            },
            outOfRange: {
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#999']
                }
            }
        }
    ],
    series: [
        {
            // name: 'Agent',
            type: 'scatter',
            itemStyle: itemStyle,
            data: datatd,
            markLine: {
                symbol: ['none','none'],
                precision: 1,
                label: {
                    show: true,
                    position: 'middle',
                    color: 'rgba(5,134,181,1)',
                    fontSize: 13,
                    formatter: function(params) {
                        return params.name + ' : ' + params.value.toFixed(0);
                    }
                },
                lineStyle: {
                    color: 'rgba(5,134,181,1)',
                    width: 1,
                    type: 'solid',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,0.3)',
                    opacity: 0.8
                },
                tooltip: {
                    show: false
                },
                data: [
                    {
                        name: 'Average Days to Resolve',
                        type: 'average',
                        valueIndex: 1
                    }
                ]
            }
        }
    ]
};

option_ticketsvsdaystoresolve && ticketsvsdaystoresolve.setOption(option_ticketsvsdaystoresolve, true);
// window.addEventListener("resize",function(){
//     ticketsvsdaystoresolve.resize();
// });

// customer service open tickets vs days aging
var openticketsvsdaysaging = echarts.init(document.getElementById("openticketsvsdaysaging"));

const dataoa = [
  // opentickets,avgdays,satisfaction%,agent
  [4, 64, 0.8, 'Acton Calderon'],
  [6, 32, 0.75, 'Aladdin Calhoun'],
  [8, 61, 0.88, 'Ali Booker'],
  [8, 59, 1, 'Allistair Nelson'],
  [8, 51, 0.5, 'Barclay Gray'],
  [8, 47, 0.83, 'Barclay Winters'],
  [9, 43, 1, 'Beau Neal'],
  [10, 44, 0.5, 'Benedict Rojas'],
  [12, 62, 0.57, 'Berk Farmer'],
  [12, 57, 0.6, 'Blaze Lloyd'],
  [12, 53, 0.7, 'Branden Heath'],
  [13, 50, 0.85, 'Brenden Nguyen'],
  [13, 45, 0.75, 'Brennan Rivas'],
  [14, 45, 1, 'Brett Fuller'],
  [16, 58, 1, 'Cadman Floyd'],
  [19, 38, 0.87, 'Cairo Sloan'],
  [56, 46, 0.86, 'Caleb Nunez'],
  [49, 42, 0.66, 'Carson Bartlett'],
  [44, 55, 0.9, 'Carson Blackbur'],
  [43, 54, 0.61, 'Chadwick Lancas'],
  [41, 47, 0.78, 'Chancellor Mckenzie'],
  [42, 46, 0.85, 'Chaney Mcclain'],
  [38, 42, 0.65, 'Chase Watkins'],
  [35, 46, 0.81, 'Clark Olson'],
  [35, 51, 0.86, 'Coby Fuentes'],
  [36, 56, 0.8, 'Cooper Lyons'],
  [33, 50, 0.92, 'Dane Pennington'],
  [33, 56, 0.8, 'Daniel Barry'],
  [30, 53, 0.8, 'Daquan Bradley'],
  [24, 52, 1, 'Dieter Gomez'],
  [24, 59, 0.91, 'Elvis Cross']
];

const schemaoa = [
    {name: 'Open Tickets', index: 0, text: 'Open Tickets'},
    {name: 'Avg. Days', index: 1, text: 'Avg. Open Days Aging'},
    {name: '%Satisfaction', index: 2, text: '%Satisfaction'},
    {name: 'Agent', index: 3, text: 'Agent'}
];
const itemStyleoa = {
    opacity: 0.9,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0,0,0,0.3)'
};

var option_openticketsvsdaysaging = {
    title: {
        text: 'Open Tickets vs Days Aging',
        textStyle: {
            color: 'gray',
            fontSize: 15
        },
        subtext: '*Bubble Sized by Call Volume and Colored by %Satisfication',
        subtextStyle: {
        color: 'gray',
        fontSize: 12
        }
    },
    color: ['#dd4444'],
    grid: {
        left: '15%',
        right: '10%',
        top: '18%',
        bottom: '18%'
    },
    tooltip: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        formatter: function (param) {
            var value = param.value;
            // prettier-ignore
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); color: gray; font-size: 13px;padding-bottom: 7px;margin-bottom: 7px">'
                    + schemaoa[3].name + '：&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + value[3] + '<br>'
                    + schemaoa[1].name + '：&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + value[1] + '<br>'
                    + schemaoa[0].name + '：&nbsp' + value[0] + '<br>'
                    + schemaoa[2].name + '：' + value[2]*100+'%'
                    + '</div>';
        }
    },
    xAxis: {
        type: 'value',
        name: 'Open Tickets',
        nameGap: 30,
        nameLocation: 'middle',
        nameTextStyle: {
          fontSize: 15
        },
        // max: 60,
        splitLine: {
            show: true,
            lineStyle: {
                width: 0.5,
                type: 'dashed',
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: 'Avg. Open Days Aging',
        nameLocation: 'middle',
        nameGap: 35,
        nameTextStyle: {
          fontSize: 15
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 0.5,
                type: 'dashed',
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
        // interval: 20
    },
    visualMap: [
        {
            show: false,
            left: 'right',
            top: '10%',
            dimension: 0,
            min: 0,
            max: 60,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['Size：Open Tickets'],
            textGap: 30,
            inRange: {
                symbolSize: [6, 20]
            },
            outOfRange: {
                symbolSize: [6, 30],
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#999']
                }
            }
        },
        {
            show: false,
            left: 'right',
            bottom: '5%',
            dimension: 2,
            min: 0.5,
            max: 1,
            itemHeight: 120,
            text: ['Lightness：%Satisfaction'],
            textGap: 30,
            inRange: {
                // colorLightness: [1, 0.5],
                color: ['#F4D166','#B71D3E']
            },
            outOfRange: {
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#999']
                }
            }
        }
    ],
    series: [
        {
            // name: 'Days Aging',
            type: 'scatter',
            itemStyle: itemStyleoa,
            data: dataoa,
            markLine: {
                symbol: ['none', 'none'],
                precision: 1,
                label: {
                    show: true,
                    position: 'middle',
                    color: 'rgba(5,134,181,1)',
                    fontSize: 13,
                    formatter: function (params) {
                        return params.name + ' : ' + Math.floor(params.value.toFixed(0));
                    }
                },
                lineStyle: {
                    color: 'rgba(5,134,181,1)',
                    width: 1,
                    type: 'solid',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,0.3)',
                    opacity: 0.8
                },
                tooltip: {
                    show: false
                },
                data: [
                    {
                        name: 'Average Days Aging',
                        type: 'average',
                        valueIndex: 1
                    }
                ]
            }
        }
    ]
};

option_openticketsvsdaysaging && openticketsvsdaysaging.setOption(option_openticketsvsdaysaging, true);
// window.addEventListener("resize",function(){
//     openticketsvsdaysaging.resize();
// });

// customer service call volume vs satisfaction
var callvolumevssatisfaction = echarts.init(document.getElementById("callvolumevssatisfaction"));

const datacs = [
    // callvolume,satisfaction%,agent
    [112, 100.0, 'Hoyt Barr(56)'],
    [160, 100.0, 'Leonard Curtis(23)'],
    [112, 57.14, 'Lucius Ferguson(90)'],
    [192, 91.67, 'Dieter Gomez(68)'],
    [176, 63.64, 'Chancellor Mckenzie(2)'],
    [144, 88.89, 'Jerome Weber(13)'],
    [160, 70.0, 'Gavin Frederick(39)'],
    [160, 80.0, 'Sawyer Finley(58)'],
    [64, 50.0, 'Theodore Fletcher(83)'],
    [176, 100.0, 'Kelly Frank(99)'],
    [160, 80.0, 'Cooper Lyons(7)'],
    [176, 90.91, 'Marvin Buck(65)'],
    [64, 75.0, 'Lamar Pace(3)'],
    [160, 60.0, 'Jin Kidd(53)'],
    [208, 76.92, 'Jesse Rodriquez(77)'],
    [144, 100.0, 'Blaze Lloyd(75)'],
    [176, 81.82, 'Brennan Rivas(16)'],
    [80, 60.0, 'Beau Neal(55)'],
    [192, 91.67, 'Brenden Nguyen(4)'],
    [80, 80.0, 'Kato Moody(29)'],
    [112, 71.43, 'Hakeem Francis(96)'],
    [160, 90.0, 'Oleg Roy(54)'],
    [176, 100.0, 'Paul Cabrera(62)'],
    [240, 80.0, 'Ali Booker(51)'],
    [240, 80.0, 'Coby Fuentes(15)'],
    [224, 78.57, 'Cadman Floyd(12)'],
    [192, 100.0, 'Holmes Shaw(86)'],
    [160, 80.0, 'Barclay Winters(33)'],
    [160, 80.0, 'Kaseem Boyer(89)'],
    [144, 66.67, 'Branden Heath(85)'],
    [320, 90.0, 'Hunter Hyde(37)'],
    [208, 69.23, 'Jakeem Randall(14)'],
    [176, 63.64, 'Hyatt Lindsey(49)'],
    [96, 83.33, 'Neville Lucas(79)'],
    [192, 100.0, 'Raymond Hanson(34)'],
    [128, 100.0, 'Merritt Richmond(38)'],
    [192, 91.67, 'Macaulay Mclaughlin(98)'],
    [32, 100.0, 'Daquan Bradley(50)'],
    [96, 83.33, 'Upton Melendez(74)'],
    [160, 90.0, 'Tarik Espinoza(10)'],
    [176, 90.91, 'Keaton Ingram(80)'],
    [112, 100.0, 'Ulric Francis(32)'],
    [144, 100.0, 'Cairo Sloan(69)'],
    [208, 69.23, 'Walter Avery(60)'],
    [160, 90.0, 'Jarrod Todd(1)'],
    [208, 61.54, 'Elvis Cross(78)'],
    [176, 81.82, 'Kasper Valdez(92)'],
    [160, 50.0, 'Zephania Herman(9)'],
    [240, 86.67, 'Steel Burks(48)'],
    [208, 76.92, 'Ralph Rodriquez(52)'],
    [160, 80.0, 'Benedict Rojas(63)'],
    [112, 100.0, 'Barclay Gray(22)'],
    [256, 81.25, 'Paul Wilcox(76)'],
    [224, 92.86, 'Aladdin Calhoun(93)'],
    [224, 85.71, 'Daniel Barry(67)'],
    [144, 88.89, 'Nehru Hyde(91)'],
    [160, 80.0, 'Peter Sanders(42)'],
    [144, 66.67, 'Nero Bentley(59)'],
    [112, 100.0, 'Yardley Rose(20)'],
    [96, 66.67, 'Keaton Lucas(40)'],
    [192, 83.33, 'Uriah Guzman(24)'],
    [144, 66.67, 'Salvador Bonner(26)'],
    [208, 76.92, 'Clark Olson(21)'],
    [144, 55.56, 'Nicholas Talley(82)'],
    [112, 85.71, 'Dane Pennington(72)'],
    [240, 86.67, 'Berk Farmer(73)'],
    [144, 100.0, 'Tyrone Gamble(44)'],
    [96, 83.33, 'Galvin Wilson(19)'],
    [112, 57.14, 'Brett Fuller(36)'],
    [176, 72.73, 'Geoffrey Ryan(66)'],
    [160, 60.0, 'John Cochran(87)'],
    [192, 66.67, 'Perry Roberson(57)'],
    [192, 75.0, 'Zephania Nixon(35)'],
    [224, 64.29, 'Reece Galloway(28)'],
    [176, 81.82, 'Xenos Walter(64)'],
    [64, 75.0, 'Caleb Nunez(94)'],
    [304, 78.95, 'Mannix Shaffer(84)'],
    [192, 83.33, 'Carson Blackburn(70)'],
    [128, 75.0, 'Micah Gilbert(5)'],
    [96, 100.0, 'George Raymond(27)'],
    [112, 71.43, 'Tyler Stephenson(97)'],
    [128, 87.5, 'Jack Johns(47)'],
    [112, 100.0, 'Herman Glover(81)'],
    [112, 85.71, 'Allistair Nelson(45)'],
    [144, 88.89, 'Gray Huber(18)'],
    [112, 85.71, 'Chadwick Lancaster(11)'],
    [160, 60.0, 'Julian Acevedo(43)'],
    [224, 92.86, 'Ian Underwood(71)'],
    [112, 57.14, 'Acton Calderon(6)'],
    [192, 66.67, 'Chase Watkins(25)'],
    [240, 86.67, 'Ferdinand Reid(61)'],
    [96, 83.33, 'Prescott Pierce(31)'],
    [208, 69.23, 'Laith Curry(95)'],
    [144, 77.78, 'Harding Irwin(46)'],
    [128, 87.5, 'Chaney Mcclain(88)'],
    [256, 93.75, 'Forrest Bernard(30)'],
    [112, 100.0, 'Tarik Chaney(41)'],
    [96, 83.33, 'Garrison Bentley(8)'],
    [112, 85.71, 'Wallace Marquez(17)'],
    [176, 81.82, 'Carson Bartlett(100)']
];

const schemacs = [
    {name: 'Call Volumes', index: 0, text: 'Call Volumes'},
    {name: '%Satisfaction', index: 1, text: '%Satisfaction'},
    {name: 'Agent', index: 2, text: 'Agent'}
];
const itemStylecs = {
  opacity: 0.9,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: 'rgba(0,0,0,0.3)'
};

var option_callvolumevssatisfaction = {
    title: {
        text: 'Call Volume vs Satisfaction',
        textStyle: {
            color: 'gray',
            fontSize: 15
        },
        subtext: '*Bubble Sized by Call Volume and Colored by %Satisfication',
        subtextStyle: {
        color: 'gray',
        fontSize: 12
        }
    },
    color: ['#dd4444'],
    grid: {
        left: '15%',
        right: '10%',
        top: '18%',
        bottom: '18%'
    },
    tooltip: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        formatter: function (param) {
            var value = param.value;
            // prettier-ignore
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); color: gray; font-size: 13px;padding-bottom: 7px;margin-bottom: 7px">'
                    + schemacs[2].name + '：&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + value[2] + '<br>'
                    + schemacs[0].name + '：&nbsp' + value[0] + '<br>'
                    + schemacs[1].name + '：' + value[1]+'%'
                    + '</div>';
        }
    },
    xAxis: {
        type: 'value',
        name: 'Call Volume',
        nameGap: 30,
        nameLocation: 'middle',
        nameTextStyle: {
          fontSize: 15
        },
        // max: 300,
        splitLine: {
            show: true,
            lineStyle: {
                width: 0.5,
                type: 'dashed',
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: '%Satisfaction',
        nameLocation: 'middle',
        nameGap: 35,
        nameTextStyle: {
          fontSize: 15
        },
        max: 102,
        splitLine: {
            show: true,
            lineStyle: {
                width: 0.5,
                type: 'dashed',
            }
        },
        axisLabel: {
            formatter: '{value}%'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    visualMap: [
        {
            show: false,
            left: 'right',
            top: '10%',
            dimension: 0,
            min: 30,
            max: 320,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['Size：Call Vollumes'],
            textGap: 30,
            inRange: {
                symbolSize: [6, 20]
            },
            outOfRange: {
                symbolSize: [6, 30],
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#999']
                }
            }
        },
        {
            show: false,
            left: 'right',
            bottom: '5%',
            dimension: 1,
            min: 0,
            max: 1,
            itemHeight: 120,
            text: ['Lightness：%Satisfaction'],
            textGap: 30,
            inRange: {
                // colorLightness: [1, 0.5],
                color: ['#F4D166','#B71D3E']
            },
            outOfRange: {
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#999']
                }
            }
        }
    ],
    series: [
        {
            // name: 'Satisfaction',
            type: 'scatter',
            itemStyle: itemStylecs,
            data: datacs,
            markLine: {
                symbol: ['none','none'],
                precision: 1,
                label: {
                    show: true,
                    position: 'middle',
                    color: 'rgba(5,134,181,1)',
                    fontSize: 13,
                    formatter: function(params) {
                        return params.name + ' : ' + params.value+'%';
                    }
                },
                lineStyle: {
                    color: 'rgba(5,134,181,1)',
                    width: 1,
                    type: 'solid',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,0.3)',
                    opacity: 0.8
                },
                tooltip: {
                    show: false
                },
                data: [
                    {
                        name: 'Average Score',
                        type: 'average',
                        valueIndex: 1
                    }
                ]
            }
        }
    ]
};

option_callvolumevssatisfaction && callvolumevssatisfaction.setOption(option_callvolumevssatisfaction, true);
// window.addEventListener("resize",function(){
//     callvolumevssatisfaction.resize();
// });

// customer service scatterchart agent avg days to resolve
var scatterchart = echarts.init(document.getElementById("scatterchart"));

// prettier-ignore
const agent = ['Brenden Nguyen','Branden Heath','Blaze Lloyd','Berk Farmer','Benedict Rojas','Beau Neal','Barclay Winters','Barclay Gray','Allistair Nelson','Ali Booker','Aladdin Calhoun','Acton Calderon']
const agentdata = [
    [12,'Brenden Nguyen','2021-11'], [13,'Brenden Nguyen','2021-12'], [15,'Brenden Nguyen','2022-01'], [18,'Brenden Nguyen','2022-02'], [26,'Brenden Nguyen','2022-03'],[28,'Brenden Nguyen','2022-04'],[39,'Brenden Nguyen','2022-05'],
    [8,'Branden Heath','2021-11'], [9,'Branden Heath','2021-12'], [10,'Branden Heath','2022-01'], [12,'Branden Heath','2022-02'], [15,'Branden Heath','2022-03'],[18,'Branden Heath','2022-04'],[7,'Branden Heath','2022-05'],
    [15,'Blaze Lloyd','2021-11'], [65,'Blaze Lloyd','2021-12'], [18,'Blaze Lloyd','2022-01'], [19,'Blaze Lloyd','2022-02'], [22,'Blaze Lloyd','2022-03'],[26,'Blaze Lloyd','2022-04'],[28,'Blaze Lloyd','2022-05'],
    [2,'Berk Farmer','2021-11'], [4,'Berk Farmer','2021-12'], [7,'Berk Farmer','2022-01'], [13,'Berk Farmer','2022-02'], [16,'Berk Farmer','2022-03'],[18,'Berk Farmer','2022-04'],[19,'Berk Farmer','2022-05'],
    [3,'Benedict Rojas','2021-11'], [6,'Benedict Rojas','2021-12'], [7,'Benedict Rojas','2022-01'], [9,'Benedict Rojas','2022-02'], [18,'Benedict Rojas','2022-03'],[22,'Benedict Rojas','2022-04'],[29,'Benedict Rojas','2022-05'],
    [2,'Beau Neal','2021-11'], [8,'Beau Neal','2021-12'], [16,'Beau Neal','2022-01'], [18,'Beau Neal','2022-02'], [26,'Beau Neal','2022-03'],[37,'Beau Neal','2022-04'],[43,'Beau Neal','2022-05'],
    [1,'Barclay Winters','2021-11'], [2,'Barclay Winters','2021-12'], [4,'Barclay Winters','2022-01'], [16,'Barclay Winters','2022-02'], [24,'Barclay Winters','2022-03'],[27,'Barclay Winters','2022-04'],
    [15,'Barclay Gray','2021-11'], [17,'Barclay Gray','2021-12'], [18,'Barclay Gray','2022-01'], [22,'Barclay Gray','2022-02'], [26,'Barclay Gray','2022-03'],[31,'Barclay Gray','2022-04'],[37,'Barclay Gray','2022-05'],
    [4,'Allistair Nelson','2021-11'], [9,'Allistair Nelson','2021-12'], [10,'Allistair Nelson','2022-01'], [11,'Allistair Nelson','2022-02'], [13,'Allistair Nelson','2022-03'],[18,'Allistair Nelson','2022-04'],[23,'Allistair Nelson','2022-05'],
    [3,'Ali Booker','2021-11'], [6,'Ali Booker','2021-12'], [7,'Ali Booker','2022-01'], [12,'Ali Booker','2022-02'], [14,'Ali Booker','2022-03'],[16,'Ali Booker','2022-04'],[24,'Ali Booker','2022-05'],
    [2,'Aladdin Calhoun','2021-11'], [5,'Aladdin Calhoun','2021-12'], [6,'Aladdin Calhoun','2022-01'], [12,'Aladdin Calhoun','2022-02'], [13,'Aladdin Calhoun','2022-03'],[15,'Aladdin Calhoun','2022-04'],[35,'Aladdin Calhoun','2022-05'],
    [7,'Acton Calderon','2021-11'], [9,'Acton Calderon','2021-12'], [10,'Acton Calderon','2022-01'], [17,'Acton Calderon','2022-02'], [18,'Acton Calderon','2022-03'],[29,'Acton Calderon','2022-04']
]

var scatteroption = {
  title: {
    text: 'Avg Days to Resolve by Agent',
    textStyle: {
        color: 'gray',
        fontSize: 15
    },
    subtext: 'Each point represents the avg days to resolve a ticket for given month',
    subtextStyle: {
      color: 'gray',
      fontSize: 13
    }
  },
  tooltip: {
    backgroundColor: 'white',
    formatter: function (params) {
      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); color: gray; font-size: 13px;padding-bottom: 7px;margin-bottom: 7px">' +
        'Agent:  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + params.value[1] + '<br>' +
        ' Month: &nbsp&nbsp&nbsp&nbsp&nbsp' + params.value[2] + '<br>' +
        ' Avg. Days: ' + params.value[0] +
        '</div>';
    }
  },
  grid: {
    left: '1%',
    top: '20%',
    bottom: '8%',
    right: '5%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    name: 'Avg. Days to Resolve',
    nameLocation: 'middle',
    nameGap: 30,
    nameTextStyle: {
      fontSize: 14
    },
    max: 70,
    boundaryGap: false,
    splitLine: {
      show: true,
      lineStyle: {
        width: 0.5,
        type: 'dashed',
      }
    },
    axisLine: {
      show: false
    },
    interval: 10
  },
  yAxis: {
    type: 'category',
    name: 'Agent',
    nameLocation: 'end',
    nameGap: 7,
    nameTextStyle: {
      fontSize: 14
    },
    data: agent,
    boundaryGap: false,
    axisLine: {
      show: false
    },
    axisLabel: {
      margin: 20
    },
    axisTick: {
      show: false
    }
  },
  dataZoom: [
    {
        // id: 'dataZoomX',
        type: 'slider',       // 滚动条
        realtime: true,
        show: true,
        yAxisIndex: 0,      // 设置dataZoom组件控制的y轴,也可以是x轴xAxisIndex;可以用数组表示多个y轴的情况[0,2]
        // xAisIndex: 0,
        // radiusAxisIndex: 3,
        // angleAxisIndex: [0,2],
        start: 0,           // 范围是 0~100,数据窗口范围的起始百分比,表示 0%
        end: 100,           // 范围是 0~100,数据窗口范围的结束百分比,表示 100%
        // startValue: 0,      // 数据窗口范围的起始数值
        // endValue: 100,      // 数据窗口范围的结束数值
        // orient: 'vertical', // 布局方式是横还是竖
        // height: 250,     // 组件高度
        // left: 'right',   // 组件离容器左侧的距离,'left','center','right','20%'
        // top: 'top',      // 组件离容器上侧的距离,'top','middle','bottom','20%'
        // right: 'auto',   // 组件离容器右侧的距离,'20%'
        // bottom: 'auto',  // 组件离容器下侧的距离,'20%'
        // fillerColor: 'rgba(17,100,210,0.42)',  // 滚动条颜色
        // borderColor: 'rgba(17,100,210,0.12)',
        handleSize: 20,     // 两边小手柄的尺寸
        showDetail: false,  // 拖拽时是否显示滚动条两侧的文字
        // moveOnMouseMove: true,    // 鼠标移动能触发数据窗口平移
        // zoomOnMouseWheel: true,   // 鼠标滚动能触发数据窗口缩放
        zoomLock: true,     // 是否锁定选择区域的大小,如果是true则只能平移选择区域不能缩放
        throttle: 100,      // 设置触发视图刷新的频率,单位为毫秒ms
        minValueSpan: 15,   // 最少跨度是几个数据
        maxValueSpan: 15    // 最大跨度是几个数据
    },
    {
        // id: 'dataZoomY',
        type: 'inside',     // chart内部鼠标滚动平移 配置项和上面slider类似
        // filterMode: 'empty',
        // disabled: false,    // 是否停止组件的功能
        start: 0,
        end: 100,
        // startValue: 0,
        // endValue: 100,
        zoomOnMouseWheel: false,    // 关闭滚轮缩放
        // moveOnMouseMove: true    // 鼠标移动能触发数据窗口平移
        // moveOnMouseWheel: true    // 鼠标滚轮能触发数据窗口平移
    }
  ],
  series: [
    {
      type: 'scatter',
      symbolSize: 10,
      color: '#4E79A7',
      data: agentdata,
      animationDelay: function (idx) {
        return idx * 5;
      }
    }
  ]
};

scatteroption && scatterchart.setOption(scatteroption, true);
// window.addEventListener("resize",function(){
// 	   scatterchart.resize();
// });



['resize','click'].forEach(function (item) {
    window.addEventListener(item,function(){
	   ticketsvsdaystoresolve.resize();
       openticketsvsdaysaging.resize();
       callvolumevssatisfaction.resize();
       scatterchart.resize();
    });
});



// customer service controller ***************************************************************************
function getagentdetails(){
	$.ajax({
		url:"/getagentdetails",
		success:function(data){
            // console.log(data)
            html = ''
            for (const row of data) {
                html += '<tr>'
                for (const element of row) {
                    html += '<td>'+element+'</td>'
                }
                html += '</tr>'
            }
            $("#tbdata").append(html)
		},
		error:function(xhr,type,errorThrown){
            console.log(errorThrown)
		}
	})
}

function getDaysbyAgent(){
	$.ajax({
		url: "/getDaysbyAgent",
		success: function(data){
            // console.log(data.agentlist)
            // console.log(data.dataset)
			scatteroption.yAxis.data = data.agentlist
			scatteroption.series[0].data = data.dataset
			scatteroption && scatterchart.setOption(scatteroption, true)
		},
		error: function(xhr,type,errorThrown){
            console.log(errorThrown)
		}
	})
}

function getTicketsvsDays(){
    $.ajax({
        url: "/getTicketsvsDays",
        success: function (data){
            option_ticketsvsdaystoresolve.series[0].data = data.dataset
            option_ticketsvsdaystoresolve.visualMap[0].min = data.mincv
            option_ticketsvsdaystoresolve.visualMap[0].max = data.maxcv
            option_ticketsvsdaystoresolve.visualMap[1].min = data.minsf
            option_ticketsvsdaystoresolve.visualMap[1].max = data.maxsf
            option_ticketsvsdaystoresolve && ticketsvsdaystoresolve.setOption(option_ticketsvsdaystoresolve, true);
        },
        error: function (xhr,type,errorThrown){
            console.log(errorThrown)
        }
    })
}

function getOpenvsDays(){
    $.ajax({
        url: "/getOpenvsDays",
        success: function (data){
            option_openticketsvsdaysaging.series[0].data = data.dataset
            option_openticketsvsdaysaging.visualMap[0].min = data.minot
            option_openticketsvsdaysaging.visualMap[0].max = data.maxot
            option_openticketsvsdaysaging.visualMap[1].min = data.minsf
            option_openticketsvsdaysaging.visualMap[1].max = data.maxsf
            option_openticketsvsdaysaging && openticketsvsdaysaging.setOption(option_openticketsvsdaysaging, true);
        },
        error: function (xhr,type,errorThrown){
            console.log(errorThrown)
        }
    })
}

function getVolumevsSatisfaction(){
    $.ajax({
        url: "/getVolumevsSatisfaction",
        success: function (data){
            option_callvolumevssatisfaction.series[0].data = data.dataset
            option_callvolumevssatisfaction.visualMap[0].min = data.mincv
            option_callvolumevssatisfaction.visualMap[0].max = data.maxcv
            option_callvolumevssatisfaction.visualMap[1].min = data.minsf
            option_callvolumevssatisfaction.visualMap[1].max = data.maxsf
            option_callvolumevssatisfaction && callvolumevssatisfaction.setOption(option_callvolumevssatisfaction, true);
        },
        error: function (xhr,type,errorThrown){
            console.log(errorThrown)
        }
    })
}

// 初始化运行一次
getDaysbyAgent()
getagentdetails()
getTicketsvsDays()
getOpenvsDays()
getVolumevsSatisfaction()
