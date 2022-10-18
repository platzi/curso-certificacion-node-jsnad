# Task

The `totest.js` file contains a module exporting a single function that receives a single argument, that should be a string and has 3 possible outcomes.

* If the string is a valid user will return a `User` object.
* If the string is not an user it will return an object with an error message.
* If the argument is not a string it will throw an error.

Using the __test framework__ of your choice (or no __framework__), complete `answer.js` to test the `totest.js` 3 possible outcomes described above.

Configure `package.json` so that `npm test` executes the tests in `answer.js` correctly.
**Failure to do so will result in a zero grade.**
