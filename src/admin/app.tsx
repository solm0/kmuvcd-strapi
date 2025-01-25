import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: ["ko", "en"],
    notifications: { releases: false },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
