'use strict';

const Base = require('@alicloud/acm-sdk');

class ACMClient extends Base {
  constructor(app) {
    super(Object.assign({
      cluster: app.cluster,
    }, app.config.acm));

    this.app = app;
    this.on('error', err => {
      app.coreLogger.error(err);
    });

    app.beforeStart(async () => {
      app.coreLogger.info('[egg-acm] acm-client is ready');
    });
    app.beforeClose(async () => {
      app.coreLogger.info('[egg-acm] acm-client is closed');
    });
  }
}

module.exports = ACMClient;
