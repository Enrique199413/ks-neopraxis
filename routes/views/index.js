var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		post: [],
	};
	view.on('init', function (next) {

		var q = keystone.list('Post').model.find()
			.sort('-publishedDate')
			.limit(1)
		q.exec(function (err, results) {
			locals.data.post = results;
			next(err);
		});
	});


	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'index';

	// Render the view
	view.render('index');
};
