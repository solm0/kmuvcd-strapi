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

export interface MediaAndTextMediaAndText extends Struct.ComponentSchema {
  collectionName: 'components_media_and_text_media_and_texts';
  info: {
    description: '';
    displayName: 'media_and_text';
    icon: 'dashboard';
  };
  attributes: {
    lower_text: Schema.Attribute.RichText;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    upper_text: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'event.event': EventEvent;
      'media-and-text.media-and-text': MediaAndTextMediaAndText;
    }
  }
}
