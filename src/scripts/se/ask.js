///////////////
// Main Code //
///////////////

	var prefs

	chrome.runtime.sendMessage({'id': 'get_prefs'}, function(se_prefs) {
		prefs = se_prefs['ask']
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
					/* Above Search Results */\n\
					.TopAdsPartial { display: none !important; }\n\
					\n'
			}
		// Below Search Results
			if (prefs['below']) {
				stylesheet = stylesheet + '\
					/* Below Search Results */\n\
					.BottomAdsPartial { display: none !important; }\n\
					\n'
			}
		// "Related Searches" section
			if (prefs['r_searches']) {
				stylesheet = stylesheet + '\
					/* "Related Searches" section (Search) */\n\
					.PartialRelatedSearch-body { display: none !important; }\n\
					\n'
			}
		// "Shopping results" section
			if (prefs['s_results']) {
				stylesheet = stylesheet + '\
					/* "Shopping results" section (Search) */\n\
					#lcs-smart-answer { display: none !important; }\n\
					\n'
			}

        // Attach Stylesheet
        	$('<style id="SEAR_stylesheet">').text(stylesheet).appendTo('head')
	}