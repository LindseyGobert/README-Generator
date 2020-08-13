function generateMarkdown(responses) {
    return ` 
# ${responses.title}

## Description

${responses.description}

## Table of Contents

-[Installation](#Installation)

-[Usage](#usage)

-[Guideline](#guidelines)

-[Test](#test)

-[License](#license)

-[Questions](#email)

## Installation

${responses.installation}

## Usage

${responses.usage}

## License

This project is licensed under ${responses.license}. ![License](https://img.shields.io/npm/l/inquirer)

## Contributing

${responses.guidelines}

## Test

${responses.test}

## Questions
For any questions, please email me at ${responses.email}. 
You can also check out more of my work on my github page. User name is ${responses.github}
`;
  }
  
  module.exports = generateMarkdown;