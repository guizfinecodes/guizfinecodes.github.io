console.log('form on dom')
$(document).ready(function () {
	$('.submit').click(function (event) {
		console.log('clicked button')

		var name = $('.name').val()
		var email = $('.email').val()
		var phone = $('.phone').val()
		var subject = $('.subject').val()
		var message = $('.message').val()
		var statusElm = $('.status')
		statusElm.empty()

		
		if (name.length > 3 ) {
			console.log( 'name is valid')
		}else {
			event.preventDefault()
			statusElm.append('<div>Name is not valid</div>')
		}

		if (email.length > 8 && email.includes('@') && email.includes('.')) {
			console.log( 'email is valid')
		}else {
			event.preventDefault()
			statusElm.append('<div>Email is not valid</div>')
		}

		if (message.length >= 5) {
			console.log( 'message is valid')
		}else {
			event.preventDefault()
			statusElm.append('<div>Message is too short</div>')
		}


	})

})