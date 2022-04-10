function generateMockup(templateData) {
  return `# ${templateData.title}
  ## Badges
  

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## License
  
  ## Description
  ${templateData.description}

  ## Installation
  ${templateData.install}

  ## Usage
  ${templateData.usage}

  ## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${templateData.contributing}

  ## Tests
  ${templateData.testing}

  ## Questions?
  ### Reach me here: 
  [${templateData.username}](https://github.com/${templateData.username})  
  ${templateData.email}`;
}

module.exports = generateMockup;
