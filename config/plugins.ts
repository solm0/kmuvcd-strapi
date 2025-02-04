export default ({ env }) => ({
  email: {
    logger: {
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error
    },
    config: {
      provider: 'sendmail',
      settings: {
        defaultFrom: 'your-email@email.com',
        defaultReplyTo: 'your-email@email.com',
      },
    },
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
  // ...
});