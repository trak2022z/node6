//Exercise 1: More practice with Node, /jokebook API
/**
 * section 14 exercise code
 */
'use strict';

const express = require('express');
const app = express();

let categories = ['funnyJoke', 'lameJoke'];
let funnyJoke = [
  {
    'joke': 'Why did the student eat his homework?',
    'response': 'Because the teacher told him it was a piece of cake!'
  },
  {
    'joke': 'What kind of tree fits in your hand?',
    'response': 'A palm tree'
  },
  {
    'joke': 'What is worse than raining cats and dogs?',
    'response': 'Hailing taxis'
  }
];
let lameJoke = [
  {
    'joke': 'Which bear is the most condescending?',
    'response': 'Pan-DUH'
  },
  {
    'joke': 'What would the Terminator be called in his retirement?',
    'response': 'The Exterminator'
  }
];

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
