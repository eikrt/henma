import express from 'express';

const app = express();

const cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const port = 3001;
const db = require('./queries')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.listen(port, () => {
  console.log(`application is running on port ${port}.`);
});

app.get("/api/times/:calendarValue", (req, res, next) => {

  db.getTimesByCalendarValue(req,res)
 });
 app.get("/api/times", (req, res, next) => {

  db.getTimes(req,res)
 });
 
app.post('/api/times', (req,res) => {
  
  db.createTimes(req, res)
})