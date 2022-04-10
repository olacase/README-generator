function generateMockup(templateData) {
  return `# ${templateData.title}
  ## Badges
  

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tools](#tools)
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

  ## Tools
  ${templateData.tools}

  ## How to Contribute
  
  ${templateData.contribute}

  ## Tests
  ${templateData.tests}

  ## Questions?
  ### Reach me here: 
  [${templateData.username}](https://github.com/${templateData.username})  
  ${templateData.email}`;
}

module.exports = generateMockup;
