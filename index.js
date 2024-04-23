// Required items to run the app
const fs= require('fs');
const inquirer= require ('inquirer');
const shapes= require('./shapes.js');


console.log(Object.keys(shapes));
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
            choices: Object.keys(shapes)
            
        },
        {
            type: 'input',
            name: 'addShapeColor',
            message: 'Choose your shape color',
            default: 'black'
        },
    ])

    // Chain the promises
    .then (response => {
        return addSVG(response);
    })
    .then (() => {
        console.log('Created logo.svg')
    })
    .catch (err=> {
        console.error('Could not create logo.svg', err);
    });

// Generate SVG file
function addSVG(data){
    return new Promise((resolve, reject) => {
        const selectShape= shapes[data.addShape];
        const svgShapes= 
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <text x=50% y=50% fill="${data.addTextColor}"/>${data.characters}</text>
            <${selectShape.type} fill="${data.addShapeColor}" ${selectShape.attributes}></ ${selectShape.type}>
            </svg>`;

        console.log('Creating SVG file', data);
        resolve();

   

        // Write the file
        fs.writeFile('logo.svg', svgShapes, (err) => {
            if (err) {
                console.error('Could not create file', err);
                reject(err);
            }
            else {
                console.log('Success!');
                resolve();
            }
        });
    });    

};
