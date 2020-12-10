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