const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const instagramRoutes = require('./routes/instagramRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/instagram', instagramRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



















const day = "monday";


switch (day){
  case "monday":
    console.log("today is monday");
    break;
  case "tuesday":
    console.log("today is tuesday");
    break;
  case "wednesday":
    console.log("today is wednesday");
    break;
  case "thursday":  
  case "friday":
    console.log("today is thursday or friday");
    break;
  case "saturday":
  case "sunday":
    console.log("weekend is here");
    break;
  default:
    console.log("not a valid day");   
}




const age = 23;

age >= 18 ? "can drive" : "cannot drive";

console.log(`you ${age >= 18 ? "can drive" : "cannot drive"}`)



function fruitProcessor(apples, oranges){
  const juice = `juice with ${apples} apples and ${oranges} oranges: `;
  return juice;
}

fruitProcessor(5,0);


//function declaration

function calcAge(birthYear){
  return 2024 - birthYear;
}

calcAge(1991);


//function expression

const calcAge = function(birthYear){
  return 2024 - birthYear;
}
age = calcAge(1991);
