browser.tabs.onUpdated.addListener(function(tab_id, changed_info, tab) {
	if (!!changed_info['url']) {
		// Google
			if (changed_info['url'].match(/(\/|\.)google\..*/)) {
				chrome.tabs.executeScript(tab_id, {'file': chrome.extension.getURL('scripts/jquery-3.3.1.js'), 'runAt': 'document_start'}, function() {
					chrome.tabs.executeScript(tab_id, {'file': 'scripts/se/google.js', 'runAt': 'document_start'})
				})
			}
		// Bing
			if (changed_info['url'].match(/(\/|\.)bing\..*/)) {
				chrome.tabs.executeScript(tab_id, {'file': chrome.extension.getURL('scripts/jquery-3.3.1.js'), 'runAt': 'document_start'}, function() {
					chrome.tabs.executeScript(tab_id, {'file': 'scripts/se/bing.js', 'runAt': 'document_start'})
				})
			}
		// DuckDuckGo
			if (changed_info['url'].match(/(\/|\.)duckduckgo\..*/)) {
				chrome.tabs.executeScript(tab_id, {'file': chrome.extension.getURL('scripts/jquery-3.3.1.js'), 'runAt': 'document_start'}, function() {
					chrome.tabs.executeScript(tab_id, {'file': 'scripts/se/duckduckgo.js', 'runAt': 'document_start'})
				})
			}
		// StartPage
			if (changed_info['url'].match(/(\/|\.)startpage\..*/)) {
				chrome.tabs.executeScript(tab_id, {'file': chrome.extension.getURL('scripts/jquery-3.3.1.js'), 'runAt': 'document_start'}, function() {
					chrome.tabs.executeScript(tab_id, {'file': 'scripts/se/startpage.js', 'runAt': 'document_start'})
				})
			}
		// Ask
			if (changed_info['url'].match(/(\/|\.)ask\..*/)) {
				chrome.tabs.executeScript(tab_id, {'file': chrome.extension.getURL('scripts/jquery-3.3.1.js'), 'runAt': 'document_start'}, function() {
					chrome.tabs.executeScript(tab_id, {'file': 'scripts/se/ask.js', 'runAt': 'document_start'})
				})
			}
	}
})