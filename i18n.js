/**
 * Created by andriy on 19.10.2016.
 */
var i18n = require('i18n');

i18n.configure({
    // setup some locales - other locales default to en silently
    locales:['ua', 'en', 'ru' ],

    // where to store json files - defaults to './locales' relative to modules directory
    directory: __dirname + '/locales',

    defaultLocale: 'en',

    // sets a custom cookie name to parse locale settings from  - defaults to NULL
    cookie: 'lang',
    queryParameter: 'lang',
    register: global
});

module.exports = function(req, res, next) {
    i18n.init(req, res);
    console.log(req.query);
    //i18n.setLocale(req.query['lang']);

    var current_locale = i18n.getLocale();

    return next();
};
