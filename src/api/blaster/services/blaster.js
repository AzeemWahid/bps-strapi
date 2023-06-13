'use strict';

/**
 * blaster service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blaster.blaster');
