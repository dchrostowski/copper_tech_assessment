# Copper Engineering Technical Assessment

This is my solution for an efficient and scalable system for storing and retrieving time series data.  It utilizes [MongoDB's Time Series Collection](https://www.mongodb.com/docs/manual/core/timeseries-collections/) to optimize for effeciency.

## Requirements
- docker
- docker-compose
- node version v18.15.0

## Running
1. `git clone https://github.com/dchrostowski/copper_tech_assessment.git`
2. `cd copper_tech_assessment/mongodb-docker`
3. `docker-compose up --build -d`
4. `cd ../src`
5. `npm install`
6. `npx tsc run.ts`
7. `node run.js`

## Scaling

For scaling this solution, refer to Mongo DB's documentation on [sharding time series collections](https://www.mongodb.com/docs/manual/core/timeseries/timeseries-shard-collection/)