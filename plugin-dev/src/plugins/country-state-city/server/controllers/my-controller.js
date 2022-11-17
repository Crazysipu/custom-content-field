'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('country-state-city')
      .service('myService')
      .getWelcomeMessage();
  },
});
