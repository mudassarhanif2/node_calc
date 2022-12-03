// console.log("hello world")
// import inquirer from 'inquirer';
import chalkAnaimation from 'chalk-animation';
function sleep() {
    return new Promise(res => {
        setTimeout(res, 2000);
    });
}
async function welcome() {
    chalkAnaimation.neon('Lets start calculation');
    await sleep();
    console.log('yes');
}
welcome();
