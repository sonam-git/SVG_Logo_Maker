// Import packages needed for this application:file system module & Inquirer npm
const fs = require("fs");
const inquirer = require("inquirer");

// Imports the Circle, Square, and Triangle modules from /lib/shapes.js.
const { Circle, Square, Triangle } = require("./lib/shapes");

// Defines a Svg class that has a constructor with three methods for rendering and setting the text and shape elements in the SVG string.
class SvgLogo {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    // Return the svg containing shapeElement and textElement
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
  // The setTextElement set the text and color according to user input
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="50px" text-anchor="middle" font-family="monospace" fill="${color}">${text}</text>`;
  }
  // The setShapeElement set the shape according to user input either Triangle, Circle or Square.
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

// Create an array of questions for user Input
const questions = [
  // Question #1 : for text input
  {
    type: "input",
    name: "text",
    message: "Please enter up to (3) Characters you want to include in your logo:",
  },
  //Question #2 : color choice for text
  {
    type: "input",
    name: "text-color",
    message: "What color do you want the logo text to be?",
  },
  //Question #3 :  color choice for the shape
  {
    type: "input",
    name: "shape",
    message: "What color do you want the logo shape to be?",
  },
  //Question #4 :  choice for the shape
  {
    type: "list",
    name: "pixel-image",
    message: "What shpae do you want the logo to be?",
    choices: ["Circle", "Square", "Triangle"],
  },
];

// Function to write data to file
function writeToFile(fileName, data) {
  // console.log(`Writing: ${data} ${fileName} `);
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Congratulations, You have Successfully Generated a logo.svg\n");
  });
}

// function to generates svg logo based on user input and writing it to ta file
async function init() {
  console.log("\nPlease answer the question asked below to create a SVG logo.\n");
  var svgString = " ";
  var svgFile = "logo.svg";

  // Prompt the user for answers which returns a promise,
  //await will pause the execution of the function until the user has provided the necessary input via the command line
  // until a promise is resolved.
  const answers = await inquirer.prompt(questions);

  //User text
  var userText = "";
  // Checks if the user input / text length is between 1 - 3 characters
  if (answers.text.length > 0 && answers.text.length < 4) {
    // assign the input to the userText variable
    userText = answers.text;
  } else {
    //If the user input is not valid (0 or 4+ characters, invalid entry and loggs an error message as shown below & return
    console.log(
      "Invalid user text field detected! You are only allowed to add minimum 1 & maximum 3 characters."
    );
    return;
  }
  // Logs the user's input for text, font color, shape color, and shape type respectively
  console.log(`\nUser text: ${userText}`);
  userTextColor = answers["text-color"];
  console.log(`User font color: ${userTextColor}`);
  userShapeColor = answers.shape;
  console.log(`User shape color: ${userShapeColor} `);
  userShapeType = answers["pixel-image"];
  console.log(`User entered shape = ${userShapeType}\n`);

  //conditional statement for user shape input & creates new Squere, Circle, & Triangle based on user input
  let userShape;
  if (userShapeType === "Square" || userShapeType === "square") {
    userShape = new Square();
  } else if (userShapeType === "Circle" || userShapeType === "circle") {
    userShape = new Circle();
  } else if (userShapeType === "Triangle" || userShapeType === "triangle") {
    userShape = new Triangle();
  } else {
    console.log("Invalid shape!");
  }
  userShape.setColor(userShapeColor);

  // Create a new Svg instance and add the shape and text elements to it based on user input
  var svg = new SvgLogo();
  svg.setTextElement(userText, userTextColor);
  svg.setShapeElement(userShape);
  // render method to of svg logo obj which generates SVG string representing the logo
  svgString = svg.render();
// invoke writeToFile to render that user successfully created a logo
  writeToFile(svgFile, svgString);
}
// Invoke init()
init();
