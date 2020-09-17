/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.2.3.min.js",
            js+"jquery-ui.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0', '0', '1282px', '603px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px'],
                            transform: [[],[],[],['1.17122','1.49346']]
                        },
                        {
                            id: 'titulo',
                            type: 'image',
                            rect: ['0px', '-132px', '501px', '112px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo.svg",'0px','0px']
                        },
                        {
                            id: 'epacio-actividad',
                            display: 'none',
                            type: 'image',
                            rect: ['12px', '150px', '1258px', '432px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"epacio-actividad.svg",'0px','0px']
                        },
                        {
                            id: 'caja1',
                            type: 'rect',
                            rect: ['441px', '159px', '94px', '79px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja2',
                            type: 'rect',
                            rect: ['378px', '315px', '100px', '87px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja3',
                            type: 'rect',
                            rect: ['495px', '294px', '102px', '86px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja4',
                            type: 'rect',
                            rect: ['494px', '386px', '107px', '75px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja5',
                            type: 'rect',
                            rect: ['493px', '472px', '98px', '84px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja6',
                            type: 'rect',
                            rect: ['610px', '350px', '107px', '90px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja7',
                            type: 'rect',
                            rect: ['718px', '291px', '107px', '90px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja8',
                            type: 'rect',
                            rect: ['839px', '298px', '107px', '75px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja9',
                            type: 'rect',
                            rect: ['958px', '297px', '103px', '78px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja10',
                            type: 'rect',
                            rect: ['912px', '458px', '107px', '90px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja11',
                            type: 'rect',
                            rect: ['1028px', '170px', '107px', '90px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'caja12',
                            type: 'rect',
                            rect: ['1156px', '175px', '107px', '75px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "cajas"
                        },
                        {
                            id: 'item1',
                            display: 'none',
                            type: 'image',
                            rect: ['26px', '178px', '94px', '73px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item1.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'item2',
                            display: 'none',
                            type: 'image',
                            rect: ['140px', '178', '94px', '73px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item2.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'item3',
                            display: 'none',
                            type: 'image',
                            rect: ['250px', '178', '94px', '75px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item3.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'item4',
                            display: 'none',
                            type: 'image',
                            rect: ['31', '276', '94px', '73px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item4.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'item5',
                            display: 'none',
                            type: 'image',
                            rect: ['142px', '279px', '94px', '58px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item5.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'item6',
                            display: 'none',
                            type: 'image',
                            rect: ['250', '268', '94px', '73px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item6.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'item7',
                            display: 'none',
                            type: 'image',
                            rect: ['38', '373', '107px', '79px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item7.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'item8',
                            display: 'none',
                            type: 'image',
                            rect: ['145', '373', '94px', '73px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item8.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'item9',
                            display: 'none',
                            type: 'image',
                            rect: ['257', '373', '98px', '66px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item9.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'item10',
                            display: 'none',
                            type: 'image',
                            rect: ['43px', '476', '94px', '73px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item10.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'item11',
                            display: 'none',
                            type: 'image',
                            rect: ['153', '476', '94px', '75px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item11.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'item12',
                            display: 'none',
                            type: 'image',
                            rect: ['258px', '476', '94px', '73px', 'auto', 'auto'],
                            cursor: 'move',
                            fill: ["rgba(0,0,0,0)",im+"item12.svg",'0px','0px'],
                            userClass: "fichas"
                        },
                        {
                            id: 'bt_instrucciones',
                            display: 'none',
                            type: 'image',
                            rect: ['1203px', '346px', '49px', '207px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"bt_instrucciones.svg",'0px','0px']
                        },
                        {
                            id: 'si',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['626', '37', '203px', '109px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"si.svg",'0px','0px']
                        },
                        {
                            id: 'fail',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"fail.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'success',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"success.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'instruccion',
                            symbolName: 'instruccion',
                            display: 'none',
                            type: 'rect',
                            rect: ['814', '351', '391', '174', 'auto', 'auto']
                        },
                        {
                            id: 'mal',
                            symbolName: 'mal',
                            display: 'none',
                            type: 'rect',
                            rect: ['4', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'bien',
                            symbolName: 'bien',
                            display: 'none',
                            type: 'rect',
                            rect: ['4', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'aplauso_largo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"aplauso_largo.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'abucheo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"abucheo.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1917,
                    autoPlay: true,
                    labels: {
                        "fin": 1750
                    },
                    data: [
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instruccion}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${epacio-actividad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "opacity",
                            1000,
                            500,
                            "easeOutBounce",
                            "${epacio-actividad}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            1565,
                            0,
                            "linear",
                            "${bt_instrucciones}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "easeOutBounce",
                            "${si}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${titulo}",
                            '-132px',
                            '15px'
                        ],
                        [
                            "eid21",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mal}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien}",
                            'none',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${fondo}",
                            '1.17122',
                            '1'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${fondo}",
                            '1.49346',
                            '1'
                        ],
                        [
                            "eid23",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${item12}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "instruccion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'instrucciones',
                            type: 'image',
                            rect: ['0px', '0px', '391px', '174px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/instrucciones.svg', '0px', '0px']
                        },
                        {
                            rect: ['360px', '19px', '20px', '20px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['25px', '48px', '341px', '109px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Las fichas corresponden a una parte del flujograma del RLCPD estudiado en la actividad de aprendizaje número 4. Identifique el lugar que le corresponde a cada una y arrastrela. Para tal fin, se le brindará una estructura guía del flujograma con las flechas que indican las relaciones entre cada una de las fichas<span style=\"font-size: 12px;\">​</span></p>',
                            align: 'justify',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '391px', '174px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bien": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.31)']
                        },
                        {
                            rect: ['6px', '81px', '452px', '519px', 'auto', 'auto'],
                            id: 'aviso_bien',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bien-final.svg', '0px', '0px']
                        },
                        {
                            rect: ['181px', '326px', '169px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${aviso_bien}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "mal": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.31)']
                        },
                        {
                            type: 'image',
                            id: 'aviso_mal',
                            rect: ['14px', '91px', '452px', '519px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mal-final.svg', '0px', '0px']
                        },
                        {
                            rect: ['194px', '339px', '169px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-1820150628");
