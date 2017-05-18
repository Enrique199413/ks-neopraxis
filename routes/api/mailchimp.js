/**
 * Created by enriquelc on 17/05/17.
 */
var request = require('superagent');
var mailchimpInstance, listUniqueId, mailchimpApiKey;

exports.newsletter = function(req, res) {

	if (!process.env.MAILCHIMP_INSTANCE || !process.env.MAILCHIMP_UNIQUE_LIST_ID || !process.env.MAILCHIMP_API_KEY) {
		console.log('Unable to integrate mailchimp - no mailchimp credentials provided');
		return res.send({ error: 'could not find mailchimp credentials' });
	} else {
		mailchimpInstance = process.env.MAILCHIMP_INSTANCE;
		listUniqueId = process.env.MAILCHIMP_UNIQUE_LIST_ID;
		mailchimpApiKey = process.env.MAILCHIMP_API_KEY;

		request
			.post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
			.set('Content-Type', 'application/json;charset=utf-8')
			.set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey).toString('base64'))
			.send({
				'email_address': req.body.email,
				'status': 'subscribed',
			})
			.end(function (err, response) {
				if ((response.status === 400 && response.body.title === "Invalid Resource")) {
					res.status(412).send({ error: response.body.detail });
				} else if ((response.status === 400 && response.body.title === "Member Exists")) {
					res.status(403).send({ error: 200 });
				} else {
					res.status(200).send({ suscribe: true });
				}
			});
	}
}
