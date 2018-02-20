'use strict';
module.exports = function(app) {
    var thoughtsAndFeelings = require('./controller');

    app.route('/')
        .get(thoughtsAndFeelings.help);

    app.route('/bestapi/')
        .get(thoughtsAndFeelings.best);

    app.route('/worstapi/')
        .get(thoughtsAndFeelings.worst);
}
