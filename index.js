import inquirer from 'inquirer'
import generateHTML from './generateHTML.js'

console.log(generateHTML)

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What's your location?",
        name: "location",
    },
    {
        type: "input",
        message: "Tell me about yourself",
        name: "bio",
    },
    {
        type: "input",
        message: "What's your LinkedIn URL?",
        name: "linkedinURL",
    },
    {
        type: "input",
        message: "What's your Github URL?",
        name: "githubURL",
    }
])
    .then(answers => {
        console.log(answers)

        //generate HTML string
        generateHTML(answers)
        // write (save) the file
    })
    .catch(error => console.log(error))