// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
{ type: 'input',
    name: 'title',
    message: 'What is the project title?'
    },
{ type:'input',
    name: 'description',
    message: 'Add a description of your project',
},
{type:'input',
    name: 'installation',
    message: 'What are the installation instructions?',
},
{type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
},
{type: 'input',
    name: 'contribution',
    message: 'Contribution guidelines?',
},
{type: 'input',
    name: 'test',
    message: 'Test instructions?',
},
{type:'list',
    name: 'license',
    message: 'Select a license',
    choices: ['MIT', 'Apache', 'GNU/GPL', 'BSD', 'Creative Commons']
}
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile( fileName, data, (err) => {
    if (err){
        console.error('Error', err);
    } else{
        console.log('Success!')
    }
})
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
        const READMEContent = generateMarkdown(answers);
        writeToFile('README.md', READMEContent);
    });
};

// Function call to initialize app
init();
