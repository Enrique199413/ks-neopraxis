/**
 * Created by enriquelc on 18/05/17.
 */
/* global $ */

$('document').ready(function () {
	$('#blogBody > p:nth-child(3)').addClass('neopraxis-font-myriadpro-regular no-margin-text charcoal-text blog-text')
	$('#blogBody > a').addClass('neopraxis-font-myriadpro-regular no-margin-text charcoal-text blog-text')
	$('#messageNewsletter').hide();
	$('#messageNewsletterBlog').hide();
	$('#blogNewsletter').on('submit', function (e) {
		$('#inputNewsletterBlog').hide();
		$.ajax({
			type: 'post',
			url: '/api/mailchimp/newsletter',
			data: $('#blogNewsletter').serialize(),
			success: function () {
				document.querySelector('#messageNewsletterBlog').innerHTML = 'Gracias por tu suscripción';
				$('#messageNewsletter').show();
				setTimeout(function () {
					document.querySelector('#blogNewsletter').reset();
					$('#inputNewsletterBlog').show();
					$('#messageNewsletter').hide();
				}, 2000);
			},
			error: function (error) {
				document.querySelector('#messageNewsletterBlog').innerHTML = error.status === 403 ? 'Ya estas registrado' : 'Verifica el correo';
				document.querySelector('#messageNewsletterBlog').style.display = 'inline !important';
				$('#messageNewsletterBlog').show();
				setTimeout(function () {
					$('#inputNewsletterBlog').show();
					$('#messageNewsletterBlog').hide();
					document.querySelector('#blogNewsletter').reset();
				}, 2000);
			},
		});
		e.preventDefault();
	});
	$('#newsletterInput').on('submit', function (e) {
		$('#inputText').hide();
		$.ajax({
			type: 'post',
			url: '/api/mailchimp/newsletter',
			data: $('#newsletterInput').serialize(),
			success: function () {
				document.querySelector('#messageNewsletter').innerHTML = 'Gracias por tu suscripción';
				$('#messageNewsletter').show();
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
	$('#textForm').hide();
	$('#textFormTwo').hide();
	$('#textFormIndex').hide();
	$('#formFree').on('submit', function (e) {
		$.ajax({
			type: 'post',
			url: '/api/mailgun/sendMail',
			data: $('#formFree').serialize(),
			success: function (data) {
				if (data.error === 'error') {
					$('#textForm').show();
					document.querySelector('#textForm').innerHTML = 'Verifica los datos ingresados';
					setTimeout(function () {
						document.querySelector('#formFree').reset();
						$('#textForm').hide();
						$('#textForm').innerHTML = 'Nos pondremos en contacto contigo, gracias.';
					}, 2000);
				} else {
					document.querySelector('#textForm').innerHTML = 'Nos pondremos en contacto contigo, gracias.';
					$('#textForm').show();
					setTimeout(function () {
						document.querySelector('#formFree').reset();
						$('#textForm').hide();
					}, 2000);
				}
			},
		});
		e.preventDefault();
	});
	$('#formFreeTwo').on('submit', function (e) {
		$.ajax({
			type: 'post',
			url: '/api/mailgun/sendMail',
			data: $('#formFreeTwo').serialize(),
			success: function (data) {
				if (data.error === 'error') {
					document.querySelector('#textFormTwo').innerHTML = 'Verifica los datos ingresados';
					$('#textFormTwo').show();
					setTimeout(function () {
						document.querySelector('#formFreeTwo').reset();
						$('#textFormTwo').hide();
						document.querySelector('#textFormTwo').innerHTML = 'Nos pondremos en contacto contigo, gracias.';
					}, 2000);
				} else {
					$('#textFormTwo').show();
					setTimeout(function () {
						document.querySelector('#formFreeTwo').reset();
						$('#textFormTwo').hide();
					}, 2000);
				}
			},
		});
		e.preventDefault();
	});
	$('#formDataIndex').on('submit', function (e) {
		$.ajax({
			type: 'post',
			url: '/api/mailgun/sendMail',
			data: $('#formDataIndex').serialize(),
			success: function (data) {
				if (data.error === 'error') {
					document.querySelector('#textFormIndex').innerHTML = 'Verifica los datos ingresados';
					$('#formDataIndex').hide();
					$('#textFormIndex').show();
					setTimeout(function () {
						document.querySelector('#formDataIndex').reset();
						$('#textFormIndex').hide();
						$('#formDataIndex').show();
						$('#textFormIndex').innerHTML = 'Nos pondremos en contacto contigo, gracias.';
					}, 2000);
				} else {
					$('#textFormIndex').show();
					$('#formDataIndex').hide();
					setTimeout(function () {
						document.querySelector('#formDataIndex').reset();
						$('#textFormIndex').hide();
						$('#formDataIndex').show();
					}, 2000);
				}
			},
		});
		e.preventDefault();
	});
});
