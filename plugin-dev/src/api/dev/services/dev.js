'use strict';

/**
 * dev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dev.dev');
