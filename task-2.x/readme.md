# Task

The `answer.js` file contains two functions, `fetch()`, and `answer()`.

The `fetch()` function uses `http.get` implementing a callback based abstraction, it accepts a URL
path as the first argument, and a callback as the second. The callback passed to `fetch` should receive a
(potential) error object as the first input and the response content as the second one. function
must not be altered. **Altering it might result in a zero grade.**.

The `answer` function receives three arguments, `urlA`, `urlB` and `urlC`. Each of these contains an URL path.

Complete the `answer` function so that each URL is consumed using the `fetch` function and logged to the terminal's STDOUT stream. Execute the fetching of URLs all in the same tick ("at the same time"), and log results to the terminal in
chronological order (that is, according to the time it took each operation to complete).

If at any point there is an error, the `answer` function should log the
error to the terminal's STDERR stream and immediately exit the process with code 1.
