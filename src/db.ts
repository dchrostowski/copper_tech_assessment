import {MongoClient} from 'mongodb'

const MONGO_USERNAME= 'stockbot'
const MONGO_PASSWORD= 'password'
const MONGO_HOSTNAME= 'localhost'
const MONGO_PORT= 4001
const MONGO_DB= 'stocks'

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}/${MONGO_DB}?authSource=admin`
const client = new MongoClient(url)


export async function connectClient() {
  try {
    await client.connect()
    return client
  } catch (err) {
    console.log(err)
    console.log("error connecting to database.  Retrying...")
    return await connectClient()
  }
}

export async function closeDBConnection(client:MongoClient) {
  await client.close()
}