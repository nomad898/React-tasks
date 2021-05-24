import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import express from 'express';
import { paths } from '../configs/paths';
import ReactDOMServer from 'react-dom/server';

const app = express();

app.use('/static', express.static(paths.public));

app.get("/", (req, res) => {
    const name = "Marvelous Wololo";    

    const html = `
  <!doctype html>
    <html>
    <head>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
    </head>
    <body>
    <div id="root">${name}</div>
    <script src="/static/main.js"></script>
  </body>
  </html>`;

    res.send(html);
});

app.listen(3000);