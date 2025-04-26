import { connectClient, closeDBConnection } from './db'

class TTKV {

    constructor() {

    }

    async put(key: string, value: number): Promise<void> {
        const client = await connectClient()
        const now = new Date()
        const db = client.db('stocks')
        const collection = db.collection('stockquotes')

        const stockQuote = {
            date: now,
            ticker: key,
            price: value
        }

        await collection.insertOne(stockQuote)
        console.log(`inserted price ${value} for ticker symbol ${key} at ${now}`)

        await closeDBConnection(client)

    }

    async get(key: string, timestamp?: number | Date): Promise<number|null> {

        let lteParameter = new Date()

        if (typeof timestamp === 'number') {
            lteParameter = new Date(timestamp * 1000)
        }

        else if (timestamp instanceof Date) {
            lteParameter = timestamp
        }

        const client = await connectClient()
        const db = client.db('stocks')
        const collection = db.collection('stockquotes')



        const result = await collection.findOne({
            ticker: key,
            date: {
                $lte: lteParameter
            }
        },
            { sort: { date: -1 } }
        )
        await closeDBConnection(client)

        if(result !== null) {
            return result?.price
        }

        return null
    }
}

export default TTKV