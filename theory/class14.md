# What is NPM?

### Introduction to JS testing
Node Package Manager and Yarn are the most popular Package Manager in JS.
NPM is a default Package Manager and is based on:

- to registry: Is a registry/ repository of open-source JS projects 
- command line interface: to install dependencies

to verify:
npm -v

to use:
npm install <packageName>

How do we keep track of what all packages our project depends on? That's what package.json is used for.

### Mocha

- Mocha is a JavaScript Test Framework.
- Runs on Node.js and Browser
Installation: 
npm install --global mocha

### Chai
- Chai is BDD/TDD assertion library.
- Can be paired with any javascript testing framework.
- Assertion with Chai provides natural language assertions, expressive and readable style.
Installation: 
npm install mocha chai --save-dev

Mocha is the library that allows us to run tests, and Chai contains some helpful functions that we’ll use to verify our test results.


# PART II

# Mocha Basic Spec

### assert 
Helps to determine the status of the test, it determines failure of the test.
### describe 
Is a function which holds the collection of tests. It takes two parameters, first one is the meaningful name to functionality under test and second one is the function which contains one or multiple tests. We can have nested describe as well.
### it 
Is a function again which is actually a test itself and takes two parameters, first parameter is name to the test and second parameter is function which holds the body of the test.

# Assertion interfaces and styles
There are two popular way of assertion in Chai, expect and should
The expect interface provides function for assertion.
The should interface extends each object with a should property for assertion.
should property gets added to the Object.Prototype, so that all object can access it through prototype chain.