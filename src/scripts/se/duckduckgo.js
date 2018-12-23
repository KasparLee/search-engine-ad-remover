///////////////
// Main Code //
///////////////

	var prefs

	chrome.runtime.sendMessage({'id': 'get_prefs'}, function(se_prefs) {
		prefs = se_prefs['duckduckgo']
		// Add Stylesheet if not already added
			if ($('#SEAR_stylesheet').length < 1) {
				main()
			}
	})

	function main() {
    	// Initiate stylesheet
	    	var stylesheet = '\
	    		\n\
				/************************************************************/\n\
				/*                                                          */\n\
				/* SearchEngineAdRemover (Addon) - Stylesheet to remove ads */\n\
				/*                                                          */\n\
				/************************************************************/\n\
				\n'
		
		// All Ads in Search Results
			if (prefs['all']) {
				stylesheet = stylesheet + '\
				/* All Ads in Search Results */\n\
				.result--ad, .result--ads, .results--ads { display: none !important; }\n\
				\n'
			}  

		// Attach Stylesheet
        	$('<style id="SEAR_stylesheet">').text(stylesheet).appendTo('head')
	}