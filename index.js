import 'babel-polyfill';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import renderer from './helper/server-render';

const app = express();

app.use(express.static('public'))
app.get('*', (req, res) => {
  
  const context = {}
  const content = renderer(req, context)
  res.send(content)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
})