/* eslint-env node */
'use strict';

module.exports = {
  name: require('./package').name,

    included: function(app) {
        this.app = app;
        this._super.included(app);

        app.import('node_modules/jquery.sparkline/dist/jquery.sparkline.js');
    }
};
