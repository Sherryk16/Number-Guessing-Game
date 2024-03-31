#! /usr/bin/env node
import inquirer from "inquirer"

// 1) Computer Will Generate a Random Number

// 2) User Input for Number Guessing

// 3)Compare user input with computer generated number and show result
const randomNumber=Math.floor(Math.random()*6+1);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type:"number",
        message:"Please Guess A Number between 1 to 6",
    },
]);

if(answers.userGuessedNumber===randomNumber){
    console.log("You Won!");
}else{
    console.log("You Lost!");
}
