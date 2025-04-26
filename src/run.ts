const assert = require('node:assert').strict


import TTKV from './ttkv'

const ttkv = new TTKV()

const waitMs = async (ms:number) => {
    return new Promise(resolve => setTimeout(resolve,ms))
}

const putValues = async () => {
    await ttkv.put('AAPL', 201.56)
    await waitMs(1500)
    await ttkv.put('AMZN', 400.16)
    await waitMs(1500)
    await ttkv.put('AAPL', 203.56)
    await waitMs(1500)
    await ttkv.put('TSLA', 257.24)
    await waitMs(1500)
    await ttkv.put('KO', 59.56)
    await waitMs(2500)
    await ttkv.put('AAPL', 202.56)
    await waitMs(1500)
    await ttkv.put('TSLA', 300.56)
    await waitMs(1200)
    await ttkv.put('AAPL', 176.46)
    await waitMs(1500)
    await ttkv.put('KO', 95.31)
    await waitMs(1000)
    await ttkv.put('AMZN', 212.56)
    await waitMs(1500)
    await ttkv.put('TSLA', 56.86)
    await waitMs(1500)
}


const runTests = async () => {
    const priceValue1 = await ttkv.get('AAPL')
    assert.equal(priceValue1, 176.46)

    const priceValue2 = await ttkv.get('TSLA')
    assert.equal(priceValue2, 56.86)

    const priceValue3 = await ttkv.get('KO')
    assert.equal(priceValue3, 95.31)

    const priceValue4 = await ttkv.get('AMZN')
    assert.equal(priceValue4, 212.56)

    const priceValue5 = await ttkv.get('ABC')
    
    assert.equal(priceValue5, null)

    const priceValue6 = await ttkv.get('TSLA',new Date('2025-04-26T01:29:21.957+00:00'))
    assert.equal(priceValue6, 257.24)

    const priceValue7 = await ttkv.get('TSLA',new Date('2025-04-26T01:29:19.957+00:00'))
    assert.equal(priceValue7, null)

    const priceValue8 = await ttkv.get('AAPL',new Date('2025-04-26T01:29:20.447+00:00'))
    assert.equal(priceValue8, 203.56)

    const priceValue9 = await ttkv.get('AAPL',new Date('2025-04-26T01:29:18.447+00:00'))
    assert.equal(priceValue9, 201.56)



}

putValues().then(() => {
    runTests()
})


