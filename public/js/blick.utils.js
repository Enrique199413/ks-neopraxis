/**
 * Created by enriquelc on 18/05/17.
 */
/* global $ */

$('document').ready(function () {
	$('#messageNewsletter').hide();
	$('#newsletterInput').on('submit',function (e) {
		$('#inputText').hide();
		$.ajax({
			type: 'post',
			url: '/api/mailchimp/newsletter',
			data: $('#newsletterInput').serialize(),
			success: function () {
				document.querySelector('#messageNewsletter').innerHTML = 'Gracias por tu suscripción';
				setTimeout(function () {
					document.querySelector('#newsletterInput').reset();
					$('#inputText').show();
					$('#messageNewsletter').hide();
				}, 2000);
			},
			error: function (error) {
				document.querySelector('#messageNewsletter').innerHTML = error.status === 403 ? 'Ya estas registrado' : 'Verifica el correo';
				document.querySelector('#messageNewsletter').style.display = 'inline !important';
				$('#messageNewsletter').show();
				setTimeout(function () {
					$('#inputText').show();
					$('#messageNewsletter').hide();
					document.querySelector('#newsletterInput').reset();
				}, 2000);
			},
		});
		e.preventDefault();
	});
});
