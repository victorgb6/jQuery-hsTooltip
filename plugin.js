/*
	Copyright (c) <Year> <First & Last Name>, <Your Web Site>
	
	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:
	
	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function($) {

	$.hsTooltips = function( language ) {

		// Establish our default settings
		var allSets = {};
		var mouse = {x: 0, y: 0};
		/*Getting the mouse position*/
		document.addEventListener('mousemove', function(e){ 
		    mouse.x = e.clientX || e.pageX; 
		    mouse.y = e.clientY || e.pageY;
		}, false);
		/*Contains case-insensitive*/
		$.expr[":"].contains = $.expr.createPseudo(function(arg) {
		    return function( elem ) {
		        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		    };
		});
		/*cards/'+allSets[i].id+'.png*//*agentIconMale.png*/
		$.getJSON( "/jQuery-hsTooltip/jQuery-hsTooltip/AllSets."+language+".json", function( data ) {
			allSets = data['Basic'];
			$.merge(allSets, data['Curse of Naxxramas']);
			$.merge(allSets, data['Expert']);
			for (var i in allSets){
				var re = new RegExp(allSets[i].name,"gi");
				$("body *:not(.no-hs-tooltip):contains('"+allSets[i].name+"')").each(function(){
				    var $el = $(this);				    
				    $el.html( $el.html().replace(re, '<span class="hs-tooltip" style="text-decoration: underline">'+allSets[i].name+'<img src="cards/'+allSets[i].id+'.png" style="position: absolute; display: none"></span>') );
				    $(".hs-tooltip").mouseover(function(){
						$('img',this).show();
					}).mouseout(function(){
						$('img',this).hide();
					}).mousemove(function(){
						$('img',this).css({'top':mouse.y,'left':mouse.x});
					});
				});	
			}			
		});	
	};
}(jQuery));