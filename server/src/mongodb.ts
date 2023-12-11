// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
import { MongoClient } from 'mongodb'
import type { Db } from 'mongodb'
import type { Application } from './declarations'
import { __prod__ } from './constants'

declare module './declarations' {
  interface Configuration {
    mongodbClient: Promise<Db>
  }
}

export const mongodb = (app: Application) => {
  let connection = app.get('mongodb')

  if(!connection) {
    throw new Error('Connection string not set in /config/<node_env_mode>.json')
  }

  console.log(__prod__)

  if (__prod__){
    if(!process.env.MONGO_SERVER_NAME) throw new Error('Required Environment variable for mongoDB server name not set, MONGO_SERVER_NAME')
    if(!process.env.MONGO_SERVER_PASSWORD) throw new Error('Required Environment variable for mongoDB server name not set, MONGO_SERVER_PASSWORD')
    connection = connection?.replace('%s', process.env.MONGO_SERVER_NAME).replace('%s', process.env.MONGO_SERVER_PASSWORD)
  }
  console.log('connection', connection)
  console.log('app.get', app.get('mongodb'))
  const database = new URL(connection).pathname.substring(1)
  const mongoClient = MongoClient.connect(connection).then((client) => client.db(database))

  app.set('mongodbClient', mongoClient)
}
