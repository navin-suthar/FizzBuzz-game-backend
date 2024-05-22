const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// FizzBuzz logic function
function fizzBuzz(value) {
  let result = '';
  let divisions = [];

  if (typeof value !== 'number' || isNaN(value) || value === '' || value === null) {
    result = 'Invalid item';
  } else {
    if (value % 3 !== 0 && value % 5 !== 0) {
      divisions.push(`Divided ${value} by 3`);
      divisions.push(`Divided ${value} by 5`);
    }

    if (value % 3 === 0 && value % 5 === 0) {
      result = 'FizzBuzz';
    } else if (value % 3 === 0) {
      result = 'Fizz';
    } else if (value % 5 === 0) {
      result = 'Buzz';
    }
  }

  return { result, divisions };
}

// API endpoint
app.post('/fizzbuzz', (req, res) => {
  const { values } = req.body;
  const output = [];

  if (!Array.isArray(values)) {
    return res.status(400).json({ error: 'Input must be an array' });
  }

  values.forEach(value => {
    const { result, divisions } = fizzBuzz(value);
    output.push({ value, result, divisions });
  });

  res.json(output);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});