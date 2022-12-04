#! /usr/bin/env node

import inquirer from 'inquirer';
import chalkAnaimation from 'chalk-animation';
import { type } from 'os';

function sleep () {
    return new Promise(res=>{
        setTimeout(res, 2000)
    })
}

async function welcome () {
    chalkAnaimation.karaoke('Lets start calculation');
    await sleep()
    console.log(`     
     _____________________
    |  _________________  |
    | |   Developed by  | |
    |    Mudassar Hanif   |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `);
    // chalkAnaimation.neon('              Developed By Mudassar Hanif')
    // await sleep();
};



async function askQuestion(){

    await welcome();

    let answer = await inquirer.prompt([
        {
            type: 'list',
            message: "Which operation you want to perform?\n",
            name: 'operator',
            choices:['Addition', 'Subtraction','Multiplication','Division'],
            // validate: (ans)=> typeof ans == 'number'? null:'enter a number'
        },
        {
            type : 'number',
            message: "enter the first number: ",
            name: 'no1',
        },
        {
            type : 'number',
            message: "enter the second number: ",
            name: 'no2',
        }
    ])
    
        switch(answer.operator){
            case 'Addition':
                answer = answer.no1 + answer.no2
                break;
            case 'Subtraction':
                answer = answer.no1 - answer.no2
                break;
            case 'Multiplication':
                answer = answer.no1 * answer.no2
                break;
            case "Division":
                answer = answer.no1 / answer.no2
                break;
        }
        console.log(`The answer is:  ${answer}`)
}

async function repeatAgain(){

    
    do {
        await askQuestion()  
        var yesNo = await inquirer.prompt([
            {
                type : "input",
                name: 'again',
                message: 'would you like to calculate again? y or n \n'
            }
        ])
        
    } while (yesNo.again == 'y' || yesNo.again == 'Y' );
}
repeatAgain();