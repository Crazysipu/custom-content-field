import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';
import SelectDropdownIcon from './components/SelectDropdownIcon';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: "csc-dropdown",
      pluginId: "country-state-city", // the custom field is created by a state plugin
      type: "string", // the state will be stored as a string
      intlLabel: {
        id: "country-state-city.csc-dropdown.label",
        defaultMessage: "country-state-city",
      },
      intlDescription: {
        id: "country-state-city.csc-dropdown.description",
        defaultMessage: "Select anyyhing...",
      },
      icon: SelectDropdownIcon, // don't forget to create/import your icon component 
      components: {
        Input: async () => import( "../src/components/SelectDropdown"),
      },
      options: {
        advanced: [
          {
              sectionTitle: {
                  id: 'global.settings',
                  defaultMessage: 'Settings',
              },
              items: [
                  {
                      name: 'required',
                      type: 'checkbox',
                      intlLabel: {
                          id: 'form.attribute.item.requiredField',
                          defaultMessage: 'Required field',
                      },
                      description: {
                          id: 'form.attribute.item.requiredField.description',
                          defaultMessage: "You won't be able to create an entry if this field is empty",
                      },
                  },
              ],
          },
      ],
      },
    });
  
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      Component: async () => {
        const component = await import(/* webpackChunkName: "[request]" */ './pages/App');

        return component;
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    });
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
