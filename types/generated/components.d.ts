import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_image_blocks';
  info: {
    displayName: 'Image_block';
  };
  attributes: {
    image_block: Schema.Attribute.Media<'images', true>;
  };
}

export interface DynamicTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_text_blocks';
  info: {
    displayName: 'text_block';
  };
  attributes: {
    text_block: Schema.Attribute.RichText;
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
    startDate: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

export interface WebsiteWebsite extends Struct.ComponentSchema {
  collectionName: 'components_website_websites';
  info: {
    description: '';
    displayName: 'website';
    icon: 'globe';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic.image-block': DynamicImageBlock;
      'dynamic.text-block': DynamicTextBlock;
      'event.event': EventEvent;
      'website.website': WebsiteWebsite;
    }
  }
}
