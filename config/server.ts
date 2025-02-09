export default ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  url: env('NODE_ENV') === 'production' ? env('PUBLIC_URL', 'https://kmuvcd-strapi.onrender.com') : undefined,
  app: {
    keys: env.array('APP_KEYS'),
  },
});