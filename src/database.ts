import { Database } from './types' // this is the Database interface we defined earlier
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'postgres',
    host: 'localhost',
    user: 'postgres',
    password: 'example',
    port: 5432,
    max: 10,
  }),
})

// database: process.env.DB_NAME,
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       port: 5432,
//       max: 10,
//       password:process.env.DB_PASS

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
})
