// src/index.ts
import express from 'express'
import { db } from './database'
import { sql } from 'kysely'
import * as PersonRepository from './PersonRepository'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express! Cocooooo')
})

app.get('/db', async (req, res) => {
  await db.schema
    .createTable('person')
    .addColumn('id', 'serial', (cb) => cb.primaryKey())
    .addColumn('first_name', 'varchar', (cb) => cb.notNull())
    .addColumn('last_name', 'varchar')
    .addColumn('gender', 'varchar(50)', (cb) => cb.notNull())
    .addColumn('created_at', 'timestamp', (cb) =>
      cb.notNull().defaultTo(sql`now()`)
    )
    .execute()

  res.send('Person table created')
})

app.post('/person/create', async (req, res) => {
  await PersonRepository.createPerson({
    first_name: 'Luca',
    last_name: 'Brasi',
    gender: 'man',
  })
  await PersonRepository.createPerson({
    first_name: 'Zenoli',
    last_name: '?',
    gender: 'man',
  })
  res.send('Person created')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

