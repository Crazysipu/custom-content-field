'use strict';

/**
 * dev controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dev.dev');
