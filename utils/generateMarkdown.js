
// TODO: Create a function to generate markdown for README
function generateMarkdown(data, license) {
  (data.license === 'Apache-2.0') ? license = [
     badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)", 
     link = "https://opensource.org/licenses/Apache-2.0"
      ]:
  (data.license === 'MIT') ? license = [
     badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)", 
     link = "https://opensource.org/licenses/MIT"
      ]:
  (data.license === 'GPLv3') ? license = [
     badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)", 
     link = "https://www.gnu.org/licenses/gpl-3.0."
      ]:
  license = '';

  return`
  # ${data.title}

  ${license[0]}

  ## Table of Contents
  * [Description](README.md#Description)
  * [Installation](README.md#Installation)
  * [Usage](README.md#Usage)
  * [Contributions](README.md#Contributions)
  * [License](README.md#License)
  * [Test](README.md#Test)
  * [Questions](README.md#Questions)

  ## Description
  ${data.description}


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## License
  Read more about the license here:
  ${license[1]}

  ## Test
  ${data.tests}

  ### Questions
  If you have any questions, feel free to contact me:
  
  GitHub: [Kelsey Sanderson GitHub](https://github.com/${data.github})
  
  Email:  [Kelsey Sanderson Email](mailto:${data.email})
  `
}

module.exports =  generateMarkdown
