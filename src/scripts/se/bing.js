///////////////
// Main Code //
///////////////
	
	var prefs

	chrome.runtime.sendMessage({'id': 'get_prefs'}, function(se_prefs) {
		prefs = se_prefs['bing']
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
					#b_results li.b_ad:not(.b_adBottom) { display: none !important; }\n\
					\n'
			}
		// Below Search Results
			if (prefs['below']) {
				stylesheet = stylesheet + '\
					/* Below Search Results */\n\
					#b_results li.b_ad.b_adBottom { display: none !important; }\n\
					\n'
			}
		// Column on Right of Search Results
			if (prefs['right']) {
				stylesheet = stylesheet + '\
					/* Column on Right of Search Results */\n\
					#b_context .sb_add.sb_adTA { display: none !important; }\n\
					\n'
			}
		// Products on Right of Search Results
			if (prefs['products']) {
				stylesheet = stylesheet + '\
					/* Products on Right of Search Results */\n\
					#b_context .b_ad, .pa_sbo { display: none !important; }\n\
					\n'
			}
		// "Related Searches" Section (On Left and Below Search Results)
			if (prefs['r_searches']) {
				stylesheet = stylesheet + '\
					/* "Related Searches" Section (On Left and Below Search Results) */\n\
					#b_context .b_ans, .b_rs { display: none !important; }\n\
					\n'
			}
		// Above Search Results (Maps)
			if (prefs['maps_above']) {
				stylesheet = stylesheet +'\
					/* Above Search Results (Maps) */\n\
					.adResults, .syndicatedAds, .adsContainer { display: none !important; }\n'
			}

        // Attach Stylesheet
        	$('<style id="SEAR_stylesheet">').text(stylesheet).appendTo('head')
	}