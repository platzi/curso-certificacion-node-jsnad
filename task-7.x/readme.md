# Task

The `answer.js` file contains the following:

```js
'use strict'

function answer (emitter) {

}
```

The function `answer` receives an EventEmitter instance in the `emitter` variable as an argument.

Complete the `answer.js` file to have the `emitter` listen for the event `jump` and after receiving that event, make the `emitter` emit the `run` event; exit the process when the `jump` event is emitted __three times__.
