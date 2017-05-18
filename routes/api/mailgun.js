/**
 * Created by enriquelc on 18/05/17.
 */
var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');

exports.sendMail = function (req, res) {

	if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
		console.log('Unable to send email - no mailgun credentials provided');
		res.send('could not find mailgun credentials');
	}

	var newEnquiry = new Enquiry.model();
	var updater = newEnquiry.getUpdateHandler(req);

	updater.process(req.body, {
		flashErrors: true,
		fields: 'name, email, phone, enquiryType, message',
		errorMessage: 'There was a problem submitting your enquiry:',
	}, function (err) {
		if (err) {
			locals.validationErrors = err.errors;
		} else {
			locals.enquirySubmitted = true;
		}
		next();
	});
	
}
