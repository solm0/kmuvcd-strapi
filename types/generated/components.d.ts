import type { Schema, Struct } from '@strapi/strapi';

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    description: '';
    displayName: 'text';
    icon: 'pencil';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

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
      'content.content': ContentContent;
      'content.media': ContentMedia;
      'event.event': EventEvent;
      'website.website': WebsiteWebsite;
    }
  }
}
