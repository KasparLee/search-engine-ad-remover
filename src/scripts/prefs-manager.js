chrome.runtime.onMessage.addListener(function(message, sender, send_reply) {
	// Get Preferences
		if (message['id'] == 'get_prefs') {
			// Check if Prefs exist
				// Google
					function def_google() {
						chrome.storage.local.get('google', function(prefs) {
							var prefs = prefs['google']
							if (prefs               == undefined) { prefs               = {}    }
							if (prefs['above']      == undefined) { prefs['above']      = true  }
							if (prefs['sponsored']  == undefined) { prefs['sponsored']  = true  }
							if (prefs['twitter']    == undefined) { prefs['twitter']    = false }
							if (prefs['r_searches'] == undefined) { prefs['r_searches'] = true  }
							if (prefs['maps_above'] == undefined) { prefs['maps_above'] = true  }
							if (prefs['shop_below'] == undefined) { prefs['shop_below'] = true  }
							if (prefs['google'])                  { delete prefs['google'] }
							chrome.storage.local.set({'google': prefs}, def_bing())
						})	
					}
				// Bing
					function def_bing() {
						chrome.storage.local.get('bing', function(prefs) {
							var prefs = prefs['bing']
							if (prefs               == undefined) { prefs               = {}   }
							if (prefs['above']      == undefined) { prefs['above']      = true }
							if (prefs['below']      == undefined) { prefs['below']      = true }
							if (prefs['right']      == undefined) { prefs['right']      = true }
							if (prefs['products']   == undefined) { prefs['products']   = true }
							if (prefs['r_searches'] == undefined) { prefs['r_searches'] = true }
							if (prefs['maps_above'] == undefined) { prefs['maps_above'] = true }
							if (prefs['bing'])                    { delete prefs['bing'] }
							chrome.storage.local.set({'bing': prefs}, def_duckduckgo())
						})	
					}
				// DuckDuckGo
					function def_duckduckgo() {
						chrome.storage.local.get('duckduckgo', function(prefs) {
							var prefs = prefs['duckduckgo']
							if (prefs             == undefined) { prefs        = {}   }
							if (prefs['all']      == undefined) { prefs['all'] = true }
							if (prefs['duckduckgo'])            { delete prefs['duckduckgo'] }
							chrome.storage.local.set({'duckduckgo': prefs}, def_startpage())
						})	
					}
				// StartPage
					function def_startpage() {
						chrome.storage.local.get('startpage', function(prefs) {
							var prefs = prefs['startpage']
							if (prefs               == undefined) { prefs               = {}   }
							if (prefs['above']      == undefined) { prefs['above']      = true }
							if (prefs['below']      == undefined) { prefs['below']      = true }
							if (prefs['startpage'])               { delete prefs['startpage'] }
							chrome.storage.local.set({'startpage': prefs}, def_ask())
						})	
					}
				// Ask
					function def_ask() {
						chrome.storage.local.get('ask', function(prefs) {
							var prefs = prefs['ask']
							if (prefs               == undefined) { prefs               = {}   }
							if (prefs['above']      == undefined) { prefs['above']      = true }
							if (prefs['below']      == undefined) { prefs['below']      = true }
							if (prefs['r_searches'] == undefined) { prefs['r_searches'] = true }
							if (prefs['s_results']  == undefined) { prefs['s_results']  = true }
							if (prefs['ask'])                     { delete prefs['ask'] }
							chrome.storage.local.set({'ask': prefs})
							send_prefs()
						})	
					}
				// --- Start Checking ---
					def_google()
			// Send Prefs
				function send_prefs() {
					chrome.storage.local.get(function(data) {
						send_reply(data)
					})
				}
			// Keep channel open until ready for response
				return true
		}
	// Set Preferences
		if (message['id'] == 'set_prefs') {
			chrome.storage.local.set(message['data'])
		}
})