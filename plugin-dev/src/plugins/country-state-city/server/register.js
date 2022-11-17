'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'csc-dropdown',
    plugin:"country-state-city",
    type: 'string',
});
};
