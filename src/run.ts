const assert = require('node:assert').strict
import * as fs from 'fs';

import TTKV from './ttkv'

const ttkv = new TTKV()

const setupDatabase = async () => {
    await ttkv.deleteCollection()
    await ttkv.initCollection()
}

const waitMs = async (ms:number) => {
    return new Promise(resolve => setTimeout(resolve,ms))
}

const insertData = async () => {
    const sampleData = JSON.parse(fs.readFileSync('./test_data.json','utf-8'))
    for(let i=0; i<sampleData.length; i++) {
        await ttkv.put(sampleData[i].ticker, sampleData[i].price)
        await waitMs(sampleData[i].sleep)
    }
}

// tests the get method is working properly
const testGet = async () => {
    const data = await ttkv.getSortedData()
    const recordedDates = data.map(record => record.date)

    // test the latest AAPL price
    const latestAAPL = await ttkv.get('AAPL')
    assert.equal(latestAAPL, 200.12)

    // test the latest TSLA price
    const latestTSLA = await ttkv.get('TSLA')
    assert.equal(latestTSLA, 56.86)

    // test the latest AMZN price
    const latestAMZN = await ttkv.get('AMZN')
    assert.equal(latestAMZN, 211.74)

    // test the latest K0 price
    const latestKO = await ttkv.get('KO')
    assert.equal(latestKO, 95.31)

    // ttkv.get should return null since ABC was not in the test data
    const latestABC = await ttkv.get('ABC')
    assert.equal(latestABC,null)

    // Test at t=0
    const AAPLt0 = await ttkv.get('AAPL', recordedDates[0])
    const TSLAt0 = await ttkv.get('TSLA', recordedDates[0])
    const AMZNt0 = await ttkv.get('AMZN', recordedDates[0])
    const KOt0 = await ttkv.get('KO', recordedDates[0])
    const ABCt0 = await ttkv.get('ABC', recordedDates[0])
    assert.equal(AAPLt0,201.56)
    assert.equal(TSLAt0,null)
    assert.equal(AMZNt0,null)
    assert.equal(KOt0,null)
    assert.equal(ABCt0,null)

    // Test at t=3
    const AAPLt3 = await ttkv.get('AAPL', recordedDates[3])
    const TSLAt3 = await ttkv.get('TSLA', recordedDates[3])
    const AMZNt3 = await ttkv.get('AMZN', recordedDates[3])
    const KOt3 = await ttkv.get('KO', recordedDates[3])
    const ABCt3 = await ttkv.get('ABC', recordedDates[3])
    assert.equal(AAPLt3,203.56)
    assert.equal(TSLAt3,257.24)
    assert.equal(AMZNt3,400.16)
    assert.equal(KOt3,null)
    assert.equal(ABCt3,null)


    // Test at t=6
    const AAPLt6 = await ttkv.get('AAPL', recordedDates[6])
    const TSLAt6 = await ttkv.get('TSLA', recordedDates[6])
    const AMZNt6 = await ttkv.get('AMZN', recordedDates[6])
    const KOt6 = await ttkv.get('KO', recordedDates[6])
    const ABCt6 = await ttkv.get('ABC', recordedDates[6])
    assert.equal(AAPLt6,202.46)
    assert.equal(TSLAt6,300.81)
    assert.equal(AMZNt6,400.16)
    assert.equal(KOt6,59.56)
    assert.equal(ABCt6,null)


    // Take one second off each date
    // Test at t=0
    const t0_modified = new Date(recordedDates[0] - 1000)
    
    const AAPLt0a = await ttkv.get('AAPL', t0_modified)
    const TSLAt0a = await ttkv.get('TSLA', t0_modified)
    const AMZNt0a = await ttkv.get('AMZN', t0_modified)
    const KOt0a = await ttkv.get('KO', t0_modified)
    const ABCt0a = await ttkv.get('ABC', t0_modified)
    assert.equal(AAPLt0a,null)
    assert.equal(TSLAt0a,null)
    assert.equal(AMZNt0a,null)
    assert.equal(KOt0a,null)
    assert.equal(ABCt0a,null)

    // Test at t=3
    const t3_modified = new Date(recordedDates[3] - 1000)
    
    const AAPLt3a = await ttkv.get('AAPL', t3_modified)
    const TSLAt3a = await ttkv.get('TSLA', t3_modified)
    const AMZNt3a = await ttkv.get('AMZN', t3_modified)
    const KOt3a = await ttkv.get('KO', t3_modified)
    const ABCt3a = await ttkv.get('ABC', t3_modified)
    assert.equal(AAPLt3a,203.56)
    assert.equal(TSLAt3a,null)
    assert.equal(AMZNt3a,400.16)
    assert.equal(KOt3a,null)
    assert.equal(ABCt3a,null)

    console.log("All tests pass")
}

const runTests = async () => {
    await setupDatabase()
    await insertData()
    await testGet()

}

runTests()
