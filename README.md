![cf](https://i.imgur.com/7v5ASc8.png) Lab 42: Component Frameworks
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Feature Tasks
##### Minimum Requirements

### Build a Simple Cowsay Based "Hello World" Application
For this assignment, you will create a simple cowsay application similar to the one we created in lecture.  Your primary challenge is to use a frontend framework, other than ReactJS, to build it's core functionality.  Granted you are using Angular 1.6, the requirements for your application are as follows:

* create a form and submit button that will be used to save the current state of the cow's text
  * use the `ng-submit` directive to control the form's on-submit functionality
  * add a button that uses the `ng-click` directive to populate a second `pre` tag with the current `pre` tag state
* add a button that uses the `ng-click` directive to create an **undo** effect
  * whenever this button is clicked, it should reset the second `pre` tag with the content it last showed
* add a select menu that uses the `ng-repeat` directive
  * this should be used to populate the select menu with the names of all `cowsay` files
    * hint: `cowsay.list((err, list) => {})`
* when a `cowsay` filename is selected from the menu, have the first `pre` tag use the selected cowfile
* use the `ng-show` directive to show the second `pre` tag **only** if the history state is not empty

If you are planning on using another framework, the functionality above is not required.  Simply getting text to show up on the screen and including basic demonstration level "click" or "submit" functionality is sufficient.  You may go as far with this build as you'd like.

### Alternate Frameworks You May Use
* [Angular 4.0](https://angular.io/)
* [VueJS](https://vuejs.org/v2/guide/)
* [EmberJS](https://www.emberjs.com/)
* [MeteorJS](https://www.meteor.com/)