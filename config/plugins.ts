export default ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-resend',
      providerOptions: {
        apiKey: env('RESEND_API_KEY'), // Required
      },
      settings: {
        defaultFrom: 'noreply@solmee.xyz',
        defaultReplyTo: 'support@solmee.xyz',
      },
    }
  },    
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["realname"],
      },
    },
  },
});