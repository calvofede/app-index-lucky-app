import { knexSnakeCaseMappers } from 'objection';

const config = {
  client: 'sqlite3',
  connection: { filename: './db.sqlite3' },
  migrations: {
    stub: './src/database/migrations/migration.stub',
    directory: './src/database/migrations',
  },
  seeds: {
    stub: './src/database/seeds/seed.stub',
    directory: './src/database/seeds',
  },
  ...knexSnakeCaseMappers(),
  useNullAsDefault: true,
  debug: true,
};

export default config;
