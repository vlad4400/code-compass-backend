/* eslint-disable */
const fs = require('fs');

// Function to generate random input
function generateInput() {
  return {
    web: Math.round(Math.random()),
    mobile: Math.round(Math.random()),
    system: Math.round(Math.random()),
    small: Math.round(Math.random()),
    medium: Math.round(Math.random()),
    large: Math.round(Math.random()),
  };
}

// Function to generate random output
function generateOutput() {
  const languages = [
    'JavaScript',
    'Swift',
    'C',
    'TypeScript',
    'Kotlin',
    'Python',
    'Java',
    'Go',
  ];
  const randomLanguage =
    languages[Math.floor(Math.random() * languages.length)];
  return { [randomLanguage]: 1 };
}

// Generate training data
const trainingData = [];
for (let i = 0; i < 100; i++) {
  const input = generateInput();
  const output = generateOutput();
  trainingData.push({ input, output });
}

// Write training data to JSON file
const jsonData = JSON.stringify(trainingData, null, 2);
fs.writeFileSync('./src/mockup/training-data.json', jsonData);

console.log('Training data has been written to trainingData.json');
