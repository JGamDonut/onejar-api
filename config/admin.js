module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aef4d80ebe59835fcd7dfa8258d49563'),
  },
});
