import type { Schema, Struct } from '@strapi/strapi';

export interface WhatComponent extends Struct.ComponentSchema {
  collectionName: 'components_what_components';
  info: {
    displayName: 'Component';
    icon: 'alien';
  };
  attributes: {
    nachName: Schema.Attribute.String;
    vorName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'what.component': WhatComponent;
    }
  }
}
