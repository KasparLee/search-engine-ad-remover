///////////////
// Main Code //
///////////////
	
// Request Preferences
chrome.runtime.sendMessage({'id': 'get_prefs'}, function(prefs) {
	for (se in prefs) {
		for (option in prefs[se]) {
			$('div[data-se="' + se + '"] input[data-option="' + option + '"]').prop('checked', prefs[se][option])
		}
	}
})



////////////
// Listen //
////////////
	
// Preference Change
$('#se_blocks .se_block input').on('change', function() {
	se = $(this).parents('.se_block').data('se')
	option = $(this).data('option')
	val = $(this).is(':checked')
	
	chrome.runtime.sendMessage({'id': 'get_prefs'}, function(prefs) {
		prefs[se][option] = val
		chrome.runtime.sendMessage({'id': 'set_prefs', 'data': prefs})
	})

})

// Tab Change
$('#tabs .tab').click(function() {
	if (!$(this).hasClass('active')) {
		// Remove .active
		$('#tabs .tab.active').removeClass('active')
		$('#se_blocks .se_block.active').removeClass('active')
		// Add new .active
		$(this).addClass('active')
		$('#se_blocks').children('.se_block[data-se="' + $(this).data('name') + '"]').addClass('active')
	}
})