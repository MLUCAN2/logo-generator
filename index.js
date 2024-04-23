const fs= require('fs');
const inquirer= require ('inquirer');
const { type } = require('os');
const shapes= [Circle, Triangle, Square, Pentagon,];

module.exports= shapes;

// Prompt section for users
inquirer
    .prompt([
        {
            type: 'input',
            name: 'characters',
            message: 'Please enter up to 3 characters (letters or numbers).',
            validate: function(input) {
                if (input.length <= 3){
                    return true;
                }
                else {
                    return 'Again, no more than 3 characters'
                }
            }
        },
        {
            type: 'input',
            name: 'addTextColor',
            message: 'Choose your text color',
            default: 'white'
        },
        {
            type: 'list',
            name: 'addShape',
            message: 'Choose your shape',
            choices: shapes
        },
        {
            type: 'input',
            name: 'addShapeColor',
            message: 'Choose your shape color',
            default: 'black'
        },
    ])

