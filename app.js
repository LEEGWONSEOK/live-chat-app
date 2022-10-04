const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'src')));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server is running ${PORT}`));