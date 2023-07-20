const express = require('express');
const Data = require('./data');
const cors = require('cors');

const api = express();

api.use(express.json());

api.use(cors());

api.use(express.json());

api.use(cors());

api.get('/api/data/:lang',(req, res) => {
  res.json(Data.getData(req.params.lang))
})

api.listen(9000, () => {
  console.log('listening on 9000')
})
