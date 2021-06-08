import { response } from "express"

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'postgres_db',
    password: 'devauspassu',
    port: 5432
})
const getTimesByCalendarValue = (req, res) => {
    console.log(JSON.stringify(req.params.calendarValue))
    pool.query('SELECT * FROM times WHERE calendarValue = $1', [JSON.stringify(req.params.calendarValue)], (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
        res.send(results.rows)
    }) 
    
}
const getTimes = (req, res) => {

    pool.query('SELECT * FROM times', (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
        res.send(results.rows)
    })
}
const createTimes = (req, res) => {
    
    const values = {calendarValue: JSON.stringify(req.body.calendarValue), times : JSON.stringify(req.body.times)}
    
    console.log("times: ", req.body.times)
    pool.query('INSERT INTO times (calendarValue, times1) VALUES ($1, $2)', [values.calendarValue, values.times], (error,results) => {
        if (error) {
            console.log(error)
            throw error
        }
        res.status(201).send(`Times with key ${values.calendarValue}`)
    })
}

module.exports = {
    getTimesByCalendarValue,
    createTimes,
    getTimes
}