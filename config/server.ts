export default ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://kmuvcd-strapi.onrender.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});