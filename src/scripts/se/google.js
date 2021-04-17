///////////////
// Main Code //
///////////////

var prefs

chrome.runtime.sendMessage({'id': 'get_prefs'}, function(se_prefs) {
	prefs = se_prefs.google
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
	if (prefs.above) {
		stylesheet = stylesheet + '\
			/* Above Search Results */\n\
			#tads { display: none !important; }\n\
			\n'
	}
	// Sponsored Products Above / on Right of Search Results
	if (prefs.sponsored) {
		stylesheet = stylesheet + '\
			/* Sponsored Products Above / on Right of Search Results */\n\
			.commercial-unit-desktop-rhs, .commercial-unit-desktop-top { display: none !important; }\n\
			\n'
	}
	// Twitter Feeds in Search Results
	if (prefs.twitter) {
		stylesheet = stylesheet + '\
			/* Twitter Feeds in Search Results */\n\
			g-snapping-carousel._Acj { display: none !important; }\n\
			\n'
	}
	// "Related Searches" Section (Below Search Results)
	if (prefs.r_searches) {
		stylesheet = stylesheet + '\
			/* "Related Searches" Section (Below Search Results) */\n\
			#botstuff { display: none !important }\n\
			\n'
	}
	// Above Search Results (Maps)
	if (prefs.maps_above) {
		stylesheet = stylesheet +'\
			/* Above Search Results (Maps) */\n\
			.widget-pane-section-ad-content { display: none !important; }\n'
	}
	// Below Search Results (Shopping)
	if (prefs.shop_below) {
		stylesheet = stylesheet + '\
			/* Below Search Results (Shopping) */\n\
			#bottomads { display: none !important; }\n\
			\n'
	}

	// Attach Stylesheet
	$('<style id="SEAR_stylesheet">').text(stylesheet).appendTo('head')
}