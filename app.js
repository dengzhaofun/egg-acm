'use strict';

const ACMClient = require('./lib/acm_client');

module.exports = app => {
  if (app.config.acm.app) {
    app.acm = new ACMClient(app);
  }
};
