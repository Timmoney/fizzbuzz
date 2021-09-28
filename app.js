const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('index page')
})

//fizzbuzz api route
app.get('/api/fizzbuzz/:id', (req, res) => {
    const result = fizzBuzz(req.params.id);
    res.send(result);
})

function fizzBuzz(input) {
    //check if input is number or not
    if (!isNumeric(input))
        return 'Please enter a number...';
    
    //check if input is double or integer
    const num = parseFloat(input);
    if (!isInteger(num))
        return 'Please enter a integer...';
    
    //other condition
    if ( num%3 === 0 && num%5 === 0)
        return 'fizzbuzz';
    if ( num%3 === 0)
        return 'fizz';
    if ( num%5 === 0)
        return 'buzz';

    return input;
}

//check if string is a number
function isNumeric(input) {
    return !isNaN(input);
}

//check if number is integer
function isInteger(input) {
    return Number.isInteger(input);
}

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Connecting to...${port}`);
})