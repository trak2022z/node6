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

//https://node6.tomkrok1.repl.co/jokebook/categories
app.get('/jokebook/categories', function (req, res) {
  res.type('text');
  res.send(getCategories());
});

//https://node6.tomkrok1.repl.co/jokebook/joke/cat
//https://node6.tomkrok1.repl.co/jokebook/joke/funnyJoke
app.get('/jokebook/joke/:category', function (req, res) {
  if(req.params['category'] === 'funnyJoke' || req.params['category'] === 'lameJoke') {
    res.json(getJokes(req.params['category']));
  } else {
    res.status(400).json({'error': 'no category listed for ' + req.params['category']});
  }
});

function getCategories() {
  let result = '';
  for (let i = 0; i < categories.length; i++) {
    result+= 'A possible category is ' +  categories[i] + '\n';
  }
  return result;
}

function getJokes(category) {
  let number = 0;
  if (category === 'funnyJoke') {
    number = funnyJoke.length;
    return funnyJoke[Math.floor(Math.random() * number)];
  } else {
    number = lameJoke.length;
    return lameJoke[Math.floor(Math.random() * number)];
  }
}

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
