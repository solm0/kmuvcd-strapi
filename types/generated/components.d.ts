import type { Schema, Struct } from '@strapi/strapi';

export interface ContentMedia extends Struct.ComponentSchema {
  collectionName: 'components_content_media';
  info: {
    displayName: 'media';
    icon: 'picture';
  };
  attributes: {
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ContentText extends Struct.ComponentSchema {
  collectionName: 'components_content_texts';
  info: {
    displayName: 'text';
    icon: 'pencil';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

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
    poster: Schema.Attribute.Media<'images', true>;
    startDate: Schema.Attribute.Date & Schema.Attribute.Required;
    tags: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'>;
  };
}

export interface WebsiteWebsite extends Struct.ComponentSchema {
  collectionName: 'components_website_websites';
  info: {
    displayName: 'website';
    icon: 'globe';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.media': ContentMedia;
      'content.text': ContentText;
      'event.event': EventEvent;
      'website.website': WebsiteWebsite;
    }
  }
}
