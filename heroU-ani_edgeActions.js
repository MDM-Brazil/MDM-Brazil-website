/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   
   //Edge symbol: 'stage'
   (function(symbolName) {   

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1999, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_webAppTab}", "click", function(sym, e) {
         sym.play('webApp');
         
         var Web_App_Tab = sym.$("Web_App_Tab");
         Web_App_Tab.css('backgroundImage', 'linear-gradient(rgb(174, 178, 212) 0%, rgb(202, 208, 253) 100%)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Web_Site_Tab}", "click", function(sym, e) {
         sym.play('webSite');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_webAppTab}", "mouseenter", function(sym, e) {
         var webAppTab = sym.$("webAppTab");
         webAppTab.animate({'top':3}, 35);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_webAppTab}", "mousedown", function(sym, e) {
         var webAppTab = sym.$("webAppTab");
         webAppTab.animate({'top':5}, 37);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_webAppTab}", "mouseup", function(sym, e) {
         var webAppTab = sym.$("webAppTab");
         webAppTab.animate({'top':1},35);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_webAppTab}", "mouseleave", function(sym, e) {
         var webAppTab = sym.$("webAppTab");
         webAppTab.animate({'top':1},35);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3053, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_content}", "mouseenter", function(sym, e) {
         var content = sym.$("content");
         content.stop(true, false).animate({ opacity: 1 });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_content}", "mouseleave", function(sym, e) {
         var content = sym.$("content");
         content.stop(true, false).animate({ opacity: 0.77 });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'webAppTab'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Web_App_Tab}", "mouseenter", function(sym, e) {
         var webAppTab = sym.$("webAppTab");
         webAppTab.css({'backgroundColor':'rgb(174, 178, 212);','backgroundImage': 'linear-gradient(rgb(174, 178, 212) 0%, rgb(202, 208, 253) 100%);'});
         

      });
         //Edge binding end

   })("webAppTab");
   //Edge symbol end:'webAppTab'

})(jQuery, AdobeEdge, "EDGE-26053714");