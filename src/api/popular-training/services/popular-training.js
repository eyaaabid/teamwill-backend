'use strict';

/**
 * popular-training service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popular-training.popular-training');
