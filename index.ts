#! /usr/bin/env node

import inquirer from 'inquirer';
import chalkAnaimation from 'chalk-animation';
import chalk from 'chalk';

function sleep () {
    return new Promise(res=>{
        setTimeout(res, 2000)
    })
}

async function welcome () {
    let start  = chalkAnaimation.karaoke('....Lets start calculation....');
    await sleep()
    start.stop()
    console.log(`     
     _____________________
    |  _________________  |
    | |   ${chalk.red('Developed by')}  | |
    |    ${chalk.bgCyan('Mudassar Hanif')}   |
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

};



async function askQuestion(){

    await welcome();

    let answer = await inquirer.prompt([
        {
            type: 'list',
            message: "Which operation you want to perform?\n",
            name: 'operator',
            choices:['Addition', 'Subtraction','Multiplication','Division'],
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
                message: chalk.red('would you like to calculate again?\nPress y for "yes" otherwise press any key')
            }
        ])
        
    } while ((yesNo.again.toLowerCase() == 'y' || yesNo.again.toLowerCase() == 'yes' ))
}
repeatAgain();
// let a = 'df';
// a.toLowerCase