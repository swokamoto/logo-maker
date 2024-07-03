const fs = require('fs');
const inquirer = require("inquirer");
const logoGenerator = require('./lib/shapes.js');

inquirer
        .prompt([
            {   type: 'input',
                name: 'logoText',
                message: 'Enter up to three characters of text.'
            },  
            {   type: 'input',
                name: 'textColor',
                message: 'Enter text color.'
            },
            {   type: 'list',
                name: 'shape',
                message: 'Choose a shape.',
                choices: ['circle', 'square', 'triangle']
            },
            {   type: 'input',
                name: 'shapeColor',
                message: 'Enter logo color.'
            }
        ])
        .then((answers) => {
            const logo = logoGenerator(answers);
            const logoString = logo.toString();
            fs.writeFile('logo.svg', logoString, (err) =>
            err ? console.error(err) : console.log('Generated logo.svg'));
});