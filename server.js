const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const jwt = require('jsonwebtoken');
global.mykey = 8888;
global.users = [];

const Router = require('./Router/router');
app.use(cors());
app.use(express.json());
app.use(Router);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
