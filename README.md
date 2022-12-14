# 3-PasswordPlease

## Table of Contents
- [Acceptance-Criteria](#acceptance-criteria)
- [Expected-Behavior](#expected-behavior)
- [Usage](#usage)
- [Learnings](#learnings)
- [Mock-Up](#mock-up)

## Expected Behavior

The expected behavior of this web page is to create an application that an employee can use to generate a random password based on criteria they've selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. 

## Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Usage

The usage of this application is to have an applicaton that can generate a randomized password using lowercase, uppercase, numbers and special characters. The user is also able to pick the length of the password ranging from 8 to 128 characters.

To generate a password there are a couple steps to take. When you press generate 4 different prompts will pop up that you have to either press okay to include the variables or cancel to omit the characters from the password. Once at least one variable is selected then the password will generate with the number of characters that were selected to be included. 

## Learnings

This week our material was covering a wide number of things in side Javascript: Arrays, Iterations, Scopes, Methods, Objects and Primitive types, how they all work together and all the small details that go into the structure of this code and why it's important to pay attention to order.

The goal of this assignment was to learn how to add code to a starter batch of code that was given to us. From there we had to use the material learned in the week to successfully get the generate button to actually respond when clicked. We learned how to have a system recognize when we ask it to add or omit a certain set of characters in a string. We learned that trial and error is very common and to test our written code often.

## Mock-Up

link to deployed site: https://mwells012.github.io/3-PasswordPlease/ 

The following image show the web application's appearance and functionality:
[https://github.com/MWells012/3-PasswordPlease/blob/main/assets/photos/Screen%20Shot%202022-08-04%20at%2011.03.10%20PM.png]