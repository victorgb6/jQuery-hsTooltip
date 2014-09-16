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

	$.hsTooltips = function( options ) {

		// Establish our default settings
		/*var settings = $.extend({
			text         : 'Hello, World!',
		}, options);*/
		var allSets = {};
		$.getJSON( "/AllSets.json", function( data ) {
			allSets = data['Basic'];
			$.merge(allSets, data['Curse of Naxxramas']);
			$.merge(allSets, data['Expert']);
			for (var i in allSets){
				$("body *").each(function()
				{
				    var $el = $(this);
				    var re = new RegExp(allSets[i].name,"gi");
				    $el.html( $el.html().replace(re, '<span style="text-decoration: underline">'+allSets[i].name+'</span>') );
				});
				
			}
			
		});
		
	};

}(jQuery));