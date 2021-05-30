const Pool = require('pg').Pool
const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'postgres_db',
    password: 'devauspassu',
    port: 5432
})
const getTimesByCalendarValue = (req, res) => {

    const id = parseInt(req.params.calendarValue)
    pool.query('SELECT * FROM times WHERE calendarValue = $1', [req.params.calendarValue], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    }) 
}
const createTimes = (req, res) => {
    
    let { calendarValue, times} = req.body
    calendarValue = JSON.stringify(calendarValue)
    times = JSON.stringify(times)
    pool.query('INSERT INTO times (calendarValue, times) VALUES ($1, $2)', [calendarValue, times], (error,results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Times added with ID: ${res.insertId}`)
    })
}

module.exports = {
    getTimesByCalendarValue,
    createTimes
}