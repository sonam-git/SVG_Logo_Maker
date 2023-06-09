# SVG LOGO MAKER

 [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  
## Description:
The application enables users to enter inputs into a inquirer prompt in order to generate a logo "logo.svg" file which contains the users desired results as an SVG image.

## Table of Contents:
- [Overview](#overview)
- [The Challenge](#the-challenge)
- [Usage Information](#usage-instructions)
- [Installation Process](#installation-process)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Solution URL](#solution-url)
- [Demo Walkthrough Video](#demo-walkthrough-video)
- [Screenshots](#screenshots)
- [License](#license)
- [Author](#author)

# Overview

## The Challenge:
Build a Node.js command-line application that takes in user inputs to generates a SVG logo and saves it as "logo.svg" file. In addition, create a walkthrough video that demonstrates its functionality and the passing of all of the tests.


## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Usage Instructions
1. Open the cloned repository in any source code editor e.g. Visual Studio Code.
2. Open integrated terminal on index.js
3. Enter “node index.js” in the command line
4. Through sequential order within the command line interface - the user will be presented with npm inquirer questions - the user will provide a response to each question and proceed.
5. Once completed a SVG file named "logo.svg" will be created.
6. At your discretion, you may rename the "logo.svg" file to the file name of your choice.
7. The error message will be showing a the end if the user don't follow the instruction while answering their question
   (for eg. enter none or more than three characters, invalid color code or name)

## Installation Process
1. Clone the repository: [SVG_Logo_Maker](https://github.com/sonam-git/SVG_Logo_Maker)
2. Install the following: 
- Node.JS [Version 16.18.1](https://nodejs.org/en/blog/release/v18.15.0/)
- Jest [Version 29.5.0](https://www.npmjs.com/package/jest)
- Inquirer.js: [Version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)
3. Open the cloned repository in any source code editor.
4. Open the integrated terminal for the document and complete the respective installation guides provided above in section (2.) to ensure the cloned documentation will operate.

## Built With
- Dynamic JavaScript
- Node.js [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Jest [Version 29.5.0](https://www.npmjs.com/package/jest)
- Inquirer.js: [Version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned
- Create an non-deployed application that invokes a “node index.js” in the command line to generate a logo and save it as a SVG file.
- Learned the JavaScript testing framework "Jest".
- Implementation of class constructor & inheritance in JavaScript.
- About SVG 

## Continued Development:
1. Contniue creating SVG files to practice
2. Add more user prompts to create more possibilities among a rendered SVG image with better UI/UX.


## Solution URL:
[Solution URL Link:](https://github.com/sonam-git/SVG_Logo_Maker)

## Demo Walkthrough Video:
[Click here to watch the Demo](https://drive.google.com/file/d/1EURKU_cjDrCwdK1dB9SSe2CVQ0KTIKPe/view)

## Screenshots:
### Figure 1. Command line application
![](https://user-images.githubusercontent.com/89502092/232384639-32b10190-1fe2-46a9-ad4b-23993c8b0237.png) 
### Figure 2. Jest Testing "npm test"
![](https://user-images.githubusercontent.com/89502092/232384450-bef7021b-40b5-4aa8-81df-6760dd8a46e1.png)
### Figure 3. Generated "logo.svg" file
![](https://user-images.githubusercontent.com/89502092/232385651-639f900f-4bfe-4995-b682-a15f84f06a2b.png)

## License
This project is covered under the [MIT](https://opensource.org/licenses/MIT) license.

## Author

Follow me on Github at [Sonam J Sherpa](https://github.com/sonam-git).
Additional questions or concerns? feel free to contact me at sherpa.sjs@gmail.com
