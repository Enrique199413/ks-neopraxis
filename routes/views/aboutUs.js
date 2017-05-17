/**
 * Created by enriquelc on 17/05/17.
 */
var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.section = 'aboutUs';
	view.render('aboutUs');
};
