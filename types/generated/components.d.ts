import type { Schema, Struct } from '@strapi/strapi';

export interface EventEvent extends Struct.ComponentSchema {
  collectionName: 'components_event_events';
  info: {
    displayName: 'Event';
    icon: 'clock';
  };
  attributes: {
    endDate: Schema.Attribute.Date;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    startDate: Schema.Attribute.Date;
    tags: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'event.event': EventEvent;
    }
  }
}
