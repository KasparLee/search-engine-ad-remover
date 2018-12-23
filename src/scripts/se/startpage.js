///////////////
// Main Code //
///////////////

	var prefs

	chrome.runtime.sendMessage({'id': 'get_prefs'}, function(se_prefs) {
		prefs = se_prefs['startpage']
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

		// Above Search Results
			if (prefs['above']) {
				stylesheet = stylesheet + '\
					/* Above Search Results (Search) */\n\
					#spon-results { display: none !important; }\n\
					\n'
			}
		// Below Search Results
			if (prefs['below']) {
				stylesheet = stylesheet + '\
					/* Below Search Results */\n\
					#sponsored_csa2 { display: none !important; }\n\
					\n'
			}

        // Attach Stylesheet
        	$('<style id="SEAR_stylesheet">').text(stylesheet).appendTo('head')
	}