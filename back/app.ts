import express from 'express';

const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3001;
app.use(cors())
app.use(bodyParser.json())
app.listen(port, () => {
  console.log(`application is running on port ${port}.`);
});

app.get("/api/times", (req, res, next) => {

  res.json([{time:'8-9', taken:false, index:1}, {time:'9-10', taken:false, index:2},{time:'10-11', taken:false, index:3},{time:'11-12', taken:false, index:4},{time:'12-13', taken:false, index:5},{time:'13-14', taken:false, index:6}, {time:'14-15', taken:false, index:7}, {time:'15-16', taken:false, index:8}]);
 });

app.post("/api/times/post", (req,res,next) => {
  console.log(req.body)
})