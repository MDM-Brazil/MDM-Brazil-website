/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Rectangle',
            type:'rect',
            rect:['0px','0px','550px','400px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            fill:["rgba(13,24,107,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[]
         },
         {
            id:'RoundRect2',
            type:'rect',
            rect:['30px','10px','139px','37px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            fill:["rgba(0,18,162,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RoundRect2Copy',
            type:'rect',
            rect:['171px','10px','139px','37px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            fill:["rgba(0,18,162,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['20px','27px','512px','37px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RoundRect3',
            type:'rect',
            rect:['30px','83px','490px','140px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            opacity:0.77,
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RoundRect3Copy',
            type:'rect',
            rect:['41px','240px','229px','140px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            opacity:0.44,
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RoundRect3Copy3',
            type:'rect',
            rect:['283px','240px','229px','140px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            opacity:0.13,
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect3Copy3}": [
            ["style", "top", '240px'],
            ["style", "opacity", '0.13'],
            ["style", "left", '283px'],
            ["style", "width", '229px']
         ],
         "${_RoundRect3}": [
            ["style", "top", '83px'],
            ["style", "opacity", '0.77'],
            ["style", "left", '30px'],
            ["style", "width", '490px']
         ],
         "${_RoundRect2Copy}": [
            ["style", "top", '10px'],
            ["style", "left", '171px'],
            ["color", "background-color", 'rgba(0,18,162,1.00)']
         ],
         "${_RoundRect3Copy}": [
            ["style", "top", '240px'],
            ["style", "opacity", '0.44'],
            ["style", "left", '41px'],
            ["style", "width", '229px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(13,24,107,1.00)'],
            ["style", "border-bottom-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_RoundRect2}": [
            ["style", "top", '10px'],
            ["style", "left", '30px'],
            ["color", "background-color", 'rgba(0,18,162,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-26053714");
