function generateMarkdown(answers, response) {
  return `# ${answers.title}
  ![GitHub repo size](https://img.shields.io/github/repo-size/${answers.username}/${answers.repoName}?style=for-the-badge) ![GitHub code size](https://img.shields.io/github/languages/code-size/${answers.username}/${answers.repoName}?color=gold&style=for-the-badge) ![GitHub language count](https://img.shields.io/github/languages/count/${answers.username}/${answers.repoName}?color=green&style=for-the-badge) ![GitHub top language](https://img.shields.io/github/languages/top/${answers.username}/${answers.repoName}?color=red&style=for-the-badge)
---
## Description:
${answers.description}
---
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)
---
## Installation:
${answers.installation}
---
## Usage:
${answer.usage}
---
## License:
---
## Contributing:
---
Copyright © ${answers.year} ${answers.owner}
## Questions: 
for any questions, please contact:/
![${answers.username}](${response.data.avatar_url}) 
[${answers.username}](https://github.com/${answers.username}) at ${response.data.email}
`;}

module.exports = generateMarkdown;