'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/api/v1/health', (req, res) => {
  res.json({
    data: 'ok',
  });
});

app.get('/api/v1/ping', (req, res) => {
  const delay = Math.trunc(
    Math.random()
    * Math.floor(process.env.DELAY_INT_MAX || 1)
    * 1000
  );
  setTimeout(() => {
    res.json({
      data: 'pong',
      delay,
    });
  }, delay)
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
