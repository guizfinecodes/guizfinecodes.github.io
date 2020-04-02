console.log('form ready')
$(document).ready(function () {
	$('.submit').click(function (event) {
		console.log('clicked button')

		var name = $('.name').val()
		var email = $('.email').val()
		var phone = $('.phone').val()
		var subject = $('.subjects').val()
		var message = $('.message').val()
		var statusElm = $('.status')
		statusElm.empty()

		
		if (name.length > 3 ) {
			console.log( 'name is valid')
		}else {
			event.preventDefault()
			statusElm.append('<div>Name is not valid(At least 4 characters)</div>')
		}

		if (email.length > 5 && email.includes('@') && email.includes('.')) {
			console.log( 'email is valid')
		}else {
			event.preventDefault()
			statusElm.append('<div>Email is not valid</div>')
		}

		if (subject.length > 3 ) {
			console.log( 'subject is valid')
		}else {
			event.preventDefault()
			statusElm.append('<div>Subject is too short(4 or more characters)</div>')
		}


		if (message.length >= 4) {
			console.log( 'message is valid')
		}else {
			event.preventDefault()
			statusElm.append('<div>Message is too short(5 or more characters)</div>')
		}

	})

})