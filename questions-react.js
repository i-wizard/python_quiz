window.QUIZ_BANKS = window.QUIZ_BANKS || {};
window.QUIZ_BANKS["react"] = {
  "id": "react",
  "name": "React",
  "icon": "⚛️",
  "questions": [
    {
      "id": 1,
      "question": "Which language can you not use with React?",
      "options": [
        {
          "text": "Swift.",
          "correct": true
        },
        {
          "text": "JSX.",
          "correct": false
        },
        {
          "text": "JavaScript.",
          "correct": false
        },
        {
          "text": "TypeScript.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 2,
      "question": "This code is part of an app that collects Pokemon. How would you print the list of the ones collected so far?\n\n```javascript\nconstructor(props) {\n    super(props);\n    this.state = {\n        pokeDex: []\n    };\n}\n```",
      "options": [
        {
          "text": "console.log(props.pokeDex);",
          "correct": false
        },
        {
          "text": "console.log(this.props.pokeDex);",
          "correct": false
        },
        {
          "text": "console.log(pokeDex);",
          "correct": false
        },
        {
          "text": "console.log(this.state.pokeDex);",
          "correct": true
        }
      ],
      "reference": "https://www.digitalocean.com/community/tutorials/how-to-manage-state-on-react-class-components#step-3-setting-state-from-a-static-value"
    },
    {
      "id": 3,
      "question": "What would be the result of running this code?\n\n```javascript\nfunction add(x = 1, y = 2) {\n  return x + y;\n}\n\nadd();\n```",
      "options": [
        {
          "text": "null",
          "correct": false
        },
        {
          "text": "3",
          "correct": true
        },
        {
          "text": "0",
          "correct": false
        },
        {
          "text": "undefined\n\n![image](https://user-images.githubusercontent.com/62549240/160531605-bf8790d5-5eb9-4291-a9bd-4232f2fd7b6e.png?raw=png)\n\nExplanation: function that called without parameter will use its param default value, thus x will always be default to 1 and y will always be default to 2.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 4,
      "question": "Why might you use a React.ref?",
      "options": [
        {
          "text": "to refer to another JS file",
          "correct": false
        },
        {
          "text": "to bind the function",
          "correct": false
        },
        {
          "text": "to call a function",
          "correct": false
        },
        {
          "text": "to directly access the DOM node",
          "correct": true
        }
      ],
      "reference": "https://reactjs.org/docs/refs-and-the-dom.html"
    },
    {
      "id": 5,
      "question": "What pattern is being used in this code block?\n\n```javascript\nconst { tree, lake } = nature;\n```",
      "options": [
        {
          "text": "function defaults",
          "correct": false
        },
        {
          "text": "array destructuring",
          "correct": false
        },
        {
          "text": "PRPL pattern",
          "correct": false
        },
        {
          "text": "destructuring assignment",
          "correct": true
        }
      ],
      "reference": "https://javascript.info/destructuring-assignment"
    },
    {
      "id": 6,
      "question": "How would you correct this code block to make sure that the sent property is set to the Boolean value false?\n\n```javascript\nReactDom.render(\n  <Message sent=false />,\n  document.getElementById(\"root\")\n);\n```",
      "options": [
        {
          "text": "A\n\n```javascript\n<Message sent={false} />,\n```",
          "correct": true
        },
        {
          "text": "B\n\n```javascript\nReactDom.render(<Message sent=\"false\" />, document.getElementById('root'));\n```",
          "correct": false
        },
        {
          "text": "C\n\n```javascript\n<Message sent=\"false\" />,\n```",
          "correct": false
        },
        {
          "text": "D\n\n```javascript\nReactDom.render(<Message sent=\"false\" />, document.getElementById('root'));\n```\n\n[Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 7,
      "question": "This code is part of an app that collects Pokemon. The useState hook below is a piece of state holding onto the names of the Pokemon collected so far. How would you access the collected Pokemon in state?\n\n```javascript\nconst PokeDex = (props) => {\n  const [pokeDex, setPokeDex] = useState([]);\n  /// ...\n};\n```",
      "options": [
        {
          "text": "props.pokeDex",
          "correct": false
        },
        {
          "text": "this.props.pokeDex",
          "correct": false
        },
        {
          "text": "setPokeDex()",
          "correct": false
        },
        {
          "text": "pokeDex\n\nExplanation: useState always return an array with two values, the state itself (on first value) and the set function that lets you update the state (on second value)\n[useState Reference](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 8,
      "question": "What would you pass to the onClick prop that will allow you to pass the initName prop into the greet handler?\n\n```javascript\nconst Greeting = ({ initName }) => {\n  const greet = (name) => console.log(\"Hello, \" + name + \"!\");\n  return <button onClick={ ... }>Greeting Button </button>\n}\n```",
      "options": [
        {
          "text": "hug",
          "correct": false
        },
        {
          "text": "this.hug(initName)",
          "correct": false
        },
        {
          "text": "(name) => this.hug(name)",
          "correct": false
        },
        {
          "text": "() => hug(initName)\n\nExplanation: Apparently the question misstyped `greet` as `hug`. Putting this aside, we can still learn from this question.\n\n- In a function, the global object is the default binding for `this`. In a browser window the global object is [object Window].\n  This is a functional Component, so `this` from `this.hug` actually refers to browser window.\n  Since it is a functional component, we can directly refer to hug without using `this`.\n- To pass a handler to onClick, we should always pass a function rather than execute a function. So we need to use callback here.\n  `initName` is available in Greeting's function scope, so we can directly supply as an argument to hug().",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 9,
      "question": "What is the name of the compiler used to transform JSX into JavaScript?",
      "options": [
        {
          "text": "Babel",
          "correct": true
        },
        {
          "text": "JSX Editor",
          "correct": false
        },
        {
          "text": "Browser Buddy",
          "correct": false
        },
        {
          "text": "ReactDOM\n\n[JSX Transform with Babel](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 10,
      "question": "Which hook is used to prevent a function from being recreated on every component render?",
      "options": [
        {
          "text": "useCallback",
          "correct": true
        },
        {
          "text": "useMemo",
          "correct": false
        },
        {
          "text": "useRef",
          "correct": false
        },
        {
          "text": "useTransition\n\n[React Hooks useCallback docuementation](https://react.dev/reference/react/useCallback)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 11,
      "question": "Why might you use the `useRef` hook?",
      "options": [
        {
          "text": "To bind the function",
          "correct": false
        },
        {
          "text": "To call a function",
          "correct": false
        },
        {
          "text": "To directly access a DOM",
          "correct": true
        },
        {
          "text": "To refer to another JS file",
          "correct": false
        }
      ],
      "reference": "https://www.smashingmagazine.com/2020/11/react-useref-hook/"
    },
    {
      "id": 12,
      "question": "Which of the following is required to use React?",
      "options": [
        {
          "text": "JavaScript",
          "correct": true
        },
        {
          "text": "React Router",
          "correct": false
        },
        {
          "text": "Redux",
          "correct": false
        },
        {
          "text": "Prop-Types",
          "correct": false
        }
      ],
      "reference": "https://reactjs.org/tutorial/tutorial.html#:~:text=What%20Is%20React%3F,of%20code%20called%20%E2%80%9Ccomponents%E2%80%9D.&text=We'll%20get%20to%20the%20funny%20XML%2Dlike%20tags%20soon."
    },
    {
      "id": 13,
      "question": "What is the correct way to get a value from context?",
      "options": [
        {
          "text": "const value = useContext(MyContext.Consumer)",
          "correct": false
        },
        {
          "text": "const value = useContext(MyContext.Provider)",
          "correct": false
        },
        {
          "text": "const value = useContext(MyContext)",
          "correct": true
        },
        {
          "text": "const value = useContext({value: \"intiial value\"})",
          "correct": false
        }
      ],
      "reference": "https://reactjs.org/docs/hooks-reference.html#usecontext"
    },
    {
      "id": 14,
      "question": "Why is ref used?",
      "options": [
        {
          "text": "to bind function",
          "correct": false
        },
        {
          "text": "to call function",
          "correct": false
        },
        {
          "text": "to directly access DOM node",
          "correct": true
        },
        {
          "text": "to refer to another JS file",
          "correct": false
        }
      ],
      "reference": "https://reactjs.org/docs/refs-and-the-dom.html#when-to-use-refs"
    },
    {
      "id": 15,
      "question": "Choose the method which should be overridden to stop the component from updating?",
      "options": [
        {
          "text": "componentDidMount",
          "correct": false
        },
        {
          "text": "componentDidUpdate",
          "correct": false
        },
        {
          "text": "willComponentUpdate",
          "correct": false
        },
        {
          "text": "shouldComponentUpdate",
          "correct": true
        }
      ],
      "reference": "https://reactjs.org/docs/react-component.html#shouldcomponentupdate"
    },
    {
      "id": 16,
      "question": "What is the functionality of a “webpack” command?",
      "options": [
        {
          "text": "Runs react local development server",
          "correct": false
        },
        {
          "text": "Transfers all JS files to down into one file",
          "correct": false
        },
        {
          "text": "A module builder",
          "correct": false
        },
        {
          "text": "None to All",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 17,
      "question": "Choose the method which is not a part of ReactDOM?",
      "options": [
        {
          "text": "ReactDOM.createPortal()",
          "correct": false
        },
        {
          "text": "ReactDOM.hydrate()",
          "correct": false
        },
        {
          "text": "ReactDOM.destroy()",
          "correct": true
        },
        {
          "text": "ReactDOM.findDOMnode()",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 18,
      "question": "In react, the key should be?",
      "options": [
        {
          "text": "Unique among his siblings",
          "correct": true
        },
        {
          "text": "Unique in DOM",
          "correct": false
        },
        {
          "text": "Does not requires to be unique",
          "correct": false
        },
        {
          "text": "all of the above",
          "correct": false
        }
      ],
      "reference": "https://reactjs.org/docs/lists-and-keys.html#keys"
    },
    {
      "id": 19,
      "question": "Which company developed ReactJS?",
      "options": [
        {
          "text": "Google",
          "correct": false
        },
        {
          "text": "Meta (ex Facebook)",
          "correct": true
        },
        {
          "text": "Apple",
          "correct": false
        },
        {
          "text": "Twitter",
          "correct": false
        }
      ],
      "reference": "https://github.com/facebook/react"
    },
    {
      "id": 20,
      "question": "Choose the library which is most often associated with react?",
      "options": [
        {
          "text": "Chai",
          "correct": false
        },
        {
          "text": "Sinon",
          "correct": false
        },
        {
          "text": "Jest",
          "correct": true
        },
        {
          "text": "Mocha",
          "correct": false
        }
      ],
      "reference": "https://reactjs.org/docs/testing-recipes.html"
    },
    {
      "id": 21,
      "question": "What of the following is used in React.js to increase performance?",
      "options": [
        {
          "text": "Original DOM",
          "correct": false
        },
        {
          "text": "Virtual DOM",
          "correct": true
        },
        {
          "text": "Both of the above",
          "correct": false
        },
        {
          "text": "None of the above",
          "correct": false
        }
      ],
      "reference": "https://reactjs.org/docs/optimizing-performance.html"
    },
    {
      "id": 22,
      "question": "Among The following options, choose the one which helps react for keeping their data uni-directional?",
      "options": [
        {
          "text": "DOM",
          "correct": false
        },
        {
          "text": "flux",
          "correct": true
        },
        {
          "text": "JSX",
          "correct": false
        },
        {
          "text": "Props",
          "correct": false
        }
      ],
      "reference": "https://reactjs.org/blog/2014/05/06/flux.html"
    },
    {
      "id": 23,
      "question": "Which choice is a correct refactor of the Greeting class component into a function component?\n\n```javascript\nclass Greeting extends React.Component {\n  render() {\n    return <h1>Hello {this.props.name}!<h1>;\n  }\n}\n```",
      "options": [
        {
          "text": "`const Greeting = (name) => <h1>{name}</h1>`",
          "correct": false
        },
        {
          "text": "`function Greeting(name){return <h1>{name}</h1>;}`",
          "correct": false
        },
        {
          "text": "`const Greeting = props => { <h1>{props.name}</h1> }`",
          "correct": false
        },
        {
          "text": "`const Greeting = ({ name }) => <h1>Hello {name}</h1>;`",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 24,
      "question": "Why is the `waitlist` not updating correctly?\n\n```javascript\nconst Waitlist = () => {\n  const [name, setName] = useState('');\n  const [waitlist, setWaitlist] = useState([]);\n  const onSubmit = (e) => {\n    e.preventDefault();\n    waitlist.push(name);\n  };\n  return (\n    <div>\n      <form onSubmit={onSubmit}>\n        <label>\n          Name: <input type=\"text\" value={name} onChange={(e) => setName(e.target.value)} />\n        </label>\n        <button type=\"submit\">Add to waitlist</button>\n      </form>\n\n      <ol>\n        {waitlist.map((name) => (\n          <li key={name}>{name}</li>\n        ))}\n      </ol>\n    </div>\n  );\n};\n```",
      "options": [
        {
          "text": "`waitlist` is being mutated directly. Use the `setWaitlist` function instead to update the waitlist state.",
          "correct": true
        },
        {
          "text": "The form is reloading the page each time `Add to waitlist` is clicked.",
          "correct": false
        },
        {
          "text": "The `Add to waitlist` button is missing a click handler.",
          "correct": false
        },
        {
          "text": "There are likely repeated names inside of the `waitlist` array.",
          "correct": false
        }
      ],
      "reference": "https://reactjs.org/docs/react-component.html#setstate"
    },
    {
      "id": 25,
      "question": "What is the pattern that is used in the Context.Consumer below?\n\n<Context.Consumer>\n{(isLoggedIn)=><b>{isLoggedIn ? \"Online\" : \"Offline\"}</b>}\n</Context.Consumer>",
      "options": [
        {
          "text": "higher-order component",
          "correct": false
        },
        {
          "text": "wish component",
          "correct": false
        },
        {
          "text": "Render Props",
          "correct": true
        },
        {
          "text": "setup Componet",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 26,
      "question": "In React.js which one of the following is used to create a class for Inheritance ?",
      "options": [
        {
          "text": "Create",
          "correct": false
        },
        {
          "text": "Extends",
          "correct": true
        },
        {
          "text": "Inherits",
          "correct": false
        },
        {
          "text": "Delete",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/react-js-quiz-set-1/"
    },
    {
      "id": 27,
      "question": "What is the purpose of render() in React.js?",
      "options": [
        {
          "text": "To replace the existing markup",
          "correct": false
        },
        {
          "text": "To update the existing markup",
          "correct": false
        },
        {
          "text": "Both of the above",
          "correct": true
        },
        {
          "text": "None of the above",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/explain-the-purpose-of-render-in-reactjs/"
    },
    {
      "id": 28,
      "question": "What is the use of super(props) in React.js?",
      "options": [
        {
          "text": "To call the constructor of the parent class",
          "correct": false
        },
        {
          "text": "To initialize this.props in the constructor",
          "correct": false
        },
        {
          "text": "Both of the above",
          "correct": true
        },
        {
          "text": "None of the above",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/what-is-the-use-of-superprops/"
    },
    {
      "id": 29,
      "question": "What is Redux in React.js?",
      "options": [
        {
          "text": "A state container for JavaScript apps",
          "correct": true
        },
        {
          "text": "A tool for building UI components",
          "correct": false
        },
        {
          "text": "Both of the above",
          "correct": false
        },
        {
          "text": "None of the above",
          "correct": false
        }
      ],
      "reference": "https://www.freecodecamp.org/news/what-is-redux-store-actions-reducers-explained/"
    },
    {
      "id": 30,
      "question": "What is the purpose of the virtual DOM in React.js, and how does it improve performance in web applications??",
      "options": [
        {
          "text": "The virtual DOM is used to store user authentication data securely.",
          "correct": false
        },
        {
          "text": "The virtual DOM is a backup copy of the actual DOM, created for debugging purposes.",
          "correct": false
        },
        {
          "text": "The virtual DOM is a lightweight representation of the actual DOM, and it helps improve performance by minimizing direct manipulation of the real DOM.",
          "correct": true
        },
        {
          "text": "The virtual DOM is a database used to store component states.",
          "correct": false
        }
      ],
      "reference": "https://medium.com/@vinaynkokate/demystifying-dynamic-web-applications-understanding-the-dom-and-web-browser-interactions-cc1b113adfa"
    },
    {
      "id": 31,
      "question": "You run the following code and get this error message: \"invalid hook call.\" what is wrong with the code?\n\n```javascript\nimport React from 'react';\n\nconst [poked, setPoked] = React.useState(false);\n\nfunction PokeButton() {\n  return <button onClick={() => setPoked(true)}>{poked ? 'You have left a poke.' : 'Poke'}</button>;\n}\n```",
      "options": [
        {
          "text": "The useState call needs to be called inside of the PokeButton component.",
          "correct": true
        },
        {
          "text": "The react package is likely not installed correctly.",
          "correct": false
        },
        {
          "text": "useState is not imported correctly. Import useState directly instead of importing react.",
          "correct": false
        },
        {
          "text": "PokeButton is a pure function and therefore cannot have any local state.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 32,
      "question": "A colleague comes to you for help on a react component. They say that the poke button renders correctly, however when the button is clicked, this error is shown: \"setPoked is not defined\". What is wrong with their code?\n\n```javascript\nfunction PokeButton() {\n  const { poked, setPoked } = useState(false);\n  return <button onclick={() => setPoked(true)}>{poked ? 'You have left a poke.' : 'Poke'}</button>;\n}\n```",
      "options": [
        {
          "text": "onClick prop should be onclick.",
          "correct": false
        },
        {
          "text": "The click handler passed to the onClick prop is inlined. Move this handler into a variable outside of JSX.",
          "correct": false
        },
        {
          "text": "They use object destructructing instead of array destructructing. Wrap the poked and setPoked values in an array.",
          "correct": true
        },
        {
          "text": "poked and setPoked are not destructured in the correct order.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 33,
      "question": "This component is loaded dynamically. What should you replace XXXX with to complete the code?\n\n```javascript\nconst OtherComponent = React.lazy(() => import('./OtherComponent.js'));\n\nfunction MyComponent() {\n  return (\n    <XXXX fallback={<spinner />}>\n      <OtherComponent />\n    </XXXX>\n  );\n}\n```",
      "options": [
        {
          "text": "Component",
          "correct": false
        },
        {
          "text": "Fragment",
          "correct": false
        },
        {
          "text": "Suspense",
          "correct": true
        },
        {
          "text": "Lazy",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 34,
      "question": "Elements in lists in React should have \\_**\\_ that are \\_\\_\\_** .",
      "options": [
        {
          "text": "keys ; unique",
          "correct": true
        },
        {
          "text": "keys ; indexes",
          "correct": false
        },
        {
          "text": "style ; inline",
          "correct": false
        },
        {
          "text": "values ; not-null\n      [Source: React Docs](https://legacy.reactjs.org/docs/lists-and-keys.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 35,
      "question": "You want to memorize a callback function so you ensure that React does not recreate the function at each render. Which hook would you use to accomplish this?",
      "options": [
        {
          "text": "useRef",
          "correct": false
        },
        {
          "text": "useMemo",
          "correct": false
        },
        {
          "text": "memo",
          "correct": false
        },
        {
          "text": "useCallback\n\n[Source: CodeDamn](https://codedamn.com/news/reactjs/usememo-and-usecallback-hooks)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 36,
      "question": "You want to perform a network operation as the result of a change to a component's state named userInput. what would you replace XXXX with?\n\n```javascript\nuseEffect(callNetworkFunc, XXXX);\n```",
      "options": [
        {
          "text": "[userInput]",
          "correct": true
        },
        {
          "text": "userInput",
          "correct": false
        },
        {
          "text": "undefined",
          "correct": false
        },
        {
          "text": "[]",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 37,
      "question": "When is the Hello component displayed?\n\n```javascript\n<div>{isLoggedIn ? <Hello /> : null}</div>\n```",
      "options": [
        {
          "text": "when isLoggedIn is false",
          "correct": false
        },
        {
          "text": "when isLoggedIn is true",
          "correct": true
        },
        {
          "text": "when isLoggedIn is false and the Hello function is invoked",
          "correct": false
        },
        {
          "text": "never",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 38,
      "question": "When do you use `useLayoutEffect`?",
      "options": [
        {
          "text": "to optimize for all devices",
          "correct": false
        },
        {
          "text": "to complete the update",
          "correct": false
        },
        {
          "text": "to change the layout of the screen",
          "correct": true
        },
        {
          "text": "when you need the browser to paint before the effect runs",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 39,
      "question": "What is the difference between state and props in React?",
      "options": [
        {
          "text": "Props are set by the parent component, state is set by the child component",
          "correct": false
        },
        {
          "text": "Props are passed to a component, state is managed within the component",
          "correct": true
        },
        {
          "text": "Props can be updated, state cannot be updated",
          "correct": false
        },
        {
          "text": "There is no difference - props and state are the same",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 40,
      "question": "Which language can you not use with React?",
      "options": [
        {
          "text": "Swift.",
          "correct": true
        },
        {
          "text": "JSX.",
          "correct": false
        },
        {
          "text": "JavaScript.",
          "correct": false
        },
        {
          "text": "TypeScript.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 41,
      "question": "Which answer best describes a function component?",
      "options": [
        {
          "text": "A function component is the same as a class component.",
          "correct": false
        },
        {
          "text": "A function component accepts a single props object and returns a React element.",
          "correct": true
        },
        {
          "text": "A function component is the only way to create a component.",
          "correct": false
        },
        {
          "text": "A function component is required to create a React component.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 42,
      "question": "What is the primary function of React Router?",
      "options": [
        {
          "text": "React Router is used for fetching data from APIs.",
          "correct": false
        },
        {
          "text": "React Router is used to create animations in React applications.",
          "correct": false
        },
        {
          "text": "React Router is used for managing state in React components.",
          "correct": false
        },
        {
          "text": "React Router is used for adding navigation and routing to React applications, allowing users to navigate between different views or pages.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 43,
      "question": "When should you use Redux in a React application?",
      "options": [
        {
          "text": "Redux is always required in React applications.",
          "correct": false
        },
        {
          "text": "Redux should be used when you need to fetch data from APIs.",
          "correct": false
        },
        {
          "text": "Redux is used for creating user interfaces but not for state management.",
          "correct": false
        },
        {
          "text": "Redux is typically used when you have complex state management needs, such as sharing state between multiple components or handling deeply nested state.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 44,
      "question": "What is the use of React hooks?",
      "options": [
        {
          "text": "To optimize React apps for mobile devices",
          "correct": false
        },
        {
          "text": "To add visual effects to React components.",
          "correct": false
        },
        {
          "text": "To allow using state and lifecycle methods in function components",
          "correct": true
        },
        {
          "text": "To integrate with external UI libraries like Bootstrap",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 45,
      "question": "How can you pass data through a React component tree without having to pass props down manually at every level?",
      "options": [
        {
          "text": "By using React context",
          "correct": true
        },
        {
          "text": "By using redux",
          "correct": false
        },
        {
          "text": "By using react router",
          "correct": false
        },
        {
          "text": "By using react lifecycle methods",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 46,
      "question": "What is React?",
      "options": [
        {
          "text": "A server-side programming language",
          "correct": false
        },
        {
          "text": "A JavaScript library for building user interfaces",
          "correct": true
        },
        {
          "text": "A database management system",
          "correct": false
        },
        {
          "text": "A CSS framework\n\n[Reference React Overview](https://reactjs.org/docs/getting-started.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 47,
      "question": "Which method is used to create a React component?",
      "options": [
        {
          "text": "`React.createComponent()`",
          "correct": false
        },
        {
          "text": "`function Component()` or `class Component extends React.Component`",
          "correct": true
        },
        {
          "text": "`new React.Component()`",
          "correct": false
        },
        {
          "text": "`React.makeComponent()`\n\n[Reference Components and Props](https://reactjs.org/docs/components-and-props.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 48,
      "question": "What is JSX?",
      "options": [
        {
          "text": "A new programming language",
          "correct": false
        },
        {
          "text": "A syntax extension for JavaScript that allows writing HTML-like code",
          "correct": true
        },
        {
          "text": "A CSS preprocessor",
          "correct": false
        },
        {
          "text": "A database query language\n\n[Reference Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 49,
      "question": "What is the purpose of the `useEffect` hook?",
      "options": [
        {
          "text": "To manage component state",
          "correct": false
        },
        {
          "text": "To perform side effects in functional components",
          "correct": true
        },
        {
          "text": "To create context",
          "correct": false
        },
        {
          "text": "To optimize performance\n\n[Reference Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 50,
      "question": "Which prop is used to pass data from parent to child components?",
      "options": [
        {
          "text": "`state`",
          "correct": false
        },
        {
          "text": "`props`",
          "correct": true
        },
        {
          "text": "`context`",
          "correct": false
        },
        {
          "text": "`ref`\n\n```jsx\n<ChildComponent name=\"John\" age={25} />\n```\n\n[Reference Components and Props](https://reactjs.org/docs/components-and-props.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 51,
      "question": "What is the correct way to handle events in React?\n\n```jsx\nfunction Button() {\n  const handleClick = () => {\n    console.log('Button clicked');\n  };\n\n  return <button onClick={handleClick}>Click me</button>;\n}\n```",
      "options": [
        {
          "text": "The above code is correct",
          "correct": true
        },
        {
          "text": "Use `onclick` instead of `onClick`",
          "correct": false
        },
        {
          "text": "Events cannot be handled in functional components",
          "correct": false
        },
        {
          "text": "Use `addEventListener` method\n\n[Reference Handling Events](https://reactjs.org/docs/handling-events.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 52,
      "question": "Which lifecycle method is called after a component is mounted?",
      "options": [
        {
          "text": "`componentWillMount`",
          "correct": false
        },
        {
          "text": "`componentDidMount`",
          "correct": true
        },
        {
          "text": "`componentWillUpdate`",
          "correct": false
        },
        {
          "text": "`componentDidUpdate`\n\n[Reference Component Lifecycle](https://reactjs.org/docs/react-component.html#componentdidmount)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 53,
      "question": "What is the correct way to update state in a class component?",
      "options": [
        {
          "text": "`this.state.count = 1;`",
          "correct": false
        },
        {
          "text": "`this.setState({ count: 1 });`",
          "correct": true
        },
        {
          "text": "`this.updateState({ count: 1 });`",
          "correct": false
        },
        {
          "text": "`this.state = { count: 1 };`\n\n[Reference State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 54,
      "question": "What is the purpose of React.Fragment?",
      "options": [
        {
          "text": "To create new components",
          "correct": false
        },
        {
          "text": "To group multiple elements without adding extra DOM nodes",
          "correct": true
        },
        {
          "text": "To handle errors",
          "correct": false
        },
        {
          "text": "To manage state\n\n```jsx\nreturn (\n  <React.Fragment>\n    <h1>Title</h1>\n    <p>Description</p>\n  </React.Fragment>\n);\n```\n\n[Reference Fragments](https://reactjs.org/docs/fragments.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 55,
      "question": "Which method is used to prevent default behavior in React events?",
      "options": [
        {
          "text": "`event.stop()`",
          "correct": false
        },
        {
          "text": "`event.preventDefault()`",
          "correct": true
        },
        {
          "text": "`event.cancel()`",
          "correct": false
        },
        {
          "text": "`event.halt()`\n\n[Reference SyntheticEvent](https://reactjs.org/docs/events.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 56,
      "question": "What is the correct way to conditionally render elements in React?\n\n```jsx\nfunction Greeting({ isLoggedIn }) {\n  return <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}</div>;\n}\n```",
      "options": [
        {
          "text": "The above code is correct",
          "correct": true
        },
        {
          "text": "Use `if-else` statements inside JSX",
          "correct": false
        },
        {
          "text": "Use `switch` statements inside JSX",
          "correct": false
        },
        {
          "text": "Conditional rendering is not possible in React\n\n[Reference Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 57,
      "question": "Which hook is used for performance optimization by memoizing expensive calculations?",
      "options": [
        {
          "text": "`useCallback`",
          "correct": false
        },
        {
          "text": "`useMemo`",
          "correct": true
        },
        {
          "text": "`useEffect`",
          "correct": false
        },
        {
          "text": "`useState`\n\n[Reference useMemo Hook](https://reactjs.org/docs/hooks-reference.html#usememo)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 58,
      "question": "What is the purpose of the `useCallback` hook?",
      "options": [
        {
          "text": "To manage state",
          "correct": false
        },
        {
          "text": "To memoize callback functions",
          "correct": true
        },
        {
          "text": "To perform side effects",
          "correct": false
        },
        {
          "text": "To access context\n\n[Reference useCallback Hook](https://reactjs.org/docs/hooks-reference.html#usecallback)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 59,
      "question": "What is the correct way to pass a function as a prop?\n\n```jsx\nfunction Parent() {\n  const handleClick = () => console.log('Clicked');\n  return <Child onClick={handleClick} />;\n}\n```",
      "options": [
        {
          "text": "The above code is correct",
          "correct": true
        },
        {
          "text": "Functions cannot be passed as props",
          "correct": false
        },
        {
          "text": "Use `onClick=\"handleClick\"`",
          "correct": false
        },
        {
          "text": "Use `onClick={handleClick()}`\n\n[Reference Passing Functions to Components](https://reactjs.org/docs/faq-functions.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 60,
      "question": "Which statement about React components is correct?",
      "options": [
        {
          "text": "Component names must start with lowercase letters",
          "correct": false
        },
        {
          "text": "Component names must start with uppercase letters",
          "correct": true
        },
        {
          "text": "Component names can start with numbers",
          "correct": false
        },
        {
          "text": "Component names are case-insensitive\n\n[Reference Components and Props](https://reactjs.org/docs/components-and-props.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 61,
      "question": "Which hook is used to reduce state management complexity?",
      "options": [
        {
          "text": "`useState`",
          "correct": false
        },
        {
          "text": "`useReducer`",
          "correct": true
        },
        {
          "text": "`useEffect`",
          "correct": false
        },
        {
          "text": "`useContext`\n\n[Reference useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 62,
      "question": "What is the correct way to handle forms in React?\n\n```jsx\nfunction Form() {\n  const [value, setValue] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(value);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={value} onChange={(e) => setValue(e.target.value)} />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n```",
      "options": [
        {
          "text": "The above code demonstrates controlled components",
          "correct": true
        },
        {
          "text": "Use uncontrolled components only",
          "correct": false
        },
        {
          "text": "Forms cannot be handled in React",
          "correct": false
        },
        {
          "text": "Use jQuery for form handling\n\n[Reference Forms](https://reactjs.org/docs/forms.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 63,
      "question": "Which method is used to update state based on previous state?\n\n```jsx\nsetCount((prevCount) => prevCount + 1);\n```",
      "options": [
        {
          "text": "Pass a function to the state setter",
          "correct": true
        },
        {
          "text": "Use `this.setState` with previous state",
          "correct": false
        },
        {
          "text": "Access state directly",
          "correct": false
        },
        {
          "text": "Use global variables\n\n[Reference Functional Updates](https://reactjs.org/docs/hooks-reference.html#functional-updates)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 64,
      "question": "What is the purpose of React.memo?",
      "options": [
        {
          "text": "To manage component state",
          "correct": false
        },
        {
          "text": "To prevent unnecessary re-renders of functional components",
          "correct": true
        },
        {
          "text": "To create memoized values",
          "correct": false
        },
        {
          "text": "To handle side effects\n\n[Reference React.memo](https://reactjs.org/docs/react-api.html#reactmemo)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 65,
      "question": "Which hook is used to imperatively access DOM elements?",
      "options": [
        {
          "text": "`useState`",
          "correct": false
        },
        {
          "text": "`useRef`",
          "correct": true
        },
        {
          "text": "`useEffect`",
          "correct": false
        },
        {
          "text": "`useContext`\n\n[Reference Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 66,
      "question": "What is the correct way to handle asynchronous operations in useEffect?\n\n```jsx\nuseEffect(() => {\n  const fetchData = async () => {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    setData(data);\n  };\n\n  fetchData();\n}, []);\n```",
      "options": [
        {
          "text": "Create an async function inside useEffect",
          "correct": true
        },
        {
          "text": "Make useEffect async directly",
          "correct": false
        },
        {
          "text": "Use promises only",
          "correct": false
        },
        {
          "text": "Async operations are not allowed in useEffect\n\n[Reference Effect Hook with Async](https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 67,
      "question": "Which statement about React Hooks is correct?",
      "options": [
        {
          "text": "Hooks can be called conditionally",
          "correct": false
        },
        {
          "text": "Hooks must be called at the top level of React functions",
          "correct": true
        },
        {
          "text": "Hooks can be called in loops",
          "correct": false
        },
        {
          "text": "Hooks can be called in nested functions\n\n[Reference Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 68,
      "question": "What is the purpose of the dependency array in useEffect?",
      "options": [
        {
          "text": "To pass data to the effect",
          "correct": false
        },
        {
          "text": "To control when the effect runs",
          "correct": true
        },
        {
          "text": "To define effect priority",
          "correct": false
        },
        {
          "text": "To handle errors\n\n[Reference Effect Dependencies](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 69,
      "question": "Which method is used to create a custom hook?\n\n```jsx\nfunction useCounter(initialValue = 0) {\n  const [count, setCount] = useState(initialValue);\n\n  const increment = () => setCount(count + 1);\n  const decrement = () => setCount(count - 1);\n\n  return { count, increment, decrement };\n}\n```",
      "options": [
        {
          "text": "Create a function that starts with \"use\" and uses other hooks",
          "correct": true
        },
        {
          "text": "Use the `createHook` method",
          "correct": false
        },
        {
          "text": "Extend the Hook class",
          "correct": false
        },
        {
          "text": "Custom hooks are not possible\n\n[Reference Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 70,
      "question": "What is the correct way to handle errors in React components?",
      "options": [
        {
          "text": "Use try-catch blocks in render methods",
          "correct": false
        },
        {
          "text": "Use Error Boundaries with componentDidCatch",
          "correct": true
        },
        {
          "text": "Use global error handlers",
          "correct": false
        },
        {
          "text": "Errors cannot be handled in React\n\n[Reference Error Boundaries](https://reactjs.org/docs/error-boundaries.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 71,
      "question": "Which statement about React Context is correct?",
      "options": [
        {
          "text": "Context should be used for all state management",
          "correct": false
        },
        {
          "text": "Context is designed to share data across the component tree",
          "correct": true
        },
        {
          "text": "Context cannot be used with hooks",
          "correct": false
        },
        {
          "text": "Context is only for class components\n\n[Reference Context](https://reactjs.org/docs/context.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 72,
      "question": "What is the purpose of the `useLayoutEffect` hook?",
      "options": [
        {
          "text": "To manage component layout",
          "correct": false
        },
        {
          "text": "To perform DOM mutations synchronously after all DOM mutations",
          "correct": true
        },
        {
          "text": "To create responsive layouts",
          "correct": false
        },
        {
          "text": "To handle CSS animations\n\n[Reference useLayoutEffect Hook](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 73,
      "question": "Which method is used to optimize performance by preventing unnecessary renders?",
      "options": [
        {
          "text": "`shouldComponentUpdate` only",
          "correct": false
        },
        {
          "text": "`React.memo`, `useMemo`, `useCallback`, and `shouldComponentUpdate`",
          "correct": true
        },
        {
          "text": "`componentDidUpdate` only",
          "correct": false
        },
        {
          "text": "Performance optimization is automatic\n\n[Reference Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 74,
      "question": "What is the correct way to pass multiple props to a component?\n\n```jsx\nconst props = { name: 'John', age: 25, city: 'New York' };\nreturn <UserCard {...props} />;\n```",
      "options": [
        {
          "text": "Use the spread operator",
          "correct": true
        },
        {
          "text": "Pass props individually only",
          "correct": false
        },
        {
          "text": "Use arrays for multiple props",
          "correct": false
        },
        {
          "text": "Multiple props are not allowed\n\n[Reference JSX Spread Attributes](https://reactjs.org/docs/jsx-in-depth.html#spread-attributes)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 75,
      "question": "Which hook is used to debug custom hooks?",
      "options": [
        {
          "text": "`useEffect`",
          "correct": false
        },
        {
          "text": "`useDebugValue`",
          "correct": true
        },
        {
          "text": "`useState`",
          "correct": false
        },
        {
          "text": "`useRef`\n\n[Reference useDebugValue Hook](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 76,
      "question": "What is the purpose of React.StrictMode?",
      "options": [
        {
          "text": "To enforce strict typing",
          "correct": false
        },
        {
          "text": "To highlight potential problems in an application during development",
          "correct": true
        },
        {
          "text": "To improve performance",
          "correct": false
        },
        {
          "text": "To enable strict mode in JavaScript\n\n[Reference Strict Mode](https://reactjs.org/docs/strict-mode.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 77,
      "question": "Which statement about React portals is correct?",
      "options": [
        {
          "text": "Portals are used for routing",
          "correct": false
        },
        {
          "text": "Portals provide a way to render children into a DOM node outside the parent component",
          "correct": true
        },
        {
          "text": "Portals are used for state management",
          "correct": false
        },
        {
          "text": "Portals are deprecated\n\n[Reference Portals](https://reactjs.org/docs/portals.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 78,
      "question": "What is the correct way to handle component cleanup?\n\n```jsx\nuseEffect(() => {\n  const timer = setInterval(() => {\n    console.log('Timer tick');\n  }, 1000);\n\n  return () => {\n    clearInterval(timer);\n  };\n}, []);\n```",
      "options": [
        {
          "text": "Return a cleanup function from useEffect",
          "correct": true
        },
        {
          "text": "Use componentWillUnmount only",
          "correct": false
        },
        {
          "text": "Cleanup is automatic",
          "correct": false
        },
        {
          "text": "Use try-finally blocks\n\n[Reference Effect Cleanup](https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 79,
      "question": "Which method is used to forward refs in React?",
      "options": [
        {
          "text": "`React.createRef`",
          "correct": false
        },
        {
          "text": "`React.forwardRef`",
          "correct": true
        },
        {
          "text": "`React.passRef`",
          "correct": false
        },
        {
          "text": "`React.sendRef`\n\n[Reference Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 80,
      "question": "What is the purpose of the `useImperativeHandle` hook?",
      "options": [
        {
          "text": "To manage component state",
          "correct": false
        },
        {
          "text": "To customize the instance value exposed to parent components when using ref",
          "correct": true
        },
        {
          "text": "To handle imperative animations",
          "correct": false
        },
        {
          "text": "To create imperative APIs\n\n[Reference useImperativeHandle Hook](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)",
          "correct": false
        }
      ],
      "reference": null
    }
  ]
};
