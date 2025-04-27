# Copper Engineering Technical Assessment

This is my solution for an efficient and scalable system for storing and retrieving time series data.

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