// Required items to run the app
const fs= require('fs');
const inquirer= require ('inquirer');
const {Circle,Triangle,Square} = require('./lib/shapes.js');
const SVG= require('./lib/svg.js')

// Prompt section for users to generate their logo.
inquirer
    .prompt([
        {
            type: 'input',
            name: 'characters',
            message: 'Please enter up to 3 characters (letters or numbers).',
            validate: function(input){
                return input.length <= 3 ? true : 'Again, please enter up to 3 characters (letters or numbers).'
            },
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
            choices: ['circle', 'triangle', 'square'],
            
        },
        {
            type: 'input',
            name: 'addShapeColor',
            message: 'Choose your shape color',
            default: 'black'
        },
    ])
    // Promise chain
    .then (response => {
       let shape;
       if (response.addShape === 'circle') shape= new Circle()
       else if (response.addShape === 'triangle') shape= new Triangle()
        else shape= new Square()

        shape.setColor(response.addShapeColor)
        const svg= new SVG()
        svg.setText(response.characters, response.addTextColor)
        svg.setShape(shape)
        fs.writeFile(`dist/logo-${response.addShape}.svg`, svg.render(), err => {
            if (err) console.log(err)
            else console.log('logo created')
        })
    })
    .catch (err=> {
        console.error('Could not create logo.svg', err);
    });

