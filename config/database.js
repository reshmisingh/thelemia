const path = require('path');

module.exports = ({ env }) => ({
  // connection: {
  //   client: 'sqlite',
  //   connection: {
  //     filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
  //   },
  //   useNullAsDefault: true,
  // },

  defaultConnection: "default",
      connection: {
        client: "postgres",
        connection: {
          host: env("DATABASE_HOST", "database-1.ccuiw3qta9zh.ap-south-1.rds.amazonaws.com"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "thelemia"),
          user: env("DATABASE_USERNAME", "thelemia"),
          password: env("DATABASE_PASSWORD", "Thelemia123"),
          schema: env("DATABASE_SCHEMA", "public")
        },
      }
});
