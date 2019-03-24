'use strict';

const ACMClient = require('./lib/acm_client');

module.exports = agent => {
  if (agent.config.acm.agent) {
    agent.acm = new ACMClient(agent);
  }
};
