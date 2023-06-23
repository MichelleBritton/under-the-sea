# Portfolio Project 2 - Under the Sea Memory Game

The Under the Sea Memory Game is an interactive game for two players. The purpose of the game is to beat your opponent by matching the most pairs of cards. The game is targeted towards young children, as it is simple to follow and encourages them to use their memory to win, although can be enjoyed by people of any age! 

It has been built using HTML, CSS and JavaScript and is responsively designed allowing users to play it on a range of devices.

![Screenshot of website on multiple devices](documentation/screenshots/screenshot.png)

[View Under the Sea on GitHub Pages](https://michellebritton.github.io/under-the-sea/)

![GitHub last commit](https://img.shields.io/github/last-commit/michellebritton/under-the-sea?style=for-the-badge)![GitHub contributors](https://img.shields.io/github/contributors/michellebritton/under-the-sea?style=for-the-badge)![GitLab language count](https://img.shields.io/gitlab/languages/count/michellebritton/under-the-sea?style=for-the-badge)![GitHub top language](https://img.shields.io/github/languages/top/michellebritton/under-the-sea?style=for-the-badge)![W3C Validation](https://img.shields.io/w3c-validation/html?style=for-the-badge&targetUrl=https%3A%2F%2Fmichellebritton.github.io%2Funder-the-sea%2Findex.html)

## CONTENTS

- [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
- [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Wireframes](#wireframes)
    - [Accessibility](#accessibility)
- [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Programs Used](#programs-used)
- [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Solved Bugs](#solved-bugs)
    - [Unfixed Bugs](#unfixed-bugs)
    - [Lighthouse](#lighthouse)
    - [Full Testing](#full-testing)
- [Deployment](#deployment) 
- [Credits](#credits)
    - [Code Used](#code-used)
    - [Content](#content) 
- [Acknowledgments](#acknowledgements)

## Features
### Existing Features
#### Heading
The heading is located centrally at the top of the page using a large font with a text shadow so that it stands out from the background image enabling the user to see the name of the game easily.

![Screenshot of the heading](documentation/screenshots/screenshot-heading.png)

#### Welcome Panel 
The welcome panel is the initial screen that you see when you visit the site. It contains information explaining the aim of the game, how to play the game and how to get started. To start playing the game, it requires the two players to enter their names into the input boxes and click on the "Start" button. If they do not complete both boxes, an alert will appear asking them to fill in both fields. Once the button is clicked, the welcome panel will fade out and the grid of cards will appear.

![Screenshot of the welcome panel](documentation/screenshots/screenshot-welcome.png)

#### The Game Area
There is a grid of 20 cards. Initially, only the back of the cards are shown. When the user clicks on a card it will flip over to reveal an image. The user must click on two cards at a time to see if they match. If they don't match, the cards will flip back over to their original state. If they do match, a pop up will appear telling them that they have a match.

![Screenshot of the grid](documentation/screenshots/screenshot-grid.png)

#### Player's Turn Board
The panel in the top left hand corner indicates whose turn it currently is. This will automatically change when either the cards are returned to their original state or after the pop up has disappeared.

![Screenshot of the player's board](documentation/screenshots/screenshot-players.png)

#### Score Board
The Score Board is located in the top right hand corner. It displays both of the player's names and indicates their current score, which is updated when a user has finished their turn.

![Screenshot of the score board](documentation/screenshots/screenshot-score.png)

#### Pop Ups
Pop up windows appear when a user successfully matches two cards and also at the end of the game, to indicate who the winner is or to declare the game a draw. 

![Screenshot of the pop ups](documentation/screenshots/screenshot-popups.png)

#### New Game
Underneath the grid is a button, which if clicked on, will reset the grid, score board and player board so that the players can start a fresh game.

![Screenshot of the new game button](documentation/screenshots/screenshot-new.png)

### Features Left to Implement
- In the event of a draw, you could present the users with tie break muiltiple choice questions based on a marine theme, such as "What type of fish was Nemo?"
- Add some music/sound effects

## Design

### Colour Scheme

I chose the theme as I thought the bright colours would be attractive to young children, and if they have seen the film "Finding Nemo" they may find it a little more interesting. The colours used throughout the site were chosen as they match the colours contained within the background image.

### Typography

The fonts used were imported from Google Fonts. The main font used throughout the site is Atma, whilst Raleway has been used for the paragraphs contained within the Welcome Panel

### Imagery

Images used throughout the site were purchased from [iStock](https://www.istockphoto.com/).

### Wireframes

A wireframe was created using the [Figma website](https://www.figma.com/).

[Under the Sea wireframe](https://www.figma.com/proto/RlWv7VijrgxyrQ0Vkw2zgw/Under-the-Sea?type=design&node-id=19-84&scaling=min-zoom&page-id=14%3A2&starting-point-node-id=19%3A84)

### Accessibility 

To ensure that the website is as accessible as possible, I have: 

- Used semantic HTML to structure and organise content
- Provided alt attributes for all images 
- Ensured that there is a good colour contrast throughout the site whilst maintaining the integrity of the design 

## Technologies Used 
### Languages Used 
This website was built with HTML, CSS and JavaScript.

### Programs Used

- [Figma](https://www.figma.com/) - for creating wireframes
- [Git](https://git-scm.com/) - a version control system for tracking changes
- [GitHub](https://github.com/) - a code hosting platform for version control
- [Gitpod](https://www.gitpod.io/) - a cloud development environment
- [GitHub Pages](https://pages.github.com/) - for deployment of website
- [Google Fonts](https://fonts.google.com/) - catalogue of open source fonts
- [TinyPNG](https://tinypng.com/) - to compress images
- [Am I Responsive?](https://ui.dev/amiresponsive) - to generate a screenshot of the website on multiple devices
- [Shields](https://shields.io/) - to generate badges for inclusion in the README field
- [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) - for testing and debugging the website
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - for accessibility and performance reporting
- [The W3C Markup Validation Service](https://validator.w3.org/) - for validating HTML 
- [Jigsaw](https://jigsaw.w3.org/css-validator/) - for validating CSS
- [JSHint](https://jshint.com/) - for validating JavaScript
- [Browserstack](https://www.browserstack.com/) - for cross browser testing
- [Birme](https://www.birme.net/?no_resize=true&image_format=webp) - Convert images to WebP format

## Testing
Chrome Developer Tools were used throughout the course of development, the console was particularly useful when debugging the code.

### Validator Testing
[W3C HTML Validation](https://github.com/MichelleBritton/under-the-sea/blob/main/TESTING.md/##w3c-validator)

[Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmichellebritton.github.io%2Funder-the-sea%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

No errors were found when passing through the official Jigsaw validator.
![Screenshot of the CSS validation](documentation/screenshots/screenshot-css-valid.png)

JavaScript

No errors were found when passing through the official Jshint validator.

The following metrics were returned: 
- There are 26 functions in this file.
- Function with the largest signature take 1 arguments, while the median is 0.
- Largest function has 16 statements in it, while the median is 3.
- The most complex function has a cyclomatic complexity value of 5 while the median is 1.

### Solved Bugs
I asked four other people to test the game fully but none found any issues, other than one person's suggestion that I add music and/or sound effects.  However, I found the following issues during testing:

- If you click on the same card twice, it alerts you that there is a match. 

- After clicking on two cards, it is possible to carry on clicking on other cards. 

### Unfixed Bugs
No unfixed bugs.

### Lighthouse
In order to test performance, accessibility, best practices and SEO, I used Lighthouse within the Chrome Developer Tools. 

- Initial and final testing for Desktop
![Screenshot of the Lighthouse Desktop](documentation/screenshots/screenshot-lighthouse-d.png)

- Initial and final testing for Mobile
![Screenshot of the Lighthouse Mobile](documentation/screenshots/screenshot-lighthouse-m.png)

- Suggestions:
Serve images in next-gen formats such as WebP and AVIF which means faster downloads and less data consumption. I have converted images to WebP format using Birme.

### Full Testing

I used BrowserStack to fully test the website using a number of browsers, operating systems and devices. Full testing was performed on the following:

- iPhone 13 - Safari and Chrome
- iPhone 14 - Safari and Chrome
- iPHone 14 Pro - Safari and Chrome
- iPhone 14 Plus - Safari and Chrome
- iPhone 12 Mini - Safari and Chrome
- iPhone 8 - Safari and Chrome
- iPad 10th Gen - Safari and Chrome
- iPad Pro 12.9.2020 - Safari and Chrome
- iPad Mini 2019 - Safari and Chrome
- iPad Air 5 - Safari and Chrome
- iPad 5th Gen - Safari and Chrome
- Samsung Galaxy S22 - Chrome and Firefox
- Samsung Galaxy S23 Ultra - Chrome and Firefox
- Samsung Galaxy 8 - Chrome and Firefox
- Samsung Galaxy Note 20 - Chrome and Firefox
- Samsung Galaxy Note 9 - Chrome and Firefox
- Windows 11 - Edge 112
- Windows 11 - Edge 109
- Windows 11 - Firefox 112
- Windows 11 - Chrome 112
- Windows 11 - Opera 98
- Windows 10 - Edge 112
- Windows 10 - IE 11
- Windows 10 - Firefox 112
- Windows 10 - Chrome 112
- Windows 10 - Opera 98
- Windows 7 - Edge 109
- Windows 7 - IE 11
- Windows 7 - Firefox 112
- Windows 7 - Chrome 109
- Windows 7 - Opera 95
- Mac Ventura - Safari 16.3
- Mac Ventura - Chrome 112
- Mac Ventura - Firefox 112
- Mac Ventura - Opera 98
- Mac Ventura - Edge 112
- Mac Sierra - Safari 10.1
- Mac Sierra - Firefox 112
- Mac Sierra - Chrome 103
- Mac Sierra - Opera 89
- Mac Sierra - Edge 103

To test the site, I followed these steps:
- Resize the browser to ensure that the site is responsive on multiple screen sizes.
- Test each feature. 

| Feature:  | Welcome Panel           |
|-----------|-------------------------|
| Expected: | Enter the player's names and click on Start. The welcome panel should then disappear. If you click on Start without entering anything into the input boxes, an alert should appear.|
| Testing:  | Tested the feature by firstly clicking on Start without completing the the input boxes. Secondly, completing the input boxes and clicking on Start.|
| Result:   | The feature responded as expected.|
| Fix:      | No fix needed.|

| Feature:  | Game Area               |
|-----------|-------------------------|
| Expected: | A grid of 20 cards appear. You should be able to click on two cards at a time. If there is a match, a pop up will appear telling you that it is a match.  If there is no match, the cards flip back over to their original state.|
| Testing:  | Tested the feature by firstly clicking on two cards. Secondly, clicking on more than two cards at a time. Thirdly, double clicking on one card.|
| Result:   | The feature responded as expected when two cards are clicked on. It allowed you to click on more than two cards per turn. Double clicking on a card resulted in a pop up saying you had a (false) match.|
| Fix:      | To prevent more than two cards being clicked on, I created a variable called isPlaying initially set to true. In the flip function, a check is made to see if the variable is false and if it is then exit the function. Once two cards have been clicked the variable is set to false. The variable is then reset to true after the cards have been checked for a match.To prevent a card being double clicked on, I added a class of "stopClick" to cards clicked on. A disableClick function was then created which removes the click event listener for elements with a class name of "stopClick". Once the cards have been checked for a match, the class is removed and the flipCards function is called, so that the click event listeners are recreated.|

| Feature:  | Player's Turn Board     |
|-----------|-------------------------|
| Expected: | Feature is expected to indicate which player's turn it currently is by changing when either the cards are returned to their original state or after the pop up has disappeared. |
| Testing:  | Tested the feature by playing the game and noting each change of player.|
| Result:   | The feature responded as expected.|
| Fix:      | No fix needed.|

| Feature:  | Score Board             |
|-----------|-------------------------|
| Expected: | Feature is expected to update the score when a player matches a card.|
| Testing:  | Tested the feature by playing the game and noting the score when each match has been made.|
| Result:   | The feature responded as expected.|
| Fix:      | No fix needed.|

| Feature:  | Pop ups                 |
|-----------|-------------------------|
| Expected: | Feature is expected to pop up each time there is a match of cards. The message will say "It's a Match!". The pop up will also appear at the end of the game to notify you of the winner.  The message will say "[Name] is the Winner!" or "It's a draw!"|
| Testing:  | Tested the feature by playing the game and noting whether the pop up appears, and whether it contains the correct message.|
| Result:   | The feature responded as expected.|
| Fix:      | No fix needed.|

| Feature:  | New game                |
|-----------|-------------------------|
| Expected: | Feature is expected to make the grid disappear and reappear with a new batch of shuffled cards. The Player's Turn Board will reset to Player 1 and the Score Board will reset to 0.|
| Testing:  | Tested the feature by clicking on the new game button, and checking in Chrome Developer Tools whether the order of the cards had changed from the previous grid. Checked both the Player's Turn Board and the Scoreboard to see that they had both reset.|
| Result:   | The feature responded as expected.|
| Fix:      | No fix needed.|

## Deployment 

GitHub Pages was used for deployment of the website directly from the GitHub repository by following these steps: 

- Log in to GitHub
- Locate the repository that you are deploying
- Click on "Settings"
- Click on "Pages"
- Select the source to deploy from, in this case it was "Deploy from a branch"
- Select the branch, in this case it was the "main" branch
- Select the root folder
- Click on "Save".  It may take a few minutes but your site is now live and the URL will appear.

## Local Development
To create a local copy of the repository by cloning it:

- Log in to GitHub
- Locate the repository that you are cloning
- Click on "Code"
- Select the method of cloning and copy the link shown
- Open the terminal and change the current working directory to the location you want to use for the cloned directory.
- Type "git clone" into the terminal and paste the link that you copied and press Enter

To fork the repository: 
- Log in to GitHub
- Locate the repository
- Click on the "Fork" button at the top

## Credits

### Code Used
- Guidance on how to flip a card (https://www.w3schools.com/howto/howto_css_flip_card.asp)
- Love Maths Walkthrough Project
- Fisher-Yates Shuffle Algorithm to shuffle the cards array (https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)
- Guidance on how to get the current player (https://github.com/adriane26/theGame/blob/master/memory.js)

### Content
- Instructions on how to clone and fork on GitHub was taken from Kera Cudmore's README (https://github.com/kera-cudmore/Bully-Book-Club/blob/main/README.md)

## Acknowledgements

I would like to acknowledge Ed from the Code Institute's Tutor Support for helping me solve some of the issues I faced. 