/**
 * Created by enriquelc on 18/05/17.
 */
var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');

exports.sendMail = function (req, res) {
	var newEnquiry = new Enquiry.model();
	var updater = newEnquiry.getUpdateHandler(req);
	updater.process(req.body, {
		flashErrors: true,
		fields: 'name, email, phone, message',
		errorMessage: 'There was a problem submitting your enquiry:',
	}, function (err) {
		if (err) {
			res.send({ error: 'error' });
		} else {
			res.sendStatus(200).send('mailSent');
		}

	});
}
