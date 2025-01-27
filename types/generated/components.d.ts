import type { Schema, Struct } from '@strapi/strapi';

export interface EventEvent extends Struct.ComponentSchema {
  collectionName: 'components_event_events';
  info: {
    description: '';
    displayName: 'Event';
    icon: 'clock';
  };
  attributes: {
    endDate: Schema.Attribute.Date;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    poster: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    startDate: Schema.Attribute.Date & Schema.Attribute.Required;
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
