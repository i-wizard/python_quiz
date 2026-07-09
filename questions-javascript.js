window.QUIZ_BANKS = window.QUIZ_BANKS || {};
window.QUIZ_BANKS["javascript"] = {
  "id": "javascript",
  "name": "JavaScript",
  "icon": "🟨",
  "questions": [
    {
      "id": 1,
      "question": "Which operator returns true if the two compared values are not equal?",
      "options": [
        {
          "text": "`<>`",
          "correct": false
        },
        {
          "text": "`~`",
          "correct": false
        },
        {
          "text": "`==!`",
          "correct": false
        },
        {
          "text": "`!==`\n\n[Reference Javascript Comparison Operators](https://www.w3schools.com/js/js_operators.asp)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 2,
      "question": "How is a forEach statement different from a for statement?",
      "options": [
        {
          "text": "Only a for statement uses a callback function.",
          "correct": false
        },
        {
          "text": "A for statement is more generic and can be used with various iterable objects, while a forEach statement is mainly designed for arrays but can also be used with other iterable objects like Sets.",
          "correct": true
        },
        {
          "text": "Only a forEach statement lets you specify your own iterator.",
          "correct": false
        },
        {
          "text": "A forEach statement is generic, but a for statement can be used only with an array.\n\n[Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 3,
      "question": "Review the code below. Which statement calls the addTax function and passes 50 as an argument?\n\n```js\nfunction addTax(total) {\n  return total * 1.05;\n}\n```",
      "options": [
        {
          "text": "`addTax = 50;`",
          "correct": false
        },
        {
          "text": "`return addTax 50;`",
          "correct": false
        },
        {
          "text": "`addTax(50);`",
          "correct": true
        },
        {
          "text": "`addTax 50;`\n\n[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 4,
      "question": "Which statement is the correct way to create a variable called rate and assign it the value 100?",
      "options": [
        {
          "text": "`let rate = 100;`",
          "correct": true
        },
        {
          "text": "`let 100 = rate;`",
          "correct": false
        },
        {
          "text": "`100 = let rate;`",
          "correct": false
        },
        {
          "text": "`rate = 100;`\n\n[Reference Javascript Assignment operators](https://www.w3schools.com/js/js_operators.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 5,
      "question": "Which statement creates a new object using the Person constructor? Which statement creates a new Person object called \"student\"?",
      "options": [
        {
          "text": "`var student = new Person();`",
          "correct": true
        },
        {
          "text": "`var student = construct Person;`",
          "correct": false
        },
        {
          "text": "`var student = Person();`",
          "correct": false
        },
        {
          "text": "`var student = construct Person();`",
          "correct": false
        }
      ],
      "reference": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
    },
    {
      "id": 6,
      "question": "When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?\n\n```js\nlet modal = document.querySelector('#result');\nsetTimeout(function () {\n  modal.classList.remove('hidden');\n}, 10000);\nconsole.log('Results shown');\n```",
      "options": [
        {
          "text": "after 10 second",
          "correct": false
        },
        {
          "text": "after results are received from the HTTP request",
          "correct": false
        },
        {
          "text": "after 10000 seconds",
          "correct": false
        },
        {
          "text": "immediately\n\n[Reference Javascript is synchronous and single threaded](https://stackoverflow.com/a/2035662/15067394)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 7,
      "question": "Which snippet could you add to this code to print \"food\" to the console?\n\n```js\nclass Animal {\n  static belly = [];\n  eat() {\n    Animal.belly.push('food');\n  }\n}\nlet a = new Animal();\na.eat();\nconsole.log(/* Snippet Here */); //Prints food\n```",
      "options": [
        {
          "text": "`a.prototype.belly[0]`",
          "correct": false
        },
        {
          "text": "`Object.getPrototype0f (a).belly[0]`",
          "correct": false
        },
        {
          "text": "`Animal.belly[0]`",
          "correct": true
        },
        {
          "text": "`a.belly[0]`\n\n[Reference Javascript Class static Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 8,
      "question": "You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?",
      "options": [
        {
          "text": "`A`\n\n```js\nfor (var i = 1; i <= 4; i++) {\n  setTimeout(function () {\n    console.log(i);\n  }, i * 10000);\n}\n```",
          "correct": false
        },
        {
          "text": "`B`\n\n```js\nfor (var i = 1; i <= 4; i++) {\n  (function (i) {\n    setTimeout(function () {\n      console.log(j);\n    }, j * 1000);\n  })(j);\n}\n```",
          "correct": false
        },
        {
          "text": "`C`\n\n```js\nfor (var i = 1; i <= 4; i++) {\n  setTimeout(function () {\n    console.log(i);\n  }, i * 1000);\n}\n```",
          "correct": false
        },
        {
          "text": "`D`\n\n```js\nfor (var i = 1; i <= 4; i++) {\n  (function (j) {\n    setTimeout(function () {\n      console.log(j);\n    }, j * 1000);\n  })(i);\n}\n```",
          "correct": true
        },
        {
          "text": "`E`\n\n```js\nfor (var j = 1; j <= 4; j++) {\n  setTimeout(function () {\n    console.log(j);\n  }, j * 1000);\n}\n```\n\n1. [Reference setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)\n2. [Reference immediately invoked anonymous functions](https://www.javascripttutorial.net/javascript-anonymous-functions/)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 9,
      "question": "How does a function create a closure?",
      "options": [
        {
          "text": "It reloads the document whenever the value changes.",
          "correct": false
        },
        {
          "text": "It returns a reference to a variable in its parent scope.",
          "correct": true
        },
        {
          "text": "It completes execution without returning.",
          "correct": false
        },
        {
          "text": "It copies a local variable to the global scope.",
          "correct": false
        }
      ],
      "reference": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
    },
    {
      "id": 10,
      "question": "What is the result in the console of running the code shown?\n\n```js\nvar Storm = function () {};\nStorm.prototype.precip = 'rain';\nvar WinterStorm = function () {};\nWinterStorm.prototype = new Storm();\nWinterStorm.prototype.precip = 'snow';\nvar bob = new WinterStorm();\nconsole.log(bob.precip);\n```",
      "options": [
        {
          "text": "Storm()",
          "correct": false
        },
        {
          "text": "undefined",
          "correct": false
        },
        {
          "text": "'rain'",
          "correct": false
        },
        {
          "text": "'snow'\n\n[Reference prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 11,
      "question": "You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?",
      "options": [
        {
          "text": "`/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/`",
          "correct": false
        },
        {
          "text": "`/\\d\\d:\\d\\d:\\d\\d/`",
          "correct": true
        },
        {
          "text": "`/[0-9]+:[0-9]+:[0-9]+/`",
          "correct": false
        },
        {
          "text": "`/ : : /`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 12,
      "question": "What is the result in the console of running this code?\n\n```js\n'use strict';\nfunction logThis() {\n  this.desc = 'logger';\n  console.log(this);\n}\nnew logThis();\n```",
      "options": [
        {
          "text": "`undefined`",
          "correct": false
        },
        {
          "text": "`window`",
          "correct": false
        },
        {
          "text": "`{desc: \"logger\"}`",
          "correct": true
        },
        {
          "text": "`function`\n\n[Reference javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 13,
      "question": "How would you reference the text 'avenue' in the code shown?\n\n```js\nlet roadTypes = ['street', 'road', 'avenue', 'circle'];\n```",
      "options": [
        {
          "text": "roadTypes.2",
          "correct": false
        },
        {
          "text": "roadTypes\\[3\\]",
          "correct": false
        },
        {
          "text": "roadTypes.3",
          "correct": false
        },
        {
          "text": "roadTypes\\[2\\]\n\n[Reference accessing javascript arrays](https://www.w3schools.com/js/js_arrays.asp)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 14,
      "question": "What is the result of running this statement?\n\n```js\nconsole.log(typeof 42);\n```",
      "options": [
        {
          "text": "`'float'`",
          "correct": false
        },
        {
          "text": "`'value'`",
          "correct": false
        },
        {
          "text": "`'number'`",
          "correct": true
        },
        {
          "text": "`'integer'`\n\n[Reference javascript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 15,
      "question": "Which property references the DOM object that dispatched an event?",
      "options": [
        {
          "text": "`self`",
          "correct": false
        },
        {
          "text": "`object`",
          "correct": false
        },
        {
          "text": "`target`",
          "correct": true
        },
        {
          "text": "`source`\n\n[Reference DOM events](https://www.w3schools.com/jsref/dom_obj_event.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 16,
      "question": "You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?\n\n```js\nfunction addNumbers(x, y) {\n  if (isNaN(x) || isNaN(y)) {\n  }\n}\n```",
      "options": [
        {
          "text": "`exception('One or both parameters are not numbers')`",
          "correct": false
        },
        {
          "text": "`catch('One or both parameters are not numbers')`",
          "correct": false
        },
        {
          "text": "`error('One or both parameters are not numbers')`",
          "correct": false
        },
        {
          "text": "`throw('One or both parameters are not numbers')`\n\n[Reference javascript throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 17,
      "question": "Which method converts JSON data to a JavaScript object?",
      "options": [
        {
          "text": "`JSON.fromString();`",
          "correct": false
        },
        {
          "text": "`JSON.parse()`",
          "correct": true
        },
        {
          "text": "`JSON.toObject()`",
          "correct": false
        },
        {
          "text": "`JSON.stringify()`\n\n[Reference convert json to javascript object](https://www.w3schools.com/js/js_json_parse.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 18,
      "question": "When would you use a conditional statement?",
      "options": [
        {
          "text": "When you want to reuse a set of statements multiple times.",
          "correct": false
        },
        {
          "text": "When you want your code to choose between multiple options.",
          "correct": true
        },
        {
          "text": "When you want to group data together.",
          "correct": false
        },
        {
          "text": "When you want to loop through a group of statement.\n\n[Reference javascript conditionals](https://www.javascript.com/learn/conditionals)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 19,
      "question": "What would be the result in the console of running this code?\n\n```js\nfor (var i = 0; i < 5; i++) {\n  console.log(i);\n}\n```",
      "options": [
        {
          "text": "1 2 3 4 5",
          "correct": false
        },
        {
          "text": "1 2 3 4",
          "correct": false
        },
        {
          "text": "0 1 2 3 4",
          "correct": true
        },
        {
          "text": "0 1 2 3 4 5\n\n[Reference javascript for loops](https://www.w3schools.com/js/js_loop_for.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 20,
      "question": "Which Object method returns an iterable that can be used to iterate over the properties of an object?",
      "options": [
        {
          "text": "`Object.get()`",
          "correct": false
        },
        {
          "text": "`Object.loop()`",
          "correct": false
        },
        {
          "text": "`Object.each()`",
          "correct": false
        },
        {
          "text": "`Object.keys()`\n\n[Reference javascript object static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 21,
      "question": "What will be logged to the console?\n\n```js\nvar a = ['dog', 'cat', 'hen'];\na[100] = 'fox';\nconsole.log(a.length);\n```",
      "options": [
        {
          "text": "101",
          "correct": true
        },
        {
          "text": "3",
          "correct": false
        },
        {
          "text": "4",
          "correct": false
        },
        {
          "text": "100",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 22,
      "question": "What is one difference between collections created with Map and collections created with Object?",
      "options": [
        {
          "text": "You can iterate over values in a Map in their insertion order.",
          "correct": false
        },
        {
          "text": "You can count the records in a Map with a single method call.",
          "correct": true
        },
        {
          "text": "Keys in Maps can be strings.",
          "correct": false
        },
        {
          "text": "You can access values in a Map without iterating over the whole collection.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 23,
      "question": "What is the value of dessert.type after executing this code?\n\n```js\nconst dessert = { type: 'pie' };\ndessert.type = 'pudding';\n```",
      "options": [
        {
          "text": "pie",
          "correct": false
        },
        {
          "text": "The code will throw an error.",
          "correct": false
        },
        {
          "text": "pudding",
          "correct": true
        },
        {
          "text": "undefined\n\n[Reference working with js objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 24,
      "question": "0 && hi",
      "options": [
        {
          "text": "ReferenceError",
          "correct": false
        },
        {
          "text": "true",
          "correct": false
        },
        {
          "text": "0",
          "correct": true
        },
        {
          "text": "false\n\n[Reference boolean logic](https://ntgard.medium.com/https-medium-com-ntgard-boolean-logic-in-javascript-part-1-3371af974f19)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 25,
      "question": "Which of the following operators can be used to do a short-circuit evaluation?",
      "options": [
        {
          "text": "`++`",
          "correct": false
        },
        {
          "text": "`--`",
          "correct": false
        },
        {
          "text": "`==`",
          "correct": false
        },
        {
          "text": "`||`\n\n[Reference short circuit javascript](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 26,
      "question": "Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?",
      "options": [
        {
          "text": "`Student.parent = Person;`",
          "correct": false
        },
        {
          "text": "`Student.prototype = new Person();`",
          "correct": true
        },
        {
          "text": "`Student.prototype = Person;`",
          "correct": false
        },
        {
          "text": "`Student.prototype = Person();`\n\n[Reference prototype object js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 27,
      "question": "Why would you include a \"use strict\" statement in a JavaScript file?",
      "options": [
        {
          "text": "to tell parsers to interpret your JavaScript syntax loosely",
          "correct": false
        },
        {
          "text": "to tell parsers to enforce all JavaScript syntax rules when processing your code",
          "correct": true
        },
        {
          "text": "to instruct the browser to automatically fix any errors it finds in the code",
          "correct": false
        },
        {
          "text": "to enable ES6 features in your code\n\n[Reference what is use strict in js](https://www.w3schools.com/js/js_strict.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 28,
      "question": "Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?",
      "options": [
        {
          "text": "`const`",
          "correct": false
        },
        {
          "text": "`var`",
          "correct": true
        },
        {
          "text": "`let`",
          "correct": false
        },
        {
          "text": "All of the above\n\n[Reference var vs let vs const in js](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 29,
      "question": "Which of the following values is not a Boolean false?",
      "options": [
        {
          "text": "`Boolean(0)`",
          "correct": false
        },
        {
          "text": "`Boolean(\"\")`",
          "correct": false
        },
        {
          "text": "`Boolean(NaN)`",
          "correct": false
        },
        {
          "text": "`Boolean(\"false\")`\n\n[Reference boolean of a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 30,
      "question": "Which of the following is not a keyword in JavaScript?",
      "options": [
        {
          "text": "`this`",
          "correct": false
        },
        {
          "text": "`catch`",
          "correct": false
        },
        {
          "text": "`function`",
          "correct": false
        },
        {
          "text": "`array`\n\n[Reference js reserved words](https://www.w3schools.com/js/js_reserved.asp)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 31,
      "question": "Which variable is an implicit parameter for every function in JavaScript?",
      "options": [
        {
          "text": "arguments",
          "correct": true
        },
        {
          "text": "args",
          "correct": false
        },
        {
          "text": "argsArray",
          "correct": false
        },
        {
          "text": "argumentsList\n\n[Reference implicit js parameters for functions](https://www.codeproject.com/Tips/1221966/JavaScript-Functions-Implicit-Parameters)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 32,
      "question": "For the following class, how do you get the value of 42 from an instance of X?\n\n```js\nclass X {\n  get Y() {\n    return 42;\n  }\n}\nvar x = new X();\n```",
      "options": [
        {
          "text": "`x.get('Y')`",
          "correct": false
        },
        {
          "text": "`x.Y`",
          "correct": true
        },
        {
          "text": "`x.Y()`",
          "correct": false
        },
        {
          "text": "`x.get().Y`\n\n[Reference getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 33,
      "question": "What is the result of running this code?\n\n```js\nsum(10, 20);\ndiff(10, 20);\nfunction sum(x, y) {\n  return x + y;\n}\n\nlet diff = function (x, y) {\n  return x - y;\n};\n```",
      "options": [
        {
          "text": "30, ReferenceError, 30, -10",
          "correct": false
        },
        {
          "text": "30, ReferenceError",
          "correct": true
        },
        {
          "text": "30, -10",
          "correct": false
        },
        {
          "text": "ReferenceError, -10\n\n[Reference accessing before initialization](https://stackoverflow.com/questions/56318460/cannot-access-variable-name-before-initialization)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 34,
      "question": "Why is it usually better to work with Objects instead of Arrays to store a collection of records?",
      "options": [
        {
          "text": "Objects are more efficient in terms of storage.",
          "correct": false
        },
        {
          "text": "Adding a record to an object is significantly faster than pushing a record into an array.",
          "correct": false
        },
        {
          "text": "Most operations involve looking up a record, and objects can do that better than arrays.",
          "correct": true
        },
        {
          "text": "Working with objects makes the code more readable.\n\n[Reference efficiency of lookups](https://stackoverflow.com/questions/17295056/array-vs-object-efficiency-in-javascript)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 35,
      "question": "Which statement is true about the \"async\" attribute for the HTML script tag?",
      "options": [
        {
          "text": "It can be used for both internal and external JavaScript code.",
          "correct": false
        },
        {
          "text": "It can be used only for internal JavaScript code.",
          "correct": false
        },
        {
          "text": "It can be used only for internal or external JavaScript code that exports a promise.",
          "correct": false
        },
        {
          "text": "It can be used only for external JavaScript code.\n\n[Reference async attribute for html](https://www.w3schools.com/tags/att_script_async.asp)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 36,
      "question": "How do you import the lodash library making it top-level Api available as the \"\\_\" variable?",
      "options": [
        {
          "text": "`import _ from 'lodash';`",
          "correct": true
        },
        {
          "text": "`import 'lodash' as _;`",
          "correct": false
        },
        {
          "text": "`import '_' from 'lodash;`",
          "correct": false
        },
        {
          "text": "`import lodash as _ from 'lodash';`\n\n[Reference how to import library in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 37,
      "question": "What does the following expression evaluate to?\n\n```js\n[] == [];\n```",
      "options": [
        {
          "text": "true",
          "correct": false
        },
        {
          "text": "undefined",
          "correct": false
        },
        {
          "text": "[]",
          "correct": false
        },
        {
          "text": "false\n\n[Reference arrays in js are objects](https://stackoverflow.com/questions/30820611/why-doesnt-equality-check-work-with-arrays)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 38,
      "question": "What type of function can have its execution suspended and then resumed at a later point?",
      "options": [
        {
          "text": "Generator function",
          "correct": true
        },
        {
          "text": "Arrow function",
          "correct": false
        },
        {
          "text": "Async/ Await function",
          "correct": false
        },
        {
          "text": "Promise function\n\n[Reference what are generators in nodejs](https://www.guru99.com/node-js-generators-compare-callbacks.html#:~:text=Generators%20are%20function%20executions%20that,resumed%20at%20a%20later%20point.)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 39,
      "question": "What will this code print?\n\n```js\nvar v = 1;\nvar f1 = function () {\n  console.log(v);\n};\n\nvar f2 = function () {\n  var v = 2;\n  f1();\n};\n\nf2();\n```",
      "options": [
        {
          "text": "2",
          "correct": false
        },
        {
          "text": "1",
          "correct": true
        },
        {
          "text": "Nothing - this code will throw an error.",
          "correct": false
        },
        {
          "text": "undefined\n\n[Reference closures in js \\/ nested functions](https://javascript.info/closure)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 40,
      "question": "Which statement is true about Functional Programming?",
      "options": [
        {
          "text": "Every object in the program has to be a function.",
          "correct": false
        },
        {
          "text": "Code is grouped with the state it modifies.",
          "correct": false
        },
        {
          "text": "Date fields and methods are kept in units.",
          "correct": false
        },
        {
          "text": "Side effects are not allowed.\n\n[Reference functional programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 41,
      "question": "Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?",
      "options": [
        {
          "text": "You are calling a method named reduce on an object that's declared but has no value.",
          "correct": true
        },
        {
          "text": "You are calling a method named reduce on an object that does not exist.",
          "correct": false
        },
        {
          "text": "You are calling a method named reduce on an empty array.",
          "correct": false
        },
        {
          "text": "You are calling a method named reduce on an object that has a null value.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 42,
      "question": "How many prototype objects are in the chain for the following array?\n\n`let arr = [];`",
      "options": [
        {
          "text": "3",
          "correct": false
        },
        {
          "text": "2",
          "correct": true
        },
        {
          "text": "0",
          "correct": false
        },
        {
          "text": "1\n\n[Reference array prototype](https://www.w3schools.com/jsref/jsref_prototype_array.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 43,
      "question": "Which choice is _not_ a unary operator?",
      "options": [
        {
          "text": "`typeof`",
          "correct": false
        },
        {
          "text": "`delete`",
          "correct": false
        },
        {
          "text": "`instanceof`",
          "correct": true
        },
        {
          "text": "`void`\n\n[Reference js unary operators](https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful#:~:text=A%20unary%20operation%20is%20an,therefore%20their%20functionality%20is%20guaranteed.)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 44,
      "question": "What type of scope does the end variable have in the code shown?\n\n```js\nvar start = 1;\nif (start === 1) {\n  let end = 2;\n}\n```",
      "options": [
        {
          "text": "conditional",
          "correct": false
        },
        {
          "text": "block",
          "correct": true
        },
        {
          "text": "global",
          "correct": false
        },
        {
          "text": "function\n\n[Reference block vs function scope](https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 45,
      "question": "What will the value of y be in this code:\n\n```js\nconst x = 6 % 2;\nconst y = x ? 'One' : 'Two';\n```",
      "options": [
        {
          "text": "One",
          "correct": false
        },
        {
          "text": "undefined",
          "correct": false
        },
        {
          "text": "TRUE",
          "correct": false
        },
        {
          "text": "Two\n\n[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 46,
      "question": "Which keyword is used to create an error?",
      "options": [
        {
          "text": "`throw`",
          "correct": true
        },
        {
          "text": "`exception`",
          "correct": false
        },
        {
          "text": "`catch`",
          "correct": false
        },
        {
          "text": "`error`\n\n[Reference throwing errors in js](<https://www.w3schools.com/jsref/jsref_throw.asp#:~:text=The%20throw%20statement%20throws%20(generates,to%20create%20a%20custom%20error.)>)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 47,
      "question": "What's one difference between the async and defer attributes of the HTML script tag?",
      "options": [
        {
          "text": "The defer attribute can work synchronously.",
          "correct": false
        },
        {
          "text": "The defer attribute works only with generators.",
          "correct": false
        },
        {
          "text": "The defer attribute works only with promises.",
          "correct": false
        },
        {
          "text": "The defer attribute will asynchronously load the scripts in order.\n\n[Reference async vs defer](https://www.digitalocean.com/community/tutorials/html-defer-async#:~:text=%3E-,Async%20vs%20Defer,order%20as%20they%20are%20called.)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 48,
      "question": "The following program has a problem. What is it?\n\n```js\nvar a;\nvar b = (a = 3) ? true : false;\n```",
      "options": [
        {
          "text": "The condition in the ternary is using the assignment operator.",
          "correct": true
        },
        {
          "text": "You can't define a variable without initializing it.",
          "correct": false
        },
        {
          "text": "You can't use a ternary in the right-hand side of an assignment operator.",
          "correct": false
        },
        {
          "text": "The code is using the deprecated var keyword.\n\n[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 49,
      "question": "Which statement references the DOM node created by the code shown?\n\n```html\n<p class=\"pull\">lorem ipsum</p>\n```",
      "options": [
        {
          "text": "`Document.querySelector('class.pull')`",
          "correct": false
        },
        {
          "text": "`document.querySelector('.pull');`",
          "correct": true
        },
        {
          "text": "`Document.querySelector('pull')`",
          "correct": false
        },
        {
          "text": "`Document.querySelector('#pull')`\n\n[Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 50,
      "question": "What value does this code return?\n\n```js\nlet answer = true;\nif (answer === false) {\n  return 0;\n} else {\n  return 10;\n}\n```",
      "options": [
        {
          "text": "10",
          "correct": true
        },
        {
          "text": "true",
          "correct": false
        },
        {
          "text": "false",
          "correct": false
        },
        {
          "text": "0\n\n[Reference javascript conditionals](https://www.javascript.com/learn/conditionals)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 51,
      "question": "What is the result in the console of running the code shown?\n\n```js\nvar start = 1;\nfunction setEnd() {\n  var end = 10;\n}\nsetEnd();\nconsole.log(end);\n```",
      "options": [
        {
          "text": "10",
          "correct": false
        },
        {
          "text": "0",
          "correct": false
        },
        {
          "text": "ReferenceError",
          "correct": true
        },
        {
          "text": "undefined",
          "correct": false
        }
      ],
      "reference": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
    },
    {
      "id": 52,
      "question": "What will this code log in the console?\n\n```js\nfunction sayHello() {\n  console.log('hello');\n}\n\nconsole.log(sayHello.prototype);\n```",
      "options": [
        {
          "text": "undefined",
          "correct": false
        },
        {
          "text": "\"hello\"",
          "correct": false
        },
        {
          "text": "an object with a constructor property",
          "correct": true
        },
        {
          "text": "an error message\n\n[Reference prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 53,
      "question": "Which collection object allows unique value to be inserted only once?",
      "options": [
        {
          "text": "Object",
          "correct": false
        },
        {
          "text": "Set",
          "correct": true
        },
        {
          "text": "Array",
          "correct": false
        },
        {
          "text": "Map\n\n[Reference javascript sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 54,
      "question": "What two values will this code print?\n\n```js\nfunction printA() {\n  console.log(answer);\n  var answer = 1;\n}\nprintA();\nprintA();\n```",
      "options": [
        {
          "text": "`1` then `1`",
          "correct": false
        },
        {
          "text": "`1` then `undefined`",
          "correct": false
        },
        {
          "text": "`undefined` then `undefined`",
          "correct": true
        },
        {
          "text": "`undefined` then `1`",
          "correct": false
        }
      ],
      "reference": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
    },
    {
      "id": 55,
      "question": "How does the `forEach()` method differ from a `for` statement?",
      "options": [
        {
          "text": "forEach allows you to specify your own iterator, whereas for does not.",
          "correct": false
        },
        {
          "text": "forEach can be used only with strings, whereas for can be used with additional data types.",
          "correct": false
        },
        {
          "text": "forEach can be used only with an array, whereas for can be used with additional data types.",
          "correct": true
        },
        {
          "text": "for loops can be nested; whereas forEach loop cannot.\n\n[Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 56,
      "question": "Which choice is an incorrect way to define an arrow function that returns an empty object?",
      "options": [
        {
          "text": "=> `({})`",
          "correct": false
        },
        {
          "text": "=> `{}`",
          "correct": true
        },
        {
          "text": "=> `{ return {};}`",
          "correct": false
        },
        {
          "text": "=> `(({}))`\n\n[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 57,
      "question": "Why might you choose to make your code asynchronous?",
      "options": [
        {
          "text": "to start tasks that might take some time without blocking subsequent tasks from executing immediately",
          "correct": true
        },
        {
          "text": "to ensure that tasks further down in your code are not initiated until earlier tasks have completed",
          "correct": false
        },
        {
          "text": "to make your code faster",
          "correct": false
        },
        {
          "text": "to ensure that the call stack maintains a LIFO (Last in, First Out) structure",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 58,
      "question": "Which expression evaluates to true?",
      "options": [
        {
          "text": "`[3] == [3]`",
          "correct": false
        },
        {
          "text": "`3 == '3'`",
          "correct": true
        },
        {
          "text": "`3 != '3'`",
          "correct": false
        },
        {
          "text": "`3 === '3'`\n\n1. [Reference booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)\n2. [Reference 2 - booleans](https://www.scaler.com/topics/boolean-in-javascript/)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 59,
      "question": "Which of these is a valid variable name?",
      "options": [
        {
          "text": "5thItem",
          "correct": false
        },
        {
          "text": "firstName",
          "correct": true
        },
        {
          "text": "grand total",
          "correct": false
        },
        {
          "text": "function\n\n[Reference coding conventions](https://www.w3schools.com/js/js_conventions.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 60,
      "question": "Which method cancels event default behavior?",
      "options": [
        {
          "text": "`cancel()`",
          "correct": false
        },
        {
          "text": "`stop()`",
          "correct": false
        },
        {
          "text": "`preventDefault()`",
          "correct": true
        },
        {
          "text": "`prevent()`\n\n[Reference javascript events](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 61,
      "question": "Which method do you use to attach one DOM node to another?",
      "options": [
        {
          "text": "`attachNode()`",
          "correct": false
        },
        {
          "text": "`getNode()`",
          "correct": false
        },
        {
          "text": "`querySelector()`",
          "correct": false
        },
        {
          "text": "`appendChild()`\n\n[Reference Node interface](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 62,
      "question": "What statement can be used to skip an iteration in a loop?",
      "options": [
        {
          "text": "`break`",
          "correct": false
        },
        {
          "text": "`pass`",
          "correct": false
        },
        {
          "text": "`skip`",
          "correct": false
        },
        {
          "text": "`continue`\n\n[Reference break vs continue](https://www.w3schools.com/js/js_break.asp)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 63,
      "question": "Which choice is a valid example for an arrow function?",
      "options": [
        {
          "text": "`(a,b) => c`",
          "correct": true
        },
        {
          "text": "`a, b => {return c;}`",
          "correct": false
        },
        {
          "text": "`a, b => c`",
          "correct": false
        },
        {
          "text": "`{ a, b } => c`\n\n[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 64,
      "question": "Which concept is defined as a template that can be used to generate different objects that share some shape and/or behavior?",
      "options": [
        {
          "text": "class",
          "correct": true
        },
        {
          "text": "generator function",
          "correct": false
        },
        {
          "text": "map",
          "correct": false
        },
        {
          "text": "proxy\n\n[Reference javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 65,
      "question": "How do you add a comment to JavaScript code?",
      "options": [
        {
          "text": "`! This is a comment`",
          "correct": false
        },
        {
          "text": "`# This is a comment`",
          "correct": false
        },
        {
          "text": "`\\\\ This is a comment`",
          "correct": false
        },
        {
          "text": "`// This is a comment`\n\n[Reference comments in javascript](https://www.w3schools.com/js/js_comments.asp)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 66,
      "question": "If you attempt to call a value as a function but the value is not a function, what kind of error would you get?",
      "options": [
        {
          "text": "TypeError",
          "correct": true
        },
        {
          "text": "SystemError",
          "correct": false
        },
        {
          "text": "SyntaxError",
          "correct": false
        },
        {
          "text": "LogicError\n\n[Reference javascript errors](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 67,
      "question": "Which method is called automatically when an object is initialized?",
      "options": [
        {
          "text": "create()",
          "correct": false
        },
        {
          "text": "new()",
          "correct": false
        },
        {
          "text": "constructor()",
          "correct": true
        },
        {
          "text": "init()\n\n[Reference javascript constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 68,
      "question": "What is the result of running the statement shown?\n\n```js\nlet a = 5;\nconsole.log(++a);\n```",
      "options": [
        {
          "text": "4",
          "correct": false
        },
        {
          "text": "10",
          "correct": false
        },
        {
          "text": "6",
          "correct": true
        },
        {
          "text": "5\n\n[Reference ++x vs x++](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 69,
      "question": "You've written the event listener shown below for a form button, but each time you click the button, the page reloads. Which statement would stop this from happening?\n\n```js\nbutton.addEventListener(\n  'click',\n  function (e) {\n    button.className = 'clicked';\n  },\n  false,\n);\n```",
      "options": [
        {
          "text": "`e.blockReload();`",
          "correct": false
        },
        {
          "text": "`button.preventDefault();`",
          "correct": false
        },
        {
          "text": "`button.blockReload();`",
          "correct": false
        },
        {
          "text": "`e.preventDefault();`\n\n[Reference events in javascript](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 70,
      "question": "Which statement represents the starting code converted to an IIFE?",
      "options": [
        {
          "text": "`function() { console.log('lorem ipsum'); }()();`",
          "correct": false
        },
        {
          "text": "`function() { console.log('lorem ipsum'); }();`",
          "correct": false
        },
        {
          "text": "`(function() { console.log('lorem ipsum'); })();`\n\n[Reference what is an Immediately Invoked Function Expression](https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 71,
      "question": "Which statement selects all img elements in the DOM tree?",
      "options": [
        {
          "text": "`Document.querySelector('img')`",
          "correct": false
        },
        {
          "text": "`Document.querySelectorAll('<img>')`",
          "correct": false
        },
        {
          "text": "`Document.querySelectorAll('img')`",
          "correct": true
        },
        {
          "text": "`Document.querySelector('<img>')`\n\n[Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 72,
      "question": "Why would you choose an asynchronous structure for your code?",
      "options": [
        {
          "text": "To use ES6 syntax",
          "correct": false
        },
        {
          "text": "To start tasks that might take some time without blocking subsequent tasks from executing immediately",
          "correct": true
        },
        {
          "text": "To ensure that parsers enforce all JavaScript syntax rules when processing your code",
          "correct": false
        },
        {
          "text": "To ensure that tasks further down in your code aren't initiated until earlier tasks have completed\n\n[Reference async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 73,
      "question": "What is the HTTP verb to request the contents of an existing resource?",
      "options": [
        {
          "text": "DELETE",
          "correct": false
        },
        {
          "text": "GET",
          "correct": true
        },
        {
          "text": "PATCH",
          "correct": false
        },
        {
          "text": "POST\n\n[Reference http methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 74,
      "question": "Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?",
      "options": [
        {
          "text": "focus",
          "correct": true
        },
        {
          "text": "blur",
          "correct": false
        },
        {
          "text": "hover",
          "correct": false
        },
        {
          "text": "enter\n\n[Reference javascript events](https://developer.mozilla.org/en-US/docs/Web/Events)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 75,
      "question": "What is the result in the console of running this code?\n\n```js\nfunction logThis() {\n  console.log(this);\n}\nlogThis();\n```",
      "options": [
        {
          "text": "function",
          "correct": false
        },
        {
          "text": "undefined",
          "correct": false
        },
        {
          "text": "Function.prototype",
          "correct": false
        },
        {
          "text": "window\n\n[Reference what is the javascript window](https://www.w3schools.com/js/js_window.asp)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 76,
      "question": "Which class-based component is equivalent to this function component?\n\n```js\nconst Greeting = ({ name }) => <h1>Hello {name}!</h1>;\n```",
      "options": [
        {
          "text": "`class Greeting extends React.Component { render() { return <h1>Hello {this.props.name}!</h1>; } }`",
          "correct": true
        },
        {
          "text": "`class Greeting extends React.Component { constructor() { return <h1>Hello {this.props.name}!</h1>; } }`",
          "correct": false
        },
        {
          "text": "`class Greeting extends React.Component { <h>Hello {this.props.name}!</h>; } }`",
          "correct": false
        },
        {
          "text": "`class Greeting extends React.Component { render({ name }) { return <h1>Hello {name}!</h1>; } }`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 77,
      "question": "What is the output of this code?\n\n```js\nvar obj;\nconsole.log(obj);\n```",
      "options": [
        {
          "text": "`ReferenceError: obj is not defined`",
          "correct": false
        },
        {
          "text": "`{}`",
          "correct": false
        },
        {
          "text": "`undefined`",
          "correct": true
        },
        {
          "text": "`null`\n\n[Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 78,
      "question": "How would you use the TaxCalculator to determine the amount of tax on \\$50?\n\n```js\nclass TaxCalculator {\n  static calculate(total) {\n    return total * 0.05;\n  }\n}\n```",
      "options": [
        {
          "text": "calculate(50);",
          "correct": false
        },
        {
          "text": "new TaxCalculator().calculate(\\$50);",
          "correct": false
        },
        {
          "text": "TaxCalculator.calculate(50);",
          "correct": true
        },
        {
          "text": "new TaxCalculator().calculate(50);\n\n[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 79,
      "question": "What is wrong with this code?\n\n```js\nconst foo = {\n  bar() {\n    console.log('Hello, world!');\n  },\n  name: 'Albert',\n  age: 26,\n};\n```",
      "options": [
        {
          "text": "The function bar needs to be defined as a key/value pair.",
          "correct": false
        },
        {
          "text": "Trailing commas are not allowed in JavaScript.",
          "correct": false
        },
        {
          "text": "Functions cannot be declared as properties of objects.",
          "correct": false
        },
        {
          "text": "Nothing, there are no errors.\n\n1. [Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)\n2. [Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 80,
      "question": "What will be logged to the console?\n\n```js\nconsole.log('I');\nsetTimeout(() => {\n  console.log('love');\n}, 0);\nconsole.log('Javascript!');\n```",
      "options": [
        {
          "text": ".\n\n```plaintext\nI\nJavascript!\nlove\n```",
          "correct": true
        },
        {
          "text": ".\n\n```plaintext\nlove\nI\nJavascript!\n```",
          "correct": false
        },
        {
          "text": "The output may change with each execution of code and cannot be determined.",
          "correct": false
        },
        {
          "text": ".\n\n```plaintext\nI\nlove\nJavascript!\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 81,
      "question": "What will this code log to the console?\n\n```js\nconst foo = [1, 2, 3];\nconst [n] = foo;\nconsole.log(n);\n```",
      "options": [
        {
          "text": "1",
          "correct": true
        },
        {
          "text": "undefined",
          "correct": false
        },
        {
          "text": "NaN",
          "correct": false
        },
        {
          "text": "Nothing--this is not proper JavaScript syntax and will throw an error.\n\n[Reference array deconstruction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 82,
      "question": "How do you remove the property name from this object?\n\n```js\nconst foo = {\n  name: 'Albert',\n};\n```",
      "options": [
        {
          "text": "delete name from foo;",
          "correct": false
        },
        {
          "text": "delete foo.name;",
          "correct": true
        },
        {
          "text": "del foo.name;",
          "correct": false
        },
        {
          "text": "remove foo.name;\n\n[Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 83,
      "question": "What is the difference between the `map()` and the `forEach()` methods on the Array prototype?",
      "options": [
        {
          "text": "There is no difference.",
          "correct": false
        },
        {
          "text": "The `forEach()` method returns a single output value, whereas the `map()` method performs operation on each value in the array.",
          "correct": false
        },
        {
          "text": "The map() method returns a new array with a transformation applied on each item in the original array, whereas the `forEach()` method iterates through an array with no return value.",
          "correct": true
        },
        {
          "text": "The `forEach()` method returns a new array with a transformation applied on each item in the original array, whereas the `map()` method iterates through an array with no return value.\n\n1. [Reference map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)\n2. [Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 84,
      "question": "Which concept does this code illustrate?\n\n```js\nfunction makeAdder(x) {\n  return function (y) {\n    return x + y;\n  };\n}\n\nvar addFive = makeAdder(5);\nconsole.log(addFive(3));\n```",
      "options": [
        {
          "text": "overloading",
          "correct": false
        },
        {
          "text": "closure",
          "correct": false
        },
        {
          "text": "currying",
          "correct": true
        },
        {
          "text": "overriding\n\n[Reference currying](https://javascript.info/currying-partials)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 85,
      "question": "Which tag pair is used in HTML to embed JavaScript?",
      "options": [
        {
          "text": "`<script></script>`",
          "correct": true
        },
        {
          "text": "`<js></js>`",
          "correct": false
        },
        {
          "text": "`<javascript></javascript>`",
          "correct": false
        },
        {
          "text": "`<code></code>`\n\n[Reference add js to html file](https://www.w3schools.com/tags/tag_script.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 86,
      "question": "If your app receives data from a third-party API, which HTTP response header must the server specify to allow exceptions to the same-origin policy?",
      "options": [
        {
          "text": "Security-Mode",
          "correct": false
        },
        {
          "text": "Access-Control-Allow-Origin",
          "correct": true
        },
        {
          "text": "Different-Origin",
          "correct": false
        },
        {
          "text": "Same-Origin\n\n[Reference Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 87,
      "question": "What is the output of this code?\n\n```js\nlet rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];\nrainForests.splice(0, 2);\nconsole.log(rainForests);\n```",
      "options": [
        {
          "text": "`[\"Amazon\",\"Borneo\",\"Cerrado\",\"Congo\"]`",
          "correct": false
        },
        {
          "text": "`[\"Cerrado\", \"Congo\"]`",
          "correct": true
        },
        {
          "text": "`[\"Congo\"]`",
          "correct": false
        },
        {
          "text": "`[\"Amazon\",\"Borneo\"]`\n\n[Reference array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 88,
      "question": "Which missing line would allow you to create five variables(one,two,three,four,five) that correspond to their numerical values (1,2,3,4,5)?\n\n```js\nconst numbers = [1, 2, 3, 4, 5];\n//MISSING LINE\n```",
      "options": [
        {
          "text": "`const [one,two,three,four,five]=numbers`",
          "correct": true
        },
        {
          "text": "`const {one,two,three,four,five}=numbers`",
          "correct": false
        },
        {
          "text": "`const [one,two,three,four,five]=[numbers]`",
          "correct": false
        },
        {
          "text": "`const {one,two,three,four,five}={numbers}`\n\n[Reference array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 89,
      "question": "What will this code print?\n\n```js\nconst obj = {\n  a: 1,\n  b: 2,\n  c: 3,\n};\n\nconst obj2 = {\n  ...obj,\n  a: 0,\n};\n\nconsole.log(obj2.a, obj2.b);\n```",
      "options": [
        {
          "text": "Nothing, it will throw an error",
          "correct": false
        },
        {
          "text": "0 2",
          "correct": true
        },
        {
          "text": "undefined 2",
          "correct": false
        },
        {
          "text": "undefined 2\n\n[Reference spread syntax es6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 90,
      "question": "Which line could you add to this code to print \"jaguar\" to the console?\n\n```js\nlet animals = ['jaguar', 'eagle'];\n//Missing Line\nconsole.log(animals.pop()); //Prints jaguar\n```",
      "options": [
        {
          "text": "`animals.filter(e => e === \"jaguar\");`",
          "correct": false
        },
        {
          "text": "`animals.reverse();`",
          "correct": false
        },
        {
          "text": "`animals.shift();`",
          "correct": false
        },
        {
          "text": "`animals.pop();`\n\n[Reference Javascript Array pop()](https://www.w3schools.com/jsref/jsref_pop.asp)\n\nshift() - removes the FIRST element of an array and returns the removed item.\n\npop() - removes the LAST element of an array and returns the removed item.\n\nreverse() - reverses the order of the elements in an array.\n\nfilter() - get every element in the array that meets the condition.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 91,
      "question": "What line is missing from this code?\n\n```js\n//Missing Line\nfor (var i = 0; i < vowels.length; i++) {\n  console.log(vowels[i]);\n  //Each letter printed on a separate line as follows;\n  //a\n  //e\n  //i\n  //o\n  //u\n}\n```",
      "options": [
        {
          "text": "`let vowels = \"aeiou\".toArray();`",
          "correct": false
        },
        {
          "text": "`let vowels = Array.of(\"aeiou\");`",
          "correct": false
        },
        {
          "text": "`let vowels = {\"a\", \"e\", \"i\", \"o\", \"u\"};`",
          "correct": false
        },
        {
          "text": "`let vowels = \"aeiou\";`\n\n[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 92,
      "question": "What will be logged to the console?\n\n```js\nconst x = 6 % 2;\nconst y = x ? 'One' : 'Two';\nconsole.log(y);\n```",
      "options": [
        {
          "text": "undefined",
          "correct": false
        },
        {
          "text": "One",
          "correct": false
        },
        {
          "text": "true",
          "correct": false
        },
        {
          "text": "Two",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 93,
      "question": "How would you access the word It from this multidimensional array?\n\n`let matrix = [[\"You\",\"Can\"],[\"Do\",\"It\"],[\"!\",\"!\",\"!\"]];`",
      "options": [
        {
          "text": "`matrix[1[2]]`",
          "correct": false
        },
        {
          "text": "`matrix[1][1]`",
          "correct": true
        },
        {
          "text": "`matrix[1,2]`",
          "correct": false
        },
        {
          "text": "`matrix[1][2]`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 94,
      "question": "What does this code do?\n\n```js\nconst animals = ['Rabbit', 'Dog', 'Cat'];\nanimals.unshift('Lizard');\n```",
      "options": [
        {
          "text": "It adds \"Lizard\" to the start of the animals array.",
          "correct": true
        },
        {
          "text": "It adds \"Lizard\" to the end of the animals array.",
          "correct": false
        },
        {
          "text": "It replaces \"Rabbit\" with \"Lizard\" in the animals array.",
          "correct": false
        },
        {
          "text": "It replaces \"Cat\" with \"Lizard\" in the animals array.\n\n[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 95,
      "question": "What is the output of this code?\n\n```js\nlet x = 6 + 3 + '3';\nconsole.log(x);\n```",
      "options": [
        {
          "text": "93",
          "correct": true
        },
        {
          "text": "12",
          "correct": false
        },
        {
          "text": "66",
          "correct": false
        },
        {
          "text": "633\n\n[Reference type coercion](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 96,
      "question": "Which statement can take a single expression as input and then look through a number of choices until one that matches that value is found?",
      "options": [
        {
          "text": "else",
          "correct": false
        },
        {
          "text": "when",
          "correct": false
        },
        {
          "text": "if",
          "correct": false
        },
        {
          "text": "switch\n\n[Reference switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 97,
      "question": "Which statement prints \"roar\" to the console?\n\n```js\nvar sound = 'grunt';\nvar bear = { sound: 'roar' };\nfunction roar() {\n  console.log(this.sound);\n}\n```",
      "options": [
        {
          "text": "`bear.bind(roar);`",
          "correct": false
        },
        {
          "text": "`roar.bind(bear);`",
          "correct": false
        },
        {
          "text": "`roar.apply(bear);`",
          "correct": true
        },
        {
          "text": "`bear[roar]();`\n\n1. [Reference Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)\n2. [Reference this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)\n3. [Reference bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 98,
      "question": "Which choice is a valid example of an arrow function, assuming c is defined in the outer scope?",
      "options": [
        {
          "text": "`a, b => { return c; }`",
          "correct": false
        },
        {
          "text": "`a, b => c`",
          "correct": false
        },
        {
          "text": "`{ a, b } => c`",
          "correct": false
        },
        {
          "text": "`(a,b) => c`\n\n[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 99,
      "question": "Which statement correctly imports this code from some-file.js?\n\n```js\n//some-file.js\nexport const printMe = (str) => console.log(str);\n```",
      "options": [
        {
          "text": "`import printMe from './some-file';`",
          "correct": false
        },
        {
          "text": "`import { printMe } from './some-file';`",
          "correct": true
        },
        {
          "text": "`import default as printMe from './some-file';`",
          "correct": false
        },
        {
          "text": "`const printMe = import './some-file';`\n\n[Reference importing libraries in javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 100,
      "question": "What will be the output of the following code?\n\n```js\nconst arr1 = [2, 4, 6];\nconst arr2 = [3, 5, 7];\n\nconsole.log([...arr1, ...arr2]);\n```",
      "options": [
        {
          "text": "`[2, 3, 4, 5, 6, 7]`",
          "correct": false
        },
        {
          "text": "`[3,5,7,2,4,6]`",
          "correct": false
        },
        {
          "text": "`[3, 5, 7, 2, 4, 6]`",
          "correct": false
        },
        {
          "text": "`[[2, 4, 6], [3, 5, 7]]`",
          "correct": false
        },
        {
          "text": "`[2, 4, 6, 3, 5, 7]`\n\n[Reference spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 101,
      "question": "Which method call is chained to handle a successful response returned by `fetch()`?",
      "options": [
        {
          "text": "`done()`",
          "correct": false
        },
        {
          "text": "`then()`",
          "correct": true
        },
        {
          "text": "`finally()`",
          "correct": false
        },
        {
          "text": "`catch()`\n\n[Reference fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 102,
      "question": "Which choice is not an array method?",
      "options": [
        {
          "text": "`array.slice()`",
          "correct": false
        },
        {
          "text": "`array.shift()`",
          "correct": false
        },
        {
          "text": "`array.push()`",
          "correct": false
        },
        {
          "text": "`array.replace()`\n\n[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 103,
      "question": "Which JavaScript loop ensures that at least a singular iteration will happen?",
      "options": [
        {
          "text": "do…while",
          "correct": true
        },
        {
          "text": "forEach",
          "correct": false
        },
        {
          "text": "while",
          "correct": false
        },
        {
          "text": "for\n\n[Reference loops in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 104,
      "question": "What will be logged to the console?\n\n```js\nconsole.log(typeof 'blueberry');\n```",
      "options": [
        {
          "text": "`string`",
          "correct": true
        },
        {
          "text": "`array`",
          "correct": false
        },
        {
          "text": "`Boolean`",
          "correct": false
        },
        {
          "text": "`object`\n\n[Reference what is typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#basic_usage)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 105,
      "question": "What is the output that is printed when the div containing the text \"Click Here\" is clicked?\n\n```html\n//HTML Markup\n<div id=\"A\">\n  <div id=\"B\">\n    <div id=\"C\">Click Here</div>\n  </div>\n</div>\n```\n\n```js\n//JavaScript\ndocument.querySelectorAll('div').forEach((e) => {\n  e.onclick = (e) => console.log(e.currentTarget.id);\n});\n```",
      "options": [
        {
          "text": "C B A",
          "correct": true
        },
        {
          "text": "A",
          "correct": false
        },
        {
          "text": "C",
          "correct": false
        },
        {
          "text": "A B C\n\n1. [Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)\n2. [Reference events](https://developer.mozilla.org/en-US/docs/Web/Events)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 106,
      "question": "What will this code log to the console?\n\n```js\nconst myNumbers = [1, 2, 3, 4, 5, 6, 7];\nconst myFunction = (arr) => {\n  return arr.map((x) => x + 3).filter((x) => x < 7);\n};\nconsole.log(myFunction(myNumbers));\n```",
      "options": [
        {
          "text": "`[4,5,6,7,8,9,10]`",
          "correct": false
        },
        {
          "text": "`[4,5,6,7]`",
          "correct": false
        },
        {
          "text": "`[1,2,3,4,5,6]`",
          "correct": false
        },
        {
          "text": "`[4,5,6]`\n\n[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 107,
      "question": "What does this code print to the console?\n\n```js\nlet rainForestAcres = 10;\nlet animals = 0;\n\nwhile (rainForestAcres < 13 || animals <= 2) {\n  rainForestAcres++;\n  animals += 2;\n}\n\nconsole.log(animals);\n```",
      "options": [
        {
          "text": "2",
          "correct": false
        },
        {
          "text": "4",
          "correct": false
        },
        {
          "text": "6",
          "correct": true
        },
        {
          "text": "8\n\n[Reference MDN JavaScript Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 108,
      "question": "Which snippet could you add to this code to print \"YOU GOT THIS\" to the console?\n\n```js\nlet cipherText = [...'YZOGUT QGMORTZ MTRHTILS'];\nlet plainText = '';\n\n/* Missing Snippet */\n\nconsole.log(plainText); //Prints YOU GOT THIS\n```",
      "options": [
        {
          "text": "A\n\n```js\nfor (let key of cipherText.keys()) {\n  plainText += key % 2 === 0 ? key : ' ';\n}\n```",
          "correct": false
        },
        {
          "text": "B\n\n```js\nfor (let [index, value] of cipherText.entries()) {\n  plainText += index % 2 !== 0 ? value : '';\n}\n```",
          "correct": false
        },
        {
          "text": "C\n\n```js\nfor (let [index, value] of cipherText.entries()) {\n  plainText += index % 2 === 0 ? value : '';\n}\n```",
          "correct": true
        },
        {
          "text": "D\n\n```js\nfor (let value of cipherText) {\n  plainText += value;\n}\n```\n\n1. [Reference MDN JavaScript Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)\n2. [Reference MDN JavaScript Array entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)\n3. [Reference MDN JavaScript Remainder/Modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 109,
      "question": "Which Pokemon will be logged to the console?\n\n```js\nvar pokedex = ['Snorlax', 'Jigglypuff', 'Charmander', 'Squirtle'];\npokedex.pop();\nconsole.log(pokedex.pop());\n```",
      "options": [
        {
          "text": "Charmander",
          "correct": true
        },
        {
          "text": "Jigglypuff",
          "correct": false
        },
        {
          "text": "Snorlax",
          "correct": false
        },
        {
          "text": "Squirtle",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 110,
      "question": "Which statement can be used to select the element from the DOM containing the text \"The LinkedIn Learning library has great JavaScript courses\" from this markup?\n\n```html\n<h1 class=\"content\">LinkedIn Learning</h1>\n<div class=\"content\">\n  <span class=\"content\">The LinkedIn Learning library has great JavaScript courses!</span>\n</div>\n```",
      "options": [
        {
          "text": "document.querySelector(\"div.content\")",
          "correct": false
        },
        {
          "text": "document.querySelector(\"span.content\")",
          "correct": true
        },
        {
          "text": "document.querySelector(\".content\")",
          "correct": false
        },
        {
          "text": "document.querySelector(\"div.span\")",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 111,
      "question": "Which value is not falsey?",
      "options": [
        {
          "text": "`[]`",
          "correct": true
        },
        {
          "text": "`undefined`",
          "correct": false
        },
        {
          "text": "`0`",
          "correct": false
        },
        {
          "text": "`null`\n\n[Reference Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 112,
      "question": "What line of code causes this code segment to throw an error?\n\n```js\nconst lion = 1;\nlet tiger = 2;\nvar bear;\n\n++lion;\nbear += lion + tiger;\ntiger++;\n```",
      "options": [
        {
          "text": "`line 5, because lion cannot be reassigned a value`",
          "correct": true
        },
        {
          "text": "`line 6, because the += operator cannot be used with the undefined variable bear`",
          "correct": false
        },
        {
          "text": "`line 5, because the prefix (++) operator does not exist in JavaScript`",
          "correct": false
        },
        {
          "text": "`line 3, because the variable bear is left undefined`\n\n1. [Reference const in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)\n2. [Reference TypeError: invalid assignment to const \"x\"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 113,
      "question": "What will be the value of `result` after running this code?\n\n```js\nconst person = { name: 'Dave', age: 40, hairColor: 'blue' };\nconst result = Object.keys(person).map((x) => x.toUpperCase());\n```",
      "options": [
        {
          "text": "It will throw a TypeError.",
          "correct": false
        },
        {
          "text": "`[\"Name\", \"Age\", \"HairColor\"]`",
          "correct": false
        },
        {
          "text": "`[\"DAVE\", 40, \"BLUE\"]`",
          "correct": false
        },
        {
          "text": "`[\"NAME\", \"AGE\", \"HAIRCOLOR\"]`\n\n1. [Reference Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)\n2. [Reference Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)\n3. [Reference String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 114,
      "question": "Which snippet could you insert to this code to print \"swim\" to the console?\n\n```js\nlet animals = [\"eagle\", \"osprey\", \"salmon\"];\nlet key = animal => animal === \"salmon\";\n\nif(/* Insert Snippet Here */){\n  console.log(\"swim\");\n}\n```",
      "options": [
        {
          "text": "`animals.every(key)`",
          "correct": false
        },
        {
          "text": "`animals.some(key).length === 1`",
          "correct": false
        },
        {
          "text": "`animals.filter(key) === true`",
          "correct": false
        },
        {
          "text": "`animals.some(key)`\n\n[Reference Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 115,
      "question": "What is the output of this code?\n\n```js\nclass RainForest {\n  static minimumRainFall = 60;\n}\n\nlet congo = new RainForest();\nRainForest.minimumRainFall = 80;\nconsole.log(congo.minimumRainFall);\n```",
      "options": [
        {
          "text": "`undefined`",
          "correct": true
        },
        {
          "text": "`60`",
          "correct": false
        },
        {
          "text": "`80`",
          "correct": false
        },
        {
          "text": "`None of the above, as static is not a feature in Javascript.`\n\n[Reference Classes static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 116,
      "question": "How can you attempt to access the property `a.b` on `obj` without throwing an error if a is undefined?\n\n```js\nlet obj = {};\n```",
      "options": [
        {
          "text": "`obj?.a.b`",
          "correct": false
        },
        {
          "text": "`obj.a?.b`",
          "correct": true
        },
        {
          "text": "`obj[a][b]`",
          "correct": false
        },
        {
          "text": "`obj.?a.?b`\n\n[Reference Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 117,
      "question": "What happens when you run this code?\n\n```js\nif (true) {\n  var x = 5;\n  const y = 6;\n  let z = 7;\n}\nconsole.log(x + y + z);\n```",
      "options": [
        {
          "text": "It will throw a `ReferenceError` about `x`.",
          "correct": false
        },
        {
          "text": "It will print `18`.",
          "correct": false
        },
        {
          "text": "It will print `undefined`.",
          "correct": false
        },
        {
          "text": "It will throw a `ReferenceError` about `y`.\n\n[Reference let statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 118,
      "question": "What does this code print to the console?\n\n```js\nconst x = [1, 2];\nconst y = [5, 7];\nconst z = [...x, ...y];\nconsole.log(z);\n```",
      "options": [
        {
          "text": "`[1,2,5,7]`",
          "correct": true
        },
        {
          "text": "`[[1, 2], [5, 7]]`",
          "correct": false
        },
        {
          "text": "`[2,7]`",
          "correct": false
        },
        {
          "text": "`[2,1,7,5]`\n\n[Reference spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 119,
      "question": "Given this code, which statement will be evaluated as false?\n\n```js\nconst a = { x: 1 };\nconst b = { x: 1 };\n```",
      "options": [
        {
          "text": "`a['x'] === b['x']`",
          "correct": false
        },
        {
          "text": "`a != b`",
          "correct": false
        },
        {
          "text": "`a === b`",
          "correct": true
        },
        {
          "text": "`a.x === b.x`",
          "correct": false
        }
      ],
      "reference": "http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html"
    },
    {
      "id": 120,
      "question": "What will this code log to the console?\n\n```js\nconsole.log(typeof 41.1);\n```",
      "options": [
        {
          "text": "`Nothing. It resuults in a ReferenceError.`",
          "correct": false
        },
        {
          "text": "`decimal`",
          "correct": false
        },
        {
          "text": "`float`",
          "correct": false
        },
        {
          "text": "`number`",
          "correct": true
        }
      ],
      "reference": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#basic_usage"
    },
    {
      "id": 121,
      "question": "What is the output of this code?\n\n```js\nlet scores = [];\nscores.push(1, 2);\nscores.pop();\nscores.push(3, 4);\nscores.pop();\nscore = scores.reduce((a, b) => a + b);\nconsole.log(score);\n```",
      "options": [
        {
          "text": "`3`",
          "correct": false
        },
        {
          "text": "`4`",
          "correct": true
        },
        {
          "text": "`6`",
          "correct": false
        },
        {
          "text": "`7`\n\n1. [Reference Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)\n2. [Reference Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)\n3. [Reference Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 122,
      "question": "What does this code print to the console?\n\n```js\nlet bear = {\n  sound: 'roar',\n  roar() {\n    console.log(this.sound);\n  },\n};\n\nbear.sound = 'grunt';\nlet bearSound = bear.roar;\nbearSound();\n```",
      "options": [
        {
          "text": "`Nothing is printed to the console.`",
          "correct": false
        },
        {
          "text": "`grunt`",
          "correct": false
        },
        {
          "text": "`undefined`",
          "correct": true
        },
        {
          "text": "`roar`",
          "correct": false
        }
      ],
      "reference": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"
    },
    {
      "id": 123,
      "question": "What is the output of this code?\n\n```js\nvar cat = { name: 'Athena' };\n\nfunction swap(feline) {\n  feline.name = 'Wild';\n  feline = { name: 'Tabby' };\n}\n\nswap(cat);\nconsole.log(cat.name);\n```",
      "options": [
        {
          "text": "undefined",
          "correct": false
        },
        {
          "text": "Wild",
          "correct": true
        },
        {
          "text": "Tabby",
          "correct": false
        },
        {
          "text": "Athena",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 124,
      "question": "What will this code output to the log?\n\n```js\nvar thing;\nlet func = (str = 'no arg') => {\n  console.log(str);\n};\nfunc(thing);\nfunc(null);\n```",
      "options": [
        {
          "text": "null no arg",
          "correct": false
        },
        {
          "text": "no arg no arg",
          "correct": false
        },
        {
          "text": "null null",
          "correct": false
        },
        {
          "text": "no arg null",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 125,
      "question": "What will this code print to the console?\n\n```js\nconst myFunc = () => {\n  const a = 2;\n  return () => console.log('a is ' + a);\n};\nconst a = 1;\nconst test = myFunc();\ntest();\n```",
      "options": [
        {
          "text": "a is 1",
          "correct": false
        },
        {
          "text": "a is undefined",
          "correct": false
        },
        {
          "text": "It won't print anything.",
          "correct": false
        },
        {
          "text": "a is 2",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 126,
      "question": "What will this code print to the console?\n\n```js\nconst myFunc = (num1, num2 = 2, num3 = 2) => {\n  return num1 + num2 + num3;\n};\nlet values = [1, 5];\nconst test = myFunc(2, ...values);\nconsole.log(test);\n```",
      "options": [
        {
          "text": "8",
          "correct": true
        },
        {
          "text": "6",
          "correct": false
        },
        {
          "text": "2",
          "correct": false
        },
        {
          "text": "12",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 127,
      "question": "Which code would you use to access the Irish flag?\n\n```js\nvar flagsJSON =\n  '{ \"countries\" : [' +\n  '{ \"country\":\"Ireland\" , \"flag\":\"🇮🇪\" },' +\n  '{ \"country\":\"Serbia\" , \"flag\":\"🇷🇸\" },' +\n  '{ \"country\":\"Peru\" , \"flag\":\"🇵🇪\" } ]}';\n\nvar flagDatabase = JSON.parse(flagsJSON);\n```",
      "options": [
        {
          "text": "flagDatabase.countries[1].flag",
          "correct": false
        },
        {
          "text": "flagDatabase.countries[0].flag",
          "correct": true
        },
        {
          "text": "flagDatabase[1].flag",
          "correct": false
        },
        {
          "text": "flagsJSON.countries[0].flag",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 128,
      "question": "Which snippet allows the acresOfRainForest variable to increase?\n\n```js\nlet conservation = true;\nlet deforestation = false;\nlet acresOfRainForest = 100;\nif (/* Snipped goes here */){\n    ++acresOfRainForest;\n}\n```",
      "options": [
        {
          "text": "conservation && !deforestation",
          "correct": true
        },
        {
          "text": "!deforestation && !conservation",
          "correct": false
        },
        {
          "text": "!conservation || deforestation",
          "correct": false
        },
        {
          "text": "deforestation && conservation || deforestation",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 129,
      "question": "Which of these evaluate to true?",
      "options": [
        {
          "text": "Boolean(\"false\")",
          "correct": true
        },
        {
          "text": "Boolean(\"\")",
          "correct": false
        },
        {
          "text": "Boolean(0)",
          "correct": false
        },
        {
          "text": "Boolean(NaN)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 130,
      "question": "How would you add a data item named animal with a value of sloth to local storage for the current domain?",
      "options": [
        {
          "text": "LocalStorage.setItem(\"animal\",\"sloth\");",
          "correct": false
        },
        {
          "text": "document.localStorage.setItem(\"animal\",\"sloth\");",
          "correct": false
        },
        {
          "text": "localStorage.setItem({animal:\"sloth\"});",
          "correct": false
        },
        {
          "text": "localStorage.setItem(\"animal\",\"sloth\");",
          "correct": true
        }
      ],
      "reference": "https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem"
    },
    {
      "id": 131,
      "question": "What value is printed to the console after this code execute?\n\n```js\nlet cat = Object.create({ type: 'lion' });\ncat.size = 'large';\n\nlet copyCat = { ...cat };\ncat.type = 'tiger';\n\nconsole.log(copyCat.type, copyCat.size);\n```",
      "options": [
        {
          "text": "tiger large",
          "correct": false
        },
        {
          "text": "lion undefined",
          "correct": false
        },
        {
          "text": "undefined large",
          "correct": true
        },
        {
          "text": "lion large",
          "correct": false
        }
      ],
      "reference": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"
    },
    {
      "id": 132,
      "question": "What does this code print to the console?\n\n```js\nlet animals = [{ type: 'lion' }, 'tiger'];\nlet clones = animals.slice();\n\nclones[0].type = 'bear';\nclones[1] = 'sheep';\n\nconsole.log(animals[0].type, clones[0].type);\nconsole.log(animals[1], clones[1]);\n```",
      "options": [
        {
          "text": "bear bear\n      tiger sheep",
          "correct": true
        },
        {
          "text": "lion bear\n      sheep sheep",
          "correct": false
        },
        {
          "text": "bear bear\n      tiger tiger",
          "correct": false
        },
        {
          "text": "lion bear\n      tiger sheep",
          "correct": false
        }
      ],
      "reference": "https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem"
    },
    {
      "id": 133,
      "question": "What will be the output of the following code snippet?\n\n```javascript\na=5;\nb=4;\nalert(a++(+(+(+b))));\n```",
      "options": [
        {
          "text": "18",
          "correct": false
        },
        {
          "text": "10",
          "correct": false
        },
        {
          "text": "9",
          "correct": true
        },
        {
          "text": "20",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 134,
      "question": "Which snippet could you add to this code to print \"{\"type\": \"tiger\"}\" to the console?\n\n```js\nlet cat = { type: \"tiger\", size: \"large\" };\n\nlet json = /* Snippet here */;\n\nconsole.log(json); // print {\"type\":\"tiger\"}\n```",
      "options": [
        {
          "text": "`cat.toJSON(\"type\");`",
          "correct": false
        },
        {
          "text": "`JSON.stringify(cat, [\"type\"]);`",
          "correct": true
        },
        {
          "text": "`JSON.stringify(cat);`",
          "correct": false
        },
        {
          "text": "`JSON.stringify(cat, /type/);`",
          "correct": false
        }
      ],
      "reference": "https://www.w3schools.com/jsref/jsref_stringify.asp"
    },
    {
      "id": 135,
      "question": "Which document method is not used to get a reference to a DOM node?",
      "options": [
        {
          "text": "document.getNode();",
          "correct": true
        },
        {
          "text": "document.getElementsByClassName();",
          "correct": false
        },
        {
          "text": "document.querySelectorAll();",
          "correct": false
        },
        {
          "text": "document.querySelector();",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 136,
      "question": "In JavaScript, all objects inherit a built-in property from a **\\*\\*\\*\\***\\_\\_\\_**\\*\\*\\*\\***.",
      "options": [
        {
          "text": "node",
          "correct": false
        },
        {
          "text": "instance variable",
          "correct": false
        },
        {
          "text": "prototype",
          "correct": true
        },
        {
          "text": "accessor",
          "correct": false
        }
      ],
      "reference": "https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/"
    },
    {
      "id": 137,
      "question": "Which of the following are not server-side Javascript objects?",
      "options": [
        {
          "text": "Date",
          "correct": false
        },
        {
          "text": "FileUpload",
          "correct": true
        },
        {
          "text": "Function",
          "correct": false
        },
        {
          "text": "All of the above",
          "correct": false
        }
      ],
      "reference": "https://docs.oracle.com/cd/E19957-01/816-6411-10/jsserv.htm#1035757"
    },
    {
      "id": 138,
      "question": "What will be the output of the following code snippet?\n\n```javascript\nconst obj1 = { first: 20, second: 30, first: 50 };\nconsole.log(obj1);\n```",
      "options": [
        {
          "text": "first: 30 , second: 50",
          "correct": false
        },
        {
          "text": "first: 50 , second: 30",
          "correct": true
        },
        {
          "text": "first: 30 , second: 20",
          "correct": false
        },
        {
          "text": "None of the above",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 139,
      "question": "Which object in Javascript doesn’t have a prototype?",
      "options": [
        {
          "text": "Base Object",
          "correct": true
        },
        {
          "text": "All objects have prototype",
          "correct": false
        },
        {
          "text": "None of the objects have prototype",
          "correct": false
        },
        {
          "text": "None of the above",
          "correct": false
        }
      ],
      "reference": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes"
    },
    {
      "id": 140,
      "question": "What does … operator do in JS?",
      "options": [
        {
          "text": "Used to spread iterables to individual elements",
          "correct": true
        },
        {
          "text": "Describe datatype of undefined",
          "correct": false
        },
        {
          "text": "No such operator exists",
          "correct": false
        },
        {
          "text": "None of the above",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 141,
      "question": "How to stop an interval timer in Javascript?",
      "options": [
        {
          "text": "clearInterval",
          "correct": true
        },
        {
          "text": "clearTimer",
          "correct": false
        },
        {
          "text": "intervalOver",
          "correct": false
        },
        {
          "text": "None of the above",
          "correct": false
        }
      ],
      "reference": "https://www.interviewbit.com/javascript-mcq/"
    },
    {
      "id": 142,
      "question": "What will be the output of the following code snippet?\n\n```javascript\nprint(typeof NaN);\n```",
      "options": [
        {
          "text": "Object",
          "correct": false
        },
        {
          "text": "Number",
          "correct": true
        },
        {
          "text": "String",
          "correct": false
        },
        {
          "text": "None of the above",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 143,
      "question": "What will be the output of the following code snippet?\n\n```javascript\n<script type=\"text/javascript\">a = 5 + \"9\"; document.write(a);</script>\n```",
      "options": [
        {
          "text": "Compilation Error",
          "correct": false
        },
        {
          "text": "14",
          "correct": false
        },
        {
          "text": "Runtime Error",
          "correct": false
        },
        {
          "text": "59",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 144,
      "question": "Which of the following methods can be used to display data in some form using Javascript?",
      "options": [
        {
          "text": "document.write()",
          "correct": false
        },
        {
          "text": "console.log()",
          "correct": false
        },
        {
          "text": "window.alert()",
          "correct": false
        },
        {
          "text": "All of the above",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 145,
      "question": "What value is assigned to total after this code executes?\n\n```javascript\nfunction sum(num1, num2 = 2, num3 = 3) {\n  return num1 + num2 + num3;\n}\nlet values = [1, 5];\nlet total = sum(4, ...values);\n```",
      "options": [
        {
          "text": "10",
          "correct": true
        },
        {
          "text": "6",
          "correct": false
        },
        {
          "text": "7",
          "correct": false
        },
        {
          "text": "8\n\n[Reference: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 146,
      "question": "Which statement is applicable to the defer attribute of the HTML <script> tag?",
      "options": [
        {
          "text": "defer allows the browser to continue processing the page while the script loads in the background.",
          "correct": true
        },
        {
          "text": "defer causes the script to be loaded from the backup content delivery network (CDN).",
          "correct": false
        },
        {
          "text": "defer blocks the browser from processing HTML below the tag until the script is completely loaded.",
          "correct": false
        },
        {
          "text": "defer lazy loads the script, causing it to download only when it is called by another script on the page.\n\n[Reference: defer html script attribute](https://www.w3schools.com/tags/att_script_defer.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 147,
      "question": "Which method of a class is called to initialize an object of that class?",
      "options": [
        {
          "text": "init()",
          "correct": false
        },
        {
          "text": "create()",
          "correct": false
        },
        {
          "text": "new()",
          "correct": false
        },
        {
          "text": "constructor()\n\n[Reference: constructor method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 148,
      "question": "Which expression evaluates to true?",
      "options": [
        {
          "text": "Boolean(NaN)",
          "correct": false
        },
        {
          "text": "Boolean(0)",
          "correct": false
        },
        {
          "text": "Boolean(\"false\")",
          "correct": true
        },
        {
          "text": "Boolean(\"\")\n\n[Reference: Boolean object](https://www.w3schools.com/js/js_booleans.asp)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 149,
      "question": "How would you check if the word \"pot\" is in the word \"potato\"?",
      "options": [
        {
          "text": "\"pot\".indexOf(\"potato\") !== -1",
          "correct": false
        },
        {
          "text": "\"potato\".includes(\"Pot\")",
          "correct": false
        },
        {
          "text": "\"potato\".includes(\"pot\")",
          "correct": true
        },
        {
          "text": "\"potato\".contains(\"pot\");\n\n[Reference: String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 150,
      "question": "Which collection object allows a unique value to be inserted only once?",
      "options": [
        {
          "text": "Map",
          "correct": false
        },
        {
          "text": "Array",
          "correct": false
        },
        {
          "text": "Set",
          "correct": true
        },
        {
          "text": "Object\n\n[Reference: developer.mozilla Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 151,
      "question": "How would you change the color of this header to pink?\n\n```javascript\n<h2 id=\"cleverest\">girls</h2>\n```",
      "options": [
        {
          "text": "document.getElementByName(\"cleverest\").style.color = \"pink\";",
          "correct": false
        },
        {
          "text": "document.getElementsByTagName(\"h2\").style.color = \"pink\";",
          "correct": false
        },
        {
          "text": "document.getElementByName(\"h2\").style.color = \"pink\";",
          "correct": false
        },
        {
          "text": "document.getElementById(\"cleverest\").style.color = \"pink\";\n\n[Reference: W3Schools HTML DOM Style color Property](https://www.w3schools.com/jsref/prop_style_color.asp)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 152,
      "question": "Which line is missing from this code if you expect the code to evaluate to true?\n\n```js\nvar compare = function (test1, test2) {\n  // Missing line\n};\n\ncompare(1078, '1078'); // yields true\n```",
      "options": [
        {
          "text": "`test1==test2;`",
          "correct": false
        },
        {
          "text": "return test1===test2;",
          "correct": false
        },
        {
          "text": "return test1==test2;",
          "correct": true
        },
        {
          "text": "return test1!=test2;\n\n[Reference: MDN Equality Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 153,
      "question": "What is the output of this code?\n\n```js\nif (true) {\n  var first = 'You';\n}\n\nfunction fScope() {\n  var second = 'got this!';\n}\nfScope();\nconsole.log(first);\nconsole.log(second);\n```",
      "options": [
        {
          "text": "You  \n       undefined",
          "correct": false
        },
        {
          "text": "You  \n       ReferenceError",
          "correct": true
        },
        {
          "text": "undefined  \n       undefined",
          "correct": false
        },
        {
          "text": "You  \n       got this!",
          "correct": false
        },
        {
          "text": "40",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 154,
      "question": "Events related to the browser window can be handled by?",
      "options": [
        {
          "text": "Onclicks",
          "correct": false
        },
        {
          "text": "Window",
          "correct": true
        },
        {
          "text": "querySelector",
          "correct": false
        },
        {
          "text": "None of the above\n\n[Reference: GeeksForGeeks](https://www.geeksforgeeks.org/javascript-course-quiz-1/)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 155,
      "question": "How do you define a function in JavaScript?",
      "options": [
        {
          "text": "function myFunction() {}",
          "correct": true
        },
        {
          "text": "def myFunction() {}",
          "correct": false
        },
        {
          "text": "var myFunction = () => {}",
          "correct": false
        },
        {
          "text": "func myFunction() {}",
          "correct": false
        }
      ],
      "reference": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
    },
    {
      "id": 156,
      "question": "Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?",
      "options": [
        {
          "text": "You are calling a method named reduce on an object that's declared but has no value.",
          "correct": true
        },
        {
          "text": "You are calling a method named reduce on an object that does not exist.",
          "correct": false
        },
        {
          "text": "You are calling a method named reduce on an empty array.",
          "correct": false
        },
        {
          "text": "You are calling a method named reduce on an object that has a null value.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 157,
      "question": "Which of the following methods can be used to display data in some form using Javascript?",
      "options": [
        {
          "text": "document.write()",
          "correct": false
        },
        {
          "text": "console.log()",
          "correct": false
        },
        {
          "text": "window.alert()",
          "correct": false
        },
        {
          "text": "All of the above",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 158,
      "question": "Which document method is not used to get a reference to a DOM node?",
      "options": [
        {
          "text": "document.getNode();",
          "correct": true
        },
        {
          "text": "document.getElementsByClassName();",
          "correct": false
        },
        {
          "text": "document.querySelectorAll();",
          "correct": false
        },
        {
          "text": "document.querySelector();",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 159,
      "question": "Which of these is a valid variable name?",
      "options": [
        {
          "text": "5thItem",
          "correct": false
        },
        {
          "text": "firstName",
          "correct": true
        },
        {
          "text": "grand total",
          "correct": false
        },
        {
          "text": "function",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 160,
      "question": "What function is used in JavaScript to schedule a function to run after a specified number of milliseconds?",
      "options": [
        {
          "text": "setTimeout()",
          "correct": true
        },
        {
          "text": "setInterval()",
          "correct": false
        },
        {
          "text": "delay()",
          "correct": false
        },
        {
          "text": "wait()",
          "correct": false
        }
      ],
      "reference": "https://www.w3schools.com/js/js_timing.asp"
    },
    {
      "id": 161,
      "question": "Which of the following is a server-side Java Script object?",
      "options": [
        {
          "text": "Function",
          "correct": false
        },
        {
          "text": "File",
          "correct": true
        },
        {
          "text": "FileUpload",
          "correct": false
        },
        {
          "text": "Date",
          "correct": false
        }
      ],
      "reference": "https://www.wscubetech.com/quiz-result.html"
    },
    {
      "id": 162,
      "question": "Which statement best describes the var keyword's scope in JavaScript?",
      "options": [
        {
          "text": "Block scope",
          "correct": false
        },
        {
          "text": "Function scope",
          "correct": true
        },
        {
          "text": "Global scope",
          "correct": false
        },
        {
          "text": "Instance scope",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 163,
      "question": "What will be logged to the console?\n\n```js\nconst foo = () => console.log('First');\nconst bar = () => setTimeout(() => console.log('Second'), 0);\nfoo();\nbar();\nconsole.log('Third');\n```",
      "options": [
        {
          "text": "Second, First, Third",
          "correct": false
        },
        {
          "text": "First, Third, Second",
          "correct": true
        },
        {
          "text": "First, Second, Third",
          "correct": false
        },
        {
          "text": "Third, First, Second",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 164,
      "question": "What will be the output of running this code?\n\n```js\nfunction scream(words) {\n  return words.toUpperCase() + '!!!';\n}\n\nscream('yay');\n```",
      "options": [
        {
          "text": "YAY!!!",
          "correct": true
        },
        {
          "text": "ReferenceError",
          "correct": false
        },
        {
          "text": "Undefined",
          "correct": false
        },
        {
          "text": "TypeError",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 165,
      "question": "What is the output of the following code?\n\n```js\nconst obj = { a: 1, b: 2, c: 3 };\nconst { a, ...rest } = obj;\nconsole.log(rest);\n```",
      "options": [
        {
          "text": "`{ a: 1 }`",
          "correct": false
        },
        {
          "text": "`{ b: 2, c: 3 }`",
          "correct": true
        },
        {
          "text": "`{ a: 1, b: 2, c: 3 }`",
          "correct": false
        },
        {
          "text": "`undefined`\n\n[Reference Object Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 166,
      "question": "Which method is used to create a new array with all elements that pass a test implemented by a provided function?",
      "options": [
        {
          "text": "`map()`",
          "correct": false
        },
        {
          "text": "`filter()`",
          "correct": true
        },
        {
          "text": "`reduce()`",
          "correct": false
        },
        {
          "text": "`forEach()`\n\n[Reference Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 167,
      "question": "What is the difference between `null` and `undefined`?",
      "options": [
        {
          "text": "They are exactly the same",
          "correct": false
        },
        {
          "text": "`null` is an assignment value representing no value, while `undefined` means a variable has been declared but not assigned a value",
          "correct": true
        },
        {
          "text": "`undefined` is an assignment value, while `null` means undeclared",
          "correct": false
        },
        {
          "text": "`null` is a string, `undefined` is a boolean\n\n[Reference null vs undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 168,
      "question": "What will this code output?\n\n```js\nconst promise1 = Promise.resolve(3);\nconst promise2 = new Promise((resolve) => setTimeout(() => resolve('foo'), 1000));\nconst promise3 = Promise.resolve(42);\n\nPromise.all([promise1, promise2, promise3]).then((values) => {\n  console.log(values);\n});\n```",
      "options": [
        {
          "text": "`[3, 'foo', 42]` immediately",
          "correct": false
        },
        {
          "text": "`[3, 'foo', 42]` after 1 second",
          "correct": true
        },
        {
          "text": "`['foo', 3, 42]` after 1 second",
          "correct": false
        },
        {
          "text": "The promises will execute in random order\n\n[Reference Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 169,
      "question": "Which statement about arrow functions is correct?",
      "options": [
        {
          "text": "Arrow functions have their own `this` binding",
          "correct": false
        },
        {
          "text": "Arrow functions inherit `this` from the enclosing scope",
          "correct": true
        },
        {
          "text": "Arrow functions cannot be used as methods",
          "correct": false
        },
        {
          "text": "Arrow functions always return a value\n\n[Reference Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 170,
      "question": "What is the output of this code?\n\n```js\nconst arr = [1, 2, 3, 4, 5];\nconst result = arr.reduce((acc, curr) => acc + curr, 0);\nconsole.log(result);\n```",
      "options": [
        {
          "text": "`[1, 2, 3, 4, 5]`",
          "correct": false
        },
        {
          "text": "`5`",
          "correct": false
        },
        {
          "text": "`15`",
          "correct": true
        },
        {
          "text": "`0`\n\n[Reference Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 171,
      "question": "Which method is used to add one or more elements to the end of an array?",
      "options": [
        {
          "text": "`unshift()`",
          "correct": false
        },
        {
          "text": "`push()`",
          "correct": true
        },
        {
          "text": "`concat()`",
          "correct": false
        },
        {
          "text": "`splice()`\n\n[Reference Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 172,
      "question": "What is the correct way to import a default export from a module?\n\n```js\n// math.js\nexport default function add(a, b) {\n  return a + b;\n}\n```",
      "options": [
        {
          "text": "`import add from './math.js';`",
          "correct": true
        },
        {
          "text": "`import { add } from './math.js';`",
          "correct": false
        },
        {
          "text": "`import * as add from './math.js';`",
          "correct": false
        },
        {
          "text": "`import default add from './math.js';`\n\n[Reference ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 173,
      "question": "What will this code print?\n\n```js\nconst obj = {\n  name: 'John',\n  greet: function () {\n    console.log(`Hello, ${this.name}`);\n  },\n};\n\nconst greetFunc = obj.greet;\ngreetFunc();\n```",
      "options": [
        {
          "text": "`Hello, John`",
          "correct": false
        },
        {
          "text": "`Hello, undefined`",
          "correct": true
        },
        {
          "text": "`Hello, `",
          "correct": false
        },
        {
          "text": "`TypeError`\n\n[Reference this binding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 174,
      "question": "Which operator is used to check if a property exists in an object?",
      "options": [
        {
          "text": "`hasOwnProperty()`",
          "correct": false
        },
        {
          "text": "`in`",
          "correct": true
        },
        {
          "text": "`exists`",
          "correct": false
        },
        {
          "text": "`contains`\n\n```js\nconst obj = { name: 'John', age: 30 };\nconsole.log('name' in obj); // true\n```\n\n[Reference in operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 175,
      "question": "What is the output of this code?\n\n```js\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map((num) => num * 2);\nconsole.log(numbers);\nconsole.log(doubled);\n```",
      "options": [
        {
          "text": "`[1, 2, 3, 4, 5]` and `[2, 4, 6, 8, 10]`",
          "correct": true
        },
        {
          "text": "`[2, 4, 6, 8, 10]` and `[2, 4, 6, 8, 10]`",
          "correct": false
        },
        {
          "text": "`[1, 2, 3, 4, 5]` and `[1, 2, 3, 4, 5]`",
          "correct": false
        },
        {
          "text": "`undefined` and `[2, 4, 6, 8, 10]`\n\n[Reference Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 176,
      "question": "Which method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth?",
      "options": [
        {
          "text": "`concat()`",
          "correct": false
        },
        {
          "text": "`flat()`",
          "correct": true
        },
        {
          "text": "`join()`",
          "correct": false
        },
        {
          "text": "`merge()`\n\n```js\nconst arr = [1, [2, 3], [4, [5, 6]]];\nconsole.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]\n```\n\n[Reference Array.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 177,
      "question": "What is the correct syntax for a template literal?",
      "options": [
        {
          "text": "`'Hello ' + name + '!'`",
          "correct": false
        },
        {
          "text": "`` `Hello ${name}!` ``",
          "correct": true
        },
        {
          "text": "`\"Hello #{name}!\"`",
          "correct": false
        },
        {
          "text": "`'Hello ${name}!'`\n\n[Reference Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 178,
      "question": "What will this async/await code output?\n\n```js\nasync function fetchData() {\n  try {\n    const data = await Promise.resolve('Success!');\n    console.log(data);\n  } catch (error) {\n    console.log('Error:', error);\n  }\n}\n\nfetchData();\n```",
      "options": [
        {
          "text": "`Success!`",
          "correct": true
        },
        {
          "text": "`Error: Success!`",
          "correct": false
        },
        {
          "text": "`undefined`",
          "correct": false
        },
        {
          "text": "`Promise { <pending> }`\n\n[Reference async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 179,
      "question": "Which method returns the first element in an array that satisfies a provided testing function?",
      "options": [
        {
          "text": "`find()`",
          "correct": true
        },
        {
          "text": "`filter()`",
          "correct": false
        },
        {
          "text": "`some()`",
          "correct": false
        },
        {
          "text": "`every()`\n\n[Reference Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 180,
      "question": "What is the output of this code?\n\n```js\nconst set = new Set([1, 2, 2, 3, 3, 4]);\nconsole.log(set.size);\nconsole.log([...set]);\n```",
      "options": [
        {
          "text": "`6` and `[1, 2, 2, 3, 3, 4]`",
          "correct": false
        },
        {
          "text": "`4` and `[1, 2, 3, 4]`",
          "correct": true
        },
        {
          "text": "`4` and `{1, 2, 3, 4}`",
          "correct": false
        },
        {
          "text": "`6` and `[1, 2, 3, 4]`\n\n[Reference Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 181,
      "question": "Which statement about JavaScript classes is correct?",
      "options": [
        {
          "text": "Classes are hoisted like function declarations",
          "correct": false
        },
        {
          "text": "Classes are not hoisted and must be declared before use",
          "correct": true
        },
        {
          "text": "Classes can only have static methods",
          "correct": false
        },
        {
          "text": "Classes cannot have constructors\n\n[Reference JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 182,
      "question": "What will this code output?\n\n```js\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { b: 3, c: 4 };\nconst merged = { ...obj1, ...obj2 };\nconsole.log(merged);\n```",
      "options": [
        {
          "text": "`{ a: 1, b: 2, c: 4 }`",
          "correct": false
        },
        {
          "text": "`{ a: 1, b: 3, c: 4 }`",
          "correct": true
        },
        {
          "text": "`{ a: 1, b: 2, b: 3, c: 4 }`",
          "correct": false
        },
        {
          "text": "`Error: duplicate property 'b'`\n\n[Reference Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 183,
      "question": "Which method is used to execute a function once for each array element?",
      "options": [
        {
          "text": "`map()`",
          "correct": false
        },
        {
          "text": "`forEach()`",
          "correct": true
        },
        {
          "text": "`filter()`",
          "correct": false
        },
        {
          "text": "`reduce()`\n\n[Reference Array.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 184,
      "question": "What is the correct way to create a Promise that resolves after 2 seconds?",
      "options": [
        {
          "text": "`new Promise(resolve => resolve(), 2000)`",
          "correct": false
        },
        {
          "text": "`new Promise(resolve => setTimeout(resolve, 2000))`",
          "correct": true
        },
        {
          "text": "`Promise.resolve().delay(2000)`",
          "correct": false
        },
        {
          "text": "`Promise.timeout(2000)`\n\n[Reference Promise Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 185,
      "question": "What will this code output?\n\n```js\nconst arr = [1, 2, 3];\narr.length = 5;\nconsole.log(arr);\nconsole.log(arr[4]);\n```",
      "options": [
        {
          "text": "`[1, 2, 3, undefined, undefined]` and `undefined`",
          "correct": false
        },
        {
          "text": "`[1, 2, 3, <2 empty items>]` and `undefined`",
          "correct": true
        },
        {
          "text": "`[1, 2, 3, null, null]` and `null`",
          "correct": false
        },
        {
          "text": "`Error: Cannot set length`\n\n[Reference Array Length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 186,
      "question": "Which method is used to test whether at least one element in an array passes a test?",
      "options": [
        {
          "text": "`every()`",
          "correct": false
        },
        {
          "text": "`some()`",
          "correct": true
        },
        {
          "text": "`includes()`",
          "correct": false
        },
        {
          "text": "`find()`\n\n[Reference Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 187,
      "question": "What is the output of this code?\n\n```js\nconst func = (a = 5, b = a * 2) => a + b;\nconsole.log(func());\nconsole.log(func(3));\n```",
      "options": [
        {
          "text": "`15` and `9`",
          "correct": false
        },
        {
          "text": "`15` and `9`",
          "correct": true
        },
        {
          "text": "`15` and `15`",
          "correct": false
        },
        {
          "text": "`NaN` and `NaN`\n\n[Reference Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 188,
      "question": "Which statement about JavaScript modules is correct?",
      "options": [
        {
          "text": "Modules are executed every time they are imported",
          "correct": false
        },
        {
          "text": "Modules are executed only once, the first time they are imported",
          "correct": true
        },
        {
          "text": "Modules cannot export functions",
          "correct": false
        },
        {
          "text": "Modules must have a .js extension\n\n[Reference ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 189,
      "question": "What will this code output?\n\n```js\nconst weakMap = new WeakMap();\nconst obj = {};\nweakMap.set(obj, 'value');\nconsole.log(weakMap.get(obj));\n```",
      "options": [
        {
          "text": "`'value'`",
          "correct": true
        },
        {
          "text": "`undefined`",
          "correct": false
        },
        {
          "text": "`{}`",
          "correct": false
        },
        {
          "text": "`Error: WeakMap is not defined`\n\n[Reference WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 190,
      "question": "Which method creates a new array by calling a function for every array element?",
      "options": [
        {
          "text": "`map()`",
          "correct": true
        },
        {
          "text": "`forEach()`",
          "correct": false
        },
        {
          "text": "`filter()`",
          "correct": false
        },
        {
          "text": "`reduce()`\n\n[Reference Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 191,
      "question": "What is the output of this code?\n\n```js\nconst generator = function* () {\n  yield 1;\n  yield 2;\n  yield 3;\n};\n\nconst gen = generator();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\n```",
      "options": [
        {
          "text": "`1` and `2`",
          "correct": true
        },
        {
          "text": "`1` and `1`",
          "correct": false
        },
        {
          "text": "`[1, 2, 3]` and `[1, 2, 3]`",
          "correct": false
        },
        {
          "text": "`undefined` and `undefined`\n\n[Reference Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 192,
      "question": "Which method is used to determine whether an array includes a certain value?",
      "options": [
        {
          "text": "`contains()`",
          "correct": false
        },
        {
          "text": "`includes()`",
          "correct": true
        },
        {
          "text": "`has()`",
          "correct": false
        },
        {
          "text": "`indexOf()`\n\n[Reference Array.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 193,
      "question": "What will this code output?\n\n```js\nconst proxy = new Proxy(\n  {},\n  {\n    get(target, prop) {\n      return prop in target ? target[prop] : 'Property not found';\n    },\n  },\n);\n\nproxy.name = 'John';\nconsole.log(proxy.name);\nconsole.log(proxy.age);\n```",
      "options": [
        {
          "text": "`'John'` and `'Property not found'`",
          "correct": true
        },
        {
          "text": "`'John'` and `undefined`",
          "correct": false
        },
        {
          "text": "`undefined` and `'Property not found'`",
          "correct": false
        },
        {
          "text": "`Error: Proxy is not defined`\n\n[Reference Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 194,
      "question": "Which statement about JavaScript symbols is correct?",
      "options": [
        {
          "text": "Symbols are strings",
          "correct": false
        },
        {
          "text": "Symbols can be duplicated",
          "correct": false
        },
        {
          "text": "Symbols are unique and immutable",
          "correct": true
        },
        {
          "text": "Symbols are numbers\n\n[Reference Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 195,
      "question": "What is the output of this code?\n\n```js\nconst arr = [1, 2, 3, 4, 5];\nconst [first, , third, ...rest] = arr;\nconsole.log(first, third, rest);\n```",
      "options": [
        {
          "text": "`1 3 [4, 5]`",
          "correct": true
        },
        {
          "text": "`1 2 [3, 4, 5]`",
          "correct": false
        },
        {
          "text": "`1 3 [2, 4, 5]`",
          "correct": false
        },
        {
          "text": "`1 undefined [4, 5]`\n\n[Reference Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 196,
      "question": "Which method is used to create a shallow copy of an array?",
      "options": [
        {
          "text": "`copy()`",
          "correct": false
        },
        {
          "text": "`clone()`",
          "correct": false
        },
        {
          "text": "`slice()`",
          "correct": true
        },
        {
          "text": "`duplicate()`\n\n```js\nconst original = [1, 2, 3];\nconst copy = original.slice();\n```\n\n[Reference Array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 197,
      "question": "What will this code output?\n\n```js\nconst obj = {\n  counter: 0,\n  increment() {\n    this.counter++;\n    return this;\n  },\n  decrement() {\n    this.counter--;\n    return this;\n  },\n};\n\nobj.increment().increment().decrement();\nconsole.log(obj.counter);\n```",
      "options": [
        {
          "text": "`0`",
          "correct": false
        },
        {
          "text": "`1`",
          "correct": true
        },
        {
          "text": "`2`",
          "correct": false
        },
        {
          "text": "`3`\n\n[Reference Method Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 198,
      "question": "Which method is used to convert a string to an integer?",
      "options": [
        {
          "text": "`Number()`",
          "correct": false
        },
        {
          "text": "`parseInt()`",
          "correct": true
        },
        {
          "text": "`parseFloat()`",
          "correct": false
        },
        {
          "text": "`toInteger()`\n\n[Reference parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 199,
      "question": "What is the output of this code?\n\n```js\nconst promise = Promise.reject('Error occurred');\npromise\n  .then((result) => console.log('Success:', result))\n  .catch((error) => console.log('Caught:', error))\n  .finally(() => console.log('Finally executed'));\n```",
      "options": [
        {
          "text": "`Success: Error occurred` and `Finally executed`",
          "correct": false
        },
        {
          "text": "`Caught: Error occurred` and `Finally executed`",
          "correct": true
        },
        {
          "text": "`Finally executed` only",
          "correct": false
        },
        {
          "text": "`Error: Error occurred`\n\n[Reference Promise.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 200,
      "question": "Which method is used to remove and return the last element of an array?",
      "options": [
        {
          "text": "`shift()`",
          "correct": false
        },
        {
          "text": "`pop()`",
          "correct": true
        },
        {
          "text": "`splice()`",
          "correct": false
        },
        {
          "text": "`slice()`\n\n[Reference Array.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 201,
      "question": "What will this code output?\n\n```js\nconst func = async () => {\n  const result = await Promise.all([\n    Promise.resolve(1),\n    Promise.resolve(2),\n    Promise.reject('Error'),\n  ]);\n  return result;\n};\n\nfunc().catch((error) => console.log('Error:', error));\n```",
      "options": [
        {
          "text": "`[1, 2, 'Error']`",
          "correct": false
        },
        {
          "text": "`Error: Error`",
          "correct": true
        },
        {
          "text": "`[1, 2, undefined]`",
          "correct": false
        },
        {
          "text": "`Promise rejected`\n\n[Reference Promise.all() with rejection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 202,
      "question": "Which statement about JavaScript closures is correct?",
      "options": [
        {
          "text": "Closures can only access global variables",
          "correct": false
        },
        {
          "text": "Closures can access variables from their outer scope even after the outer function returns",
          "correct": true
        },
        {
          "text": "Closures are only created with arrow functions",
          "correct": false
        },
        {
          "text": "Closures cannot access function parameters\n\n[Reference Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 203,
      "question": "What is the output of this code?\n\n```js\nconst map = new Map();\nmap.set('key1', 'value1');\nmap.set('key2', 'value2');\nmap.set('key1', 'updated value');\n\nconsole.log(map.size);\nconsole.log(map.get('key1'));\n```",
      "options": [
        {
          "text": "`3` and `'value1'`",
          "correct": false
        },
        {
          "text": "`2` and `'updated value'`",
          "correct": true
        },
        {
          "text": "`2` and `'value1'`",
          "correct": false
        },
        {
          "text": "`3` and `'updated value'`\n\n[Reference Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 204,
      "question": "Which method is used to check if all elements in an array pass a test?",
      "options": [
        {
          "text": "`every()`",
          "correct": true
        },
        {
          "text": "`some()`",
          "correct": false
        },
        {
          "text": "`filter()`",
          "correct": false
        },
        {
          "text": "`includes()`\n\n[Reference Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 205,
      "question": "What will this code output?\n\n```js\nconst obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2;\nobj.b = 3;\nconsole.log(obj);\n```",
      "options": [
        {
          "text": "`{ a: 2, b: 3 }`",
          "correct": false
        },
        {
          "text": "`{ a: 1 }`",
          "correct": true
        },
        {
          "text": "`{ a: 2 }`",
          "correct": false
        },
        {
          "text": "`Error: Cannot modify frozen object`\n\n[Reference Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 206,
      "question": "Which method creates a new array with the results of calling a function for every array element and flattens the result?",
      "options": [
        {
          "text": "`map()`",
          "correct": false
        },
        {
          "text": "`flatMap()`",
          "correct": true
        },
        {
          "text": "`flat()`",
          "correct": false
        },
        {
          "text": "`concat()`\n\n[Reference Array.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 207,
      "question": "What is the output of this code?\n\n```js\nconst func = (x, y = x * 2, z = y + 1) => x + y + z;\nconsole.log(func(2));\n```",
      "options": [
        {
          "text": "`7`",
          "correct": false
        },
        {
          "text": "`11`",
          "correct": true
        },
        {
          "text": "`9`",
          "correct": false
        },
        {
          "text": "`NaN`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 208,
      "question": "Which method is used to create a string from an array?",
      "options": [
        {
          "text": "`toString()`",
          "correct": false
        },
        {
          "text": "`join()`",
          "correct": true
        },
        {
          "text": "`concat()`",
          "correct": false
        },
        {
          "text": "`stringify()`\n\n[Reference Array.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 209,
      "question": "What will this code output?\n\n```js\nconst regex = /\\d+/g;\nconst str = 'abc123def456';\nconsole.log(str.match(regex));\n```",
      "options": [
        {
          "text": "`['123']`",
          "correct": false
        },
        {
          "text": "`['123', '456']`",
          "correct": true
        },
        {
          "text": "`['abc', 'def']`",
          "correct": false
        },
        {
          "text": "`null`\n\n[Reference String.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 210,
      "question": "Which statement about JavaScript event loop is correct?",
      "options": [
        {
          "text": "The event loop runs synchronously",
          "correct": false
        },
        {
          "text": "The event loop handles asynchronous operations by using a callback queue",
          "correct": true
        },
        {
          "text": "The event loop only works with DOM events",
          "correct": false
        },
        {
          "text": "The event loop blocks the main thread\n\n[Reference Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 211,
      "question": "What is the output of this code?\n\n```js\nconst arr = [1, 2, 3, 4, 5];\nconst result = arr.reduceRight((acc, curr) => acc + curr, 0);\nconsole.log(result);\n```",
      "options": [
        {
          "text": "`5`",
          "correct": false
        },
        {
          "text": "`15`",
          "correct": true
        },
        {
          "text": "`[5, 4, 3, 2, 1]`",
          "correct": false
        },
        {
          "text": "`0`\n\n[Reference Array.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 212,
      "question": "Which method is used to add elements to the beginning of an array?",
      "options": [
        {
          "text": "`unshift()`",
          "correct": true
        },
        {
          "text": "`push()`",
          "correct": false
        },
        {
          "text": "`concat()`",
          "correct": false
        },
        {
          "text": "`splice()`\n\n[Reference Array.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 213,
      "question": "What will this code output?\n\n```js\nconst obj = {\n  name: 'John',\n  getName: () => {\n    return this.name;\n  },\n};\n\nconsole.log(obj.getName());\n```",
      "options": [
        {
          "text": "`'John'`",
          "correct": false
        },
        {
          "text": "`undefined`",
          "correct": true
        },
        {
          "text": "`'getName'`",
          "correct": false
        },
        {
          "text": "`Error`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 214,
      "question": "Which method is used to execute code after all promises in an array have settled (resolved or rejected)?",
      "options": [
        {
          "text": "`Promise.all()`",
          "correct": false
        },
        {
          "text": "`Promise.race()`",
          "correct": false
        },
        {
          "text": "`Promise.allSettled()`",
          "correct": true
        },
        {
          "text": "`Promise.any()`\n\n[Reference Promise.allSettled()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 215,
      "question": "What will be the output of the following code?\n\n// code here:\nfunction createCounter() {\n  let count = 0;\n  return {\n    increment: () => count++,\n    getValue: () => count\n  };\n}\n\nconst counter1 = createCounter();\nconst counter2 = createCounter();\n\ncounter1.increment();\ncounter1.increment();\ncounter2.increment();\n\nconsole.log(counter1.getValue(), counter2.getValue());",
      "options": [
        {
          "text": "1,1",
          "correct": false
        },
        {
          "text": "3,3",
          "correct": false
        },
        {
          "text": "2,1",
          "correct": true
        },
        {
          "text": "undefined \n\nExplanation:\nEach call to createCounter() creates a new closure with its own independent count variable.\nSo:\ncounter1 increments twice → 2\ncounter2 increments once → 1\nClosures DO NOT share state unless they reference the same outer scope object.\n\n[Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures]",
          "correct": false
        }
      ],
      "reference": null
    }
  ]
};
