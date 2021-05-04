# Web UI Automation Using JavaScript (Mocha.js)

### Mocha JavaScript Test Framework:
**Introduction:**
- A test framework is set of guidelines to create effective test cases
- Javascript testing framework runs on browser.
- Runs on node.js (run time environment)
- similar to TestNG in Java, NUnit in C#
- good for ansynchrous testing


**Get started:**
- install node.js and npm
- check on cmd if these are installed using
`node -v
npm -v`
- to install mocha globally
`npm install mocha -g`  (g stands for global installation)
- check if mocha is installed
`mocha -version`

**Write some tests:**
#### `describe` and `it` functions for writing test
We will be using pre-bundled functions `describe()` and `it()` for writing test, please see file (test.js)

describe() is used to group tests,it has 2 params, one is test group description other is a call back function

it() resides within describe() and has 2 params, one is testcase description other is a call back function that contains details and assertion for the test.

Note: call back function is a function that execute after an event has occurred, it is ideal for asynchronous JS.

**Run tests**
- Run command `npm test` to run test script.

#### Use Mocha hooks for pre and post conditions for all test and every test:
Please see test2.js for this section.
To create pre-condition and post-condition for all `it` functions at once use `before()` and `after()`
To create pre-condition and post-condition for each `it` functions  use `beforeEach()` and `afterEach()`

These hooks should be within `describe()` functions.

#### Use Mocha test features to run only desired test/test suite or skip some tests/test suites
Please see test3.js for this section.
- We have exclusive test/test suite that runs only skipping all others, to acheive this, add `.only` to `it` or `describe` accordingly.
- We have inclusive test/test suite that are skipped, to acheive this, add `.skip` to `it` or `describe` accordingly, these will appear pending
- There are some test for which details are not available currently but these need to written eventuall, for this don't add callback in `it` function, this will appear as pending

####  Use this.timeout() and this.retries()
Please check test3.js (test suite with part 4 in description to see example)
** retries **
- Retries can be used to retry failed test for a fixed number of times.
- These are used for end to end tests
- Not ideal for unit test.
- These can be used of test suite or test case,
Please see test3.js (first testcase in first test suite) to understand syntax of retries.

**timeoout**
- We can define timeouts on test suite level, testcase level or on beforeEach and afterEach hook level.

NOTE: if using `setTimeout`(done, 500) like so `setTimeout(done, 500)` don't forget to put done in function call back and setTimeout params.

#### Using Reporters

Usually there are 2 types of reporters used:
1- Spec : it shows simple testcases result status 
2- DotMatrix: it shows failed test as red exclamation mark, pending tests as blue, slow test as yellow 

Use these in terminal to get reporters of any kind:
For Spec:
`mocha test/ --reporter spec`
For dot matrix:
`mocha test/ --reporter dot`
