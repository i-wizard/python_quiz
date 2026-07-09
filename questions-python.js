window.QUIZ_BANKS = window.QUIZ_BANKS || {};
window.QUIZ_BANKS["python"] = {
  "id": "python",
  "name": "Python",
  "icon": "🐍",
  "questions": [
    {
      "id": 1,
      "question": "What is an abstract class?",
      "options": [
        {
          "text": "An abstract class is the name for any class from which you can instantiate an object.",
          "correct": false
        },
        {
          "text": "Abstract classes must be redefined any time an object is instantiated from them.",
          "correct": false
        },
        {
          "text": "Abstract classes must inherit from concrete classes.",
          "correct": false
        },
        {
          "text": "An abstract class exists only so that other \"concrete\" classes can inherit from the abstract class.",
          "correct": true
        }
      ],
      "reference": "https://www.geeksforgeeks.org/abstract-classes-in-python/"
    },
    {
      "id": 2,
      "question": "What happens when you use the built-in function `any()` on a list?",
      "options": [
        {
          "text": "The `any()` function will randomly return any item from the list.",
          "correct": false
        },
        {
          "text": "The `any()` function returns True if any item in the list evaluates to True. Otherwise, it returns False.",
          "correct": true
        },
        {
          "text": "The `any()` function takes as arguments the list to check inside, and the item to check for. If \"any\" of the items in the list match the item to check for, the function returns True.",
          "correct": false
        },
        {
          "text": "The `any()` function returns a Boolean value that answers the question \"Are there any items in this list?\"",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 3,
      "question": "What data structure does a binary tree degenerate to if it isn't balanced properly?",
      "options": [
        {
          "text": "linked list",
          "correct": true
        },
        {
          "text": "queue",
          "correct": false
        },
        {
          "text": "set",
          "correct": false
        },
        {
          "text": "OrderedDict",
          "correct": false
        }
      ],
      "reference": "https://www.scaler.com/topics/linked-list/"
    },
    {
      "id": 4,
      "question": "What statement about static methods is true?",
      "options": [
        {
          "text": "Static methods are called static because they always return `None`.",
          "correct": false
        },
        {
          "text": "Static methods can be bound to either a class or an instance of a class.",
          "correct": false
        },
        {
          "text": "Static methods serve mostly as utility methods or helper methods since they can't access or modify a class's state.",
          "correct": true
        },
        {
          "text": "Static methods can access and modify the state of a class or an instance of a class.",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/class-method-vs-static-method-python"
    },
    {
      "id": 5,
      "question": "What are attributes?",
      "options": [
        {
          "text": "Attributes are long-form versions of an `if/else` statement, used when testing for equality between objects.",
          "correct": false
        },
        {
          "text": "Attributes are a way to hold data or describe a state for a class or an instance of a class.",
          "correct": true
        },
        {
          "text": "Attributes are strings that describe characteristics of a class.",
          "correct": false
        },
        {
          "text": "Function arguments are called \"attributes\" in the context of class methods and instance methods.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 6,
      "question": "What is the term to describe this code?\n\n`count, fruit, price = (2, 'apple', 3.5)`",
      "options": [
        {
          "text": "Tuple assignment.",
          "correct": false
        },
        {
          "text": "Tuple unpacking.",
          "correct": true
        },
        {
          "text": "Tuple matching.",
          "correct": false
        },
        {
          "text": "Tuple duplication.",
          "correct": false
        }
      ],
      "reference": "https://www.w3schools.com/python/python_tuples_unpack.asp"
    },
    {
      "id": 7,
      "question": "What built-in list method would you use to remove items from a list?",
      "options": [
        {
          "text": "`.delete()` method",
          "correct": false
        },
        {
          "text": "`pop(my_list)`",
          "correct": false
        },
        {
          "text": "`del(my_list)`",
          "correct": false
        },
        {
          "text": "`.pop()` method",
          "correct": true
        }
      ],
      "reference": "https://www.w3schools.com/python/ref_list_pop.asp"
    },
    {
      "id": 8,
      "question": "What is one of the most common uses of Python's `sys` library?",
      "options": [
        {
          "text": "To capture command-line arguments given at a file's runtime.",
          "correct": true
        },
        {
          "text": "To connect various systems, such as connecting a web front end, an API service, a database, and a mobile app.",
          "correct": false
        },
        {
          "text": "To take a snapshot of all the packages and libraries in your virtual environment.",
          "correct": false
        },
        {
          "text": "To scan the health of your Python ecosystem while inside a virtual environment.",
          "correct": false
        }
      ],
      "reference": "https://docs.python.org/3/library/sys.html"
    },
    {
      "id": 9,
      "question": "What is the runtime of accessing a value in a dictionary by using its key?",
      "options": [
        {
          "text": "O(n), also called linear time.",
          "correct": false
        },
        {
          "text": "O(log n), also called logarithmic time.",
          "correct": false
        },
        {
          "text": "O(n^2), also called quadratic time.",
          "correct": false
        },
        {
          "text": "O(1), also called constant time.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 10,
      "question": "What is the correct syntax for defining a class called Game, if it inherits from a parent class called LogicGame?",
      "options": [
        {
          "text": "`class Game(LogicGame): pass`",
          "correct": true
        },
        {
          "text": "`def Game(LogicGame): pass`",
          "correct": false
        },
        {
          "text": "`def Game.LogicGame(): pass`",
          "correct": false
        },
        {
          "text": "`class Game.LogicGame(): pass`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 11,
      "question": "What is the proper format for writing a doctest?",
      "options": [
        {
          "text": "A\n\n```python\ndef sum(a, b):\n    \"\"\"\n    sum(4, 3)\n    7\n\n    sum(-4, 5)\n    1\n    \"\"\"\n    return a + b\n```",
          "correct": false
        },
        {
          "text": "B\n\n```python\ndef sum(a, b):\n    \"\"\"\n    >>> sum(4, 3)\n    7\n\n    >>> sum(-4, 5)\n    1\n    \"\"\"\n    return a + b\n```",
          "correct": true
        },
        {
          "text": "C\n\n```python\ndef sum(a, b):\n    \"\"\"\n    # >>> sum(4, 3)\n    # 7\n\n    # >>> sum(-4, 5)\n    # 1\n    \"\"\"\n    return a + b\n```",
          "correct": false
        },
        {
          "text": "D\n\n```python\ndef sum(a, b):\n    ###\n    >>> sum(4, 3)\n    7\n\n    >>> sum(-4, 5)\n    1\n    ###\n    return a + b\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 12,
      "question": "What built-in Python data type is commonly used to represent a stack?",
      "options": [
        {
          "text": "`set`",
          "correct": false
        },
        {
          "text": "`list`",
          "correct": true
        },
        {
          "text": "`None`",
          "correct": false
        },
        {
          "text": "`dictionary`",
          "correct": false
        },
        {
          "text": "`You can only build a stack from scratch.`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 13,
      "question": "What would this expression return?\n\n```python\ncollege_years = ['Freshman', 'Sophomore', 'Junior', 'Senior']\nreturn list(enumerate(college_years, 2019))\n```",
      "options": [
        {
          "text": "`[('Freshman', 2019), ('Sophomore', 2020), ('Junior', 2021), ('Senior', 2022)]`",
          "correct": false
        },
        {
          "text": "`[(2019, 2020, 2021, 2022), ('Freshman', 'Sophomore', 'Junior', 'Senior')]`",
          "correct": false
        },
        {
          "text": "`[('Freshman', 'Sophomore', 'Junior', 'Senior'), (2019, 2020, 2021, 2022)]`",
          "correct": false
        },
        {
          "text": "`[(2019, 'Freshman'), (2020, 'Sophomore'), (2021, 'Junior'), (2022, 'Senior')]`",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 14,
      "question": "What is the purpose of the \"self\" keyword when defining or calling instance methods?",
      "options": [
        {
          "text": "`self` means that no other arguments are required to be passed into the method.",
          "correct": false
        },
        {
          "text": "There is no real purpose for the `self` method; it's just historic computer science jargon that Python keeps to stay consistent with other programming languages.",
          "correct": false
        },
        {
          "text": "`self` refers to the instance whose method was called.",
          "correct": true
        },
        {
          "text": "`self` refers to the class that was inherited from to create the object using `self`.",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/self-in-python-class/"
    },
    {
      "id": 15,
      "question": "Which of these is NOT a characteristic of namedtuples?",
      "options": [
        {
          "text": "You can assign a name to each of the `namedtuple` members and refer to them that way, similarly to how you would access keys in `dictionary`.",
          "correct": false
        },
        {
          "text": "Each member of a namedtuple object can be indexed directly, just like in a regular `tuple`.",
          "correct": false
        },
        {
          "text": "`namedtuples` are just as memory efficient as regular `tuples`.",
          "correct": false
        },
        {
          "text": "No import is needed to use `namedtuples` because they are available in the standard library.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 16,
      "question": "What is an instance method?",
      "options": [
        {
          "text": "Instance methods can modify the state of an instance or the state of its parent class.",
          "correct": true
        },
        {
          "text": "Instance methods hold data related to the instance.",
          "correct": false
        },
        {
          "text": "An instance method is any class method that doesn't take any arguments.",
          "correct": false
        },
        {
          "text": "An instance method is a regular function that belongs to a class, but it must return `None`.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 17,
      "question": "Which statement does NOT describe the object-oriented programming concept of encapsulation?",
      "options": [
        {
          "text": "It protects the data from outside interference.",
          "correct": false
        },
        {
          "text": "A parent class is encapsulated and no data from the parent class passes on to the child class.",
          "correct": true
        },
        {
          "text": "It keeps data and the methods that can manipulate that data in one place.",
          "correct": false
        },
        {
          "text": "It only allows the data to be changed by methods.",
          "correct": false
        }
      ],
      "reference": "https://www.scaler.com/topics/python/encapsulation-in-python/"
    },
    {
      "id": 18,
      "question": "What is the use of an if/else statement?",
      "options": [
        {
          "text": "It tells the computer which chunk of code to run if the instructions you coded are incorrect.",
          "correct": false
        },
        {
          "text": "It runs one chunk of code if all the imports were successful, and another chunk of code if the imports were not successful.",
          "correct": false
        },
        {
          "text": "It executes one chunk of code if a condition is true, but a different chunk of code if the condition is false.",
          "correct": true
        },
        {
          "text": "It tells the computer which chunk of code to run if the is enough memory to handle it, and which chunk of code to run if there is not enough memory to handle it.",
          "correct": false
        }
      ],
      "reference": "https://www.scaler.com/topics/python/python-if-else-statement/"
    },
    {
      "id": 19,
      "question": "What built-in Python data type is best suited for implementing a queue?",
      "options": [
        {
          "text": "dictionary",
          "correct": false
        },
        {
          "text": "set",
          "correct": false
        },
        {
          "text": "None. You can only build a queue from scratch.",
          "correct": false
        },
        {
          "text": "list",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 20,
      "question": "What is the correct syntax for instantiating a new object of the type Game?",
      "options": [
        {
          "text": "`my_game = class.Game()`",
          "correct": false
        },
        {
          "text": "`my_game = class(Game)`",
          "correct": false
        },
        {
          "text": "`my_game = Game()`",
          "correct": true
        },
        {
          "text": "`my_game = Game.create()`",
          "correct": false
        }
      ],
      "reference": "https://www.w3schools.com/python/python_classes.asp"
    },
    {
      "id": 21,
      "question": "What does the built-in `map()` function do?",
      "options": [
        {
          "text": "It creates a path from multiple values in an iterable to a single value.",
          "correct": false
        },
        {
          "text": "It applies a function to each item in an iterable and returns the value of that function.",
          "correct": true
        },
        {
          "text": "It converts a complex value type into simpler value types.",
          "correct": false
        },
        {
          "text": "It creates a mapping between two different elements of different iterables.",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/python-map-function/"
    },
    {
      "id": 22,
      "question": "If you don't explicitly return a value from a function, what happens?",
      "options": [
        {
          "text": "The function will return a RuntimeError if you don't return a value.",
          "correct": false
        },
        {
          "text": "If the return keyword is absent, the function will return `None`.",
          "correct": true
        },
        {
          "text": "If the return keyword is absent, the function will return `True`.",
          "correct": false
        },
        {
          "text": "The function will enter an infinite loop because it won't know when to stop executing its code.",
          "correct": false
        }
      ],
      "reference": "https://www.askpython.com/python/python-return-statement#"
    },
    {
      "id": 23,
      "question": "What is the purpose of the `pass` statement in Python?",
      "options": [
        {
          "text": "It is used to skip the `yield` statement of a generator and return a value of None.",
          "correct": false
        },
        {
          "text": "It is a null operation used mainly as a placeholder in functions, classes, etc.",
          "correct": true
        },
        {
          "text": "It is used to pass control from one statement block to another.",
          "correct": false
        },
        {
          "text": "It is used to skip the rest of a `while` or `for loop` and return to the start of the loop.\n\nThe pass statement is used as a placeholder for future code. When the pass statement is executed, nothing happens, but you avoid getting an error when empty code is not allowed.",
          "correct": false
        }
      ],
      "reference": "https://realpython.com/python-pass/"
    },
    {
      "id": 24,
      "question": "What is the term used to describe items that may be passed into a function?",
      "options": [
        {
          "text": "arguments",
          "correct": true
        },
        {
          "text": "paradigms",
          "correct": false
        },
        {
          "text": "attributes",
          "correct": false
        },
        {
          "text": "decorators",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 25,
      "question": "Which collection type is used to associate values with unique keys?",
      "options": [
        {
          "text": "`slot`",
          "correct": false
        },
        {
          "text": "`dictionary`",
          "correct": true
        },
        {
          "text": "`queue`",
          "correct": false
        },
        {
          "text": "`sorted list`",
          "correct": false
        }
      ],
      "reference": "https://www.w3schools.com/python/python_dictionaries.asp"
    },
    {
      "id": 26,
      "question": "When does a For loop stop iterating?",
      "options": [
        {
          "text": "when it encounters an infinite loop",
          "correct": false
        },
        {
          "text": "when it encounters an if/else statement that contains a break keyword",
          "correct": false
        },
        {
          "text": "when it has assessed each item in the iterable it is working on or a break keyword is encountered",
          "correct": true
        },
        {
          "text": "when the runtime for the loop exceeds O(n^2)",
          "correct": false
        }
      ],
      "reference": "https://www.w3schools.com/python/python_for_loops.asp"
    },
    {
      "id": 27,
      "question": "Assuming the node is in a singly linked list, what is the runtime complexity of searching for a specific node within a singly linked list?",
      "options": [
        {
          "text": "The runtime is O(n) because in the worst case, the node you are searching for is the last node, and every node in the linked list must be visited.",
          "correct": true
        },
        {
          "text": "The runtime is O(nk), with n representing the number of nodes and k representing the amount of time it takes to access each node in memory.",
          "correct": false
        },
        {
          "text": "The runtime cannot be determined unless you know how many nodes are in the singly linked list.",
          "correct": false
        },
        {
          "text": "The runtime is O(1) because you can index directly to a node in a singly linked list.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 28,
      "question": "Given the following three lists, how would you create a new list that matches the desired output printed below?\n\n```python\nfruits = ['Apples', 'Oranges', 'Bananas']\nquantities = [5, 3, 4]\nprices = [1.50, 2.25, 0.89]\n\n#Desired output\n[('Apples', 5, 1.50),\n('Oranges', 3, 2.25),\n('Bananas', 4, 0.89)]\n```",
      "options": [
        {
          "text": "A\n\n```python\noutput = []\n\nfruit_tuple_0 = (first[0], quantities[0], price[0])\noutput.append(fruit_tuple)\n\nfruit_tuple_1 = (first[1], quantities[1], price[1])\noutput.append(fruit_tuple)\n\nfruit_tuple_2 = (first[2], quantities[2], price[2])\noutput.append(fruit_tuple)\n\nreturn output\n```",
          "correct": false
        },
        {
          "text": "B\n\n```python\ni = 0\noutput = []\nfor fruit in fruits:\n    temp_qty = quantities[i]\n    temp_price = prices[i]\n    output.append((fruit, temp_qty, temp_price))\n    i += 1\nreturn output\n```",
          "correct": true
        },
        {
          "text": "C\n\n```python\ngroceries = zip(fruits, quantities, prices)\nreturn groceries\n\n>>> [\n('Apples', 5, 1.50),\n('Oranges', 3, 2.25),\n('Bananas', 4, 0.89)\n]\n```",
          "correct": false
        },
        {
          "text": "D\n\n```python\ni = 0\noutput = []\nfor fruit in fruits:\n    for qty in quantities:\n        for price in prices:\n            output.append((fruit, qty, price))\n    i += 1\nreturn output\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 29,
      "question": "What happens when you use the built-in function all() on a list?",
      "options": [
        {
          "text": "The `all()` function returns a Boolean value that answers the question \"Are all the items in this list the same?",
          "correct": false
        },
        {
          "text": "The `all()` function returns True if all the items in the list can be converted to strings. Otherwise, it returns False.",
          "correct": false
        },
        {
          "text": "The `all()` function will return all the values in the list.",
          "correct": false
        },
        {
          "text": "The `all()` function returns True if all items in the list are evaluated to True. Otherwise, it returns False.",
          "correct": true
        }
      ],
      "reference": "https://www.geeksforgeeks.org/python-all-function/"
    },
    {
      "id": 30,
      "question": "What is the correct syntax for calling an instance method on a class named Game?\n\n_(Answer format may vary. Game and roll (or dice_roll) should each be called with no parameters.)_",
      "options": [
        {
          "text": "A\n\n```python\n>>> dice = Game()\n>>> dice.roll()\n```",
          "correct": true
        },
        {
          "text": "B\n\n```python\n>>> dice = Game(self)\n>>> dice.roll(self)\n```",
          "correct": false
        },
        {
          "text": "C\n\n```python\n>>> dice = Game()\n>>> dice.roll(self)\n```",
          "correct": false
        },
        {
          "text": "D\n\n```python\n>>> dice = Game(self)\n>>> dice.roll()\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 31,
      "question": "What is the algorithmic paradigm of quick sort?",
      "options": [
        {
          "text": "Backtracking",
          "correct": false
        },
        {
          "text": "Dynamic programming",
          "correct": false
        },
        {
          "text": "Decrease and conquer",
          "correct": false
        },
        {
          "text": "Divide and conquer\n\nBoth merge sort and quicksort employ a common algorithmic paradigm based on recursion. This paradigm, divide-and-conquer, breaks a problem into subproblems that are similar to the original problem, recursively solves the subproblems, and finally combines the solutions to the subproblems to solve the original problem.",
          "correct": true
        }
      ],
      "reference": "https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms#:~:text=Both%20merge%20sort%20and%20quicksort,to%20solve%20the%20original%20problem."
    },
    {
      "id": 32,
      "question": "What is the runtime complexity of the list's built-in `.append()` method?",
      "options": [
        {
          "text": "O(1), also called constant time.",
          "correct": true
        },
        {
          "text": "O(log n), also called logarithmic time.",
          "correct": false
        },
        {
          "text": "O(n^2), also called quadratic time.",
          "correct": false
        },
        {
          "text": "O(n), also called linear time.\n\nThis function has constant time complexity i.e. O(1), because lists are randomly accessed so the last element can be reached in O(1) time that's why the time taken to add the new element at the end of the list is O(1).",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 33,
      "question": "What is the key difference between a `set` and a `list`?",
      "options": [
        {
          "text": "A set is an ordered collection of unique items. A list is an unordered collection of non-unique items.",
          "correct": false
        },
        {
          "text": "Elements can be retrieved from a list but they cannot be retrieved from a set.",
          "correct": false
        },
        {
          "text": "A set is an ordered collection of non-unique items. A list is an unordered collection of unique items.",
          "correct": false
        },
        {
          "text": "A set is an unordered collection of unique items. A list is an ordered collection of non-unique items.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 34,
      "question": "What is the definition of abstraction as applied to object-oriented Python?",
      "options": [
        {
          "text": "Abstraction means that a different style of code can be used since many details are already known to the program behind the scenes.",
          "correct": false
        },
        {
          "text": "Abstraction means the implementation is hidden from the user, and only the relevant data or information is shown.",
          "correct": true
        },
        {
          "text": "Abstraction means that the data and the functionality of a class are combined into one entity.",
          "correct": false
        },
        {
          "text": "Abstraction means that a class can inherit from more than one parent class.\n\nAbstraction in Python is defined as a process of handling complexity by hiding unnecessary information from the user.",
          "correct": false
        }
      ],
      "reference": "<https://www.mygreatlearning.com/blog/abstraction-in-python/#:~:text=What%20is%20Abstraction%20in%20Python,oriented%20programming%20(OOP"
    },
    {
      "id": 35,
      "question": "What does this function print?\n\n```python\ndef print_alpha_nums(abc_list, num_list):\n    for char in abc_list:\n        for num in num_list:\n            print(char, num)\n    return\n\nprint_alpha_nums(['a', 'b', 'c'], [1, 2, 3])\n```",
      "options": [
        {
          "text": "A\n\n```python\na 1\na 2\na 3\nb 1\nb 2\nb 3\nc 1\nc 2\nc 3\n```",
          "correct": true
        },
        {
          "text": "B\n\n```python\n['a', 'b', 'c'], [1, 2, 3]\n```",
          "correct": false
        },
        {
          "text": "C\n\n```python\naaa\nbbb\nccc\n111\n222\n333\n```",
          "correct": false
        },
        {
          "text": "D\n\n```python\na 1 2 3\nb 1 2 3\nc 1 2 3\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 36,
      "question": "Pick the correct representation of doctest for a function in Python.",
      "options": [
        {
          "text": "A\n\n```python\ndef sum(a, b):\n    # a = 1\n    # b = 2\n    # sum(a, b) = 3\n\n    return a + b\n```",
          "correct": false
        },
        {
          "text": "B\n\n```python\ndef sum(a, b):\n    \"\"\"\n    a = 1\n    b = 2\n    sum(a, b) = 3\n    \"\"\"\n\n    return a + b\n```",
          "correct": false
        },
        {
          "text": "C\n\n```python\ndef sum(a, b):\n    \"\"\"\n    >>> a = 1\n    >>> b = 2\n    >>> sum(a, b)\n    3\n    \"\"\"\n\n    return a + b\n```",
          "correct": true
        },
        {
          "text": "D\n\n```python\ndef sum(a, b):\n    '''\n    a = 1\n    b = 2\n    sum(a, b) = 3\n    '''\n    return a + b\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 37,
      "question": "Suppose a Game class inherits from two parent classes: BoardGame and LogicGame. Which statement is true about the methods of an object instantiated from the Game class?",
      "options": [
        {
          "text": "When instantiating an object, the object doesn't inherit any of the parent class's methods.",
          "correct": false
        },
        {
          "text": "When instantiating an object, the object will inherit the methods of whichever parent class has more methods.",
          "correct": false
        },
        {
          "text": "When instantiating an object, the programmer must specify which parent class to inherit methods from.",
          "correct": false
        },
        {
          "text": "An instance of the Game class will inherit whatever methods the BoardGame and LogicGame classes have.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 38,
      "question": "What does calling namedtuple on a collection type return?",
      "options": [
        {
          "text": "a generic object class with iterable parameter fields",
          "correct": false
        },
        {
          "text": "a generic object class with non-iterable named fields",
          "correct": false
        },
        {
          "text": "a tuple subclass with non-iterable parameter fields",
          "correct": false
        },
        {
          "text": "a tuple subclass with iterable named fields",
          "correct": true
        }
      ],
      "reference": "https://www.geeksforgeeks.org/namedtuple-in-python/?ref=lbp"
    },
    {
      "id": 39,
      "question": "What symbol(s) do you use to assess equality between two elements?",
      "options": [
        {
          "text": "`&&`",
          "correct": false
        },
        {
          "text": "`=`",
          "correct": false
        },
        {
          "text": "`==`",
          "correct": true
        },
        {
          "text": "`||`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 40,
      "question": "Review the code below. What is the correct syntax for changing the price to 1.5?\n\n```python\nfruit_info = {\n  'fruit': 'apple',\n  'count': 2,\n  'price': 3.5\n}\n```",
      "options": [
        {
          "text": "`fruit_info['price'] = 1.5`",
          "correct": true
        },
        {
          "text": "`my_list[3.5] = 1.5`",
          "correct": false
        },
        {
          "text": "`1.5 = fruit_info['price]`",
          "correct": false
        },
        {
          "text": "`my_list['price'] == 1.5`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 41,
      "question": "What value would be returned by this check for equality?\n\n`5 != 6`",
      "options": [
        {
          "text": "`yes`",
          "correct": false
        },
        {
          "text": "`False`",
          "correct": false
        },
        {
          "text": "`True`",
          "correct": true
        },
        {
          "text": "`None`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 42,
      "question": "What does a class's `__init__()` method do?",
      "options": [
        {
          "text": "It makes classes aware of each other if more than one class is defined in a single code file.",
          "correct": false
        },
        {
          "text": "It is included to preserve backward compatibility from Python 3 to Python 2, but it no longer needs to be used in Python 3.",
          "correct": false
        },
        {
          "text": "It is a method that acts as a constructor and is called automatically whenever a new object is created from a class. It sets the initial state of a new object.",
          "correct": true
        },
        {
          "text": "It initializes any imports you may have included at the top of your file.",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/__init__-in-python/"
    },
    {
      "id": 43,
      "question": "What is meant by the phrase \"space complexity\"?",
      "options": [
        {
          "text": "`How many microprocessors it would take to run your code in less than one second`",
          "correct": false
        },
        {
          "text": "`How many lines of code are in your code file`",
          "correct": false
        },
        {
          "text": "`The amount of space taken up in memory as a function of the input size`",
          "correct": true
        },
        {
          "text": "`How many copies of the code file could fit in 1 GB of memory`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 44,
      "question": "What is the correct syntax for creating a variable that is bound to a dictionary?",
      "options": [
        {
          "text": "`fruit_info = {'fruit': 'apple', 'count': 2, 'price': 3.5}`",
          "correct": true
        },
        {
          "text": "`fruit_info =('fruit': 'apple', 'count': 2,'price': 3.5 ).dict()`",
          "correct": false
        },
        {
          "text": "`fruit_info = ['fruit': 'apple', 'count': 2,'price': 3.5 ].dict()`",
          "correct": false
        },
        {
          "text": "`fruit_info = to_dict('fruit': 'apple', 'count': 2, 'price': 3.5)`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 45,
      "question": "What is the proper way to write a list comprehension that represents all the keys in this dictionary?\n\n`fruits = {'Apples': 5, 'Oranges': 3, 'Bananas': 4}`",
      "options": [
        {
          "text": "`fruit_names = [x in fruits.keys() for x]`",
          "correct": false
        },
        {
          "text": "`fruit_names = for x in fruits.keys() *`",
          "correct": false
        },
        {
          "text": "`fruit_names = [x for x in fruits.keys()]`",
          "correct": true
        },
        {
          "text": "`fruit_names = x for x in fruits.keys()`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 46,
      "question": "What is the purpose of the `self` keyword when defining or calling methods on an instance of an object?",
      "options": [
        {
          "text": "`self` refers to the class that was inherited from to create the object using `self`.",
          "correct": false
        },
        {
          "text": "There is no real purpose for the `self` method. It's just legacy computer science jargon that Python keeps to stay consistent with other programming languages.",
          "correct": false
        },
        {
          "text": "`self` means that no other arguments are required to be passed into the method.",
          "correct": false
        },
        {
          "text": "`self` refers to the instance whose method was called.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 47,
      "question": "What statement about the class methods is true?",
      "options": [
        {
          "text": "A class method is a regular function that belongs to a class, but it must return None.",
          "correct": false
        },
        {
          "text": "A class method can modify the state of the class, but it can't directly modify the state of an instance that inherits from that class.",
          "correct": true
        },
        {
          "text": "A class method is similar to a regular function, but a class method doesn't take any arguments.",
          "correct": false
        },
        {
          "text": "A class method holds all of the data for a particular class.",
          "correct": false
        }
      ],
      "reference": "https://pynative.com/python-class-method/"
    },
    {
      "id": 48,
      "question": "What does it mean for a function to have linear runtime?",
      "options": [
        {
          "text": "You did not use very many advanced computer programming concepts in your code.",
          "correct": false
        },
        {
          "text": "The difficulty level your code is written at is not that high.",
          "correct": false
        },
        {
          "text": "It will take your program less than half a second to run.",
          "correct": false
        },
        {
          "text": "The amount of time it takes the function to complete grows linearly as the input size increases.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 49,
      "question": "What is the proper way to define a function?",
      "options": [
        {
          "text": "`def getMaxNum(list_of_nums): # body of function goes here`",
          "correct": false
        },
        {
          "text": "`func get_max_num(list_of_nums): # body of function goes here`",
          "correct": false
        },
        {
          "text": "`func getMaxNum(list_of_nums): # body of function goes here`",
          "correct": false
        },
        {
          "text": "`def get_max_num(list_of_nums): # body of function goes here`\n\nThe use of underscores as word separators dates back to the late 1960s. It is particularly associated with C, is found in The C Programming Language (1978), and contrasted with the Pascal case (a type of camel case). However, the convention traditionally had no specific name: the Python programming language style guide refers to it simply as \"lower*case_with_underscores\".[2]\nWithin Usenet the term snake_case was first seen in the Rubycommunity in 2004,[3] used by Gavin Kistner, writing:\nBTW...what \\_do* you call that naming style? snake_case? That's what I'll call it until someone corrects me.",
          "correct": true
        }
      ],
      "reference": "https://en.wikipedia.org/wiki/Snake_case"
    },
    {
      "id": 50,
      "question": "According to the PEP 8 coding style guidelines, how should constant values be named in Python?",
      "options": [
        {
          "text": "in camel case without using underscores to separate words -- e.g. `maxValue = 255`",
          "correct": false
        },
        {
          "text": "in lowercase with underscores to separate words -- e.g. `max_value = 255`",
          "correct": false
        },
        {
          "text": "in all caps with underscores separating words -- e.g. `MAX_VALUE = 255`",
          "correct": true
        },
        {
          "text": "in the mixed case without using underscores to separate words -- e.g. `MaxValue = 255`\n\nUse an uppercase single letter, word, or words. Separate words with underscores to improve readability.",
          "correct": false
        }
      ],
      "reference": "https://realpython.com/python-pep8/"
    },
    {
      "id": 51,
      "question": "Describe the functionality of a deque.",
      "options": [
        {
          "text": "A deque adds items to one side and removes items from the other side.",
          "correct": false
        },
        {
          "text": "A deque adds items to either or both sides but only removes items from the top.",
          "correct": false
        },
        {
          "text": "A deque adds items at either or both ends and removes items at either or both ends.",
          "correct": true
        },
        {
          "text": "A deque adds items only to the top but removes them from either or both sides.\n\nDeque or Double Ended Queue is a generalized version of the Queue data structure that allows inserting and deletion at both ends.",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/deque-set-1-introduction-applications/?ref=gcse"
    },
    {
      "id": 52,
      "question": "What is the correct syntax for creating a variable that is bound to a set?",
      "options": [
        {
          "text": "`my_set = {0, 'apple', 3.5}`",
          "correct": true
        },
        {
          "text": "`my_set = to_set(0, 'apple', 3.5)`",
          "correct": false
        },
        {
          "text": "`my_set = (0, 'apple', 3.5).to_set()`",
          "correct": false
        },
        {
          "text": "`my_set = (0, 'apple', 3.5).set()`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 53,
      "question": "What is the correct syntax for defining an `__init__()` method that takes no parameters?",
      "options": [
        {
          "text": ":\n\n```python\nclass __init__(self):\n    pass\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\ndef __init__():\n    pass\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\nclass __init__():\n    pass\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\ndef __init__(self):\n    pass\n```",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 54,
      "question": "Which of the following is TRUE About how numeric data would be organized in a Binary Search Tree?",
      "options": [
        {
          "text": "For any given node in a binary search tree, the value of the node is greater than all the values in the node's left subtree and less than the ones in its right subtree.",
          "correct": true
        },
        {
          "text": "Binary Search Tree cannot be used to organize and search through numeric data, given the complications that arise with very deep trees.",
          "correct": false
        },
        {
          "text": "The top node of the binary search tree would be an arbitrary number. All the nodes to the left of the top node need to be less than the top node's number, but they don't need to be ordered in any particular way.",
          "correct": false
        },
        {
          "text": "The smallest numeric value would go in the topmost node. The next highest number would go in its left child node, the the next highest number after that would go in its right child node. This pattern would continue until all numeric values were in their node.\n\nIn computer science, a binary search tree (BST), also called an ordered or sorted binary tree, is a rooted binary tree data structure with the key of each internal node being greater than all the keys in the respective node's left subtree and less than the ones in its right subtree.",
          "correct": false
        }
      ],
      "reference": "https://en.wikipedia.org/wiki/Binary_search_tree#:~:text=In%20computer%20science%2C%20a%20binary,ones%20in%20its%20right%20subtree."
    },
    {
      "id": 55,
      "question": "Why would you use a decorator?",
      "options": [
        {
          "text": "A decorator is similar to a class and should be used if you are doing functional programming instead of object-oriented programming.",
          "correct": false
        },
        {
          "text": "A decorator is a visual indicator to someone reading your code that a portion of your code is critical and should not be changed.",
          "correct": false
        },
        {
          "text": "You use the decorator to alter the functionality of a function without having to modify the function code.",
          "correct": true
        },
        {
          "text": "An import statement is preceded by a decorator, python knows to import the most recent version of whatever package or library is being imported.\n\nDecorators allow us to wrap another function to extend the behavior of the wrapped function, without permanently modifying it.",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/decorators-in-python/"
    },
    {
      "id": 56,
      "question": "When would you use a for loop?",
      "options": [
        {
          "text": "Only in some situations, as loops are used only for certain types of programming.",
          "correct": false
        },
        {
          "text": "When you need to check every element in an iterable of known length.",
          "correct": true
        },
        {
          "text": "When you want to minimize the use of strings in your code.",
          "correct": false
        },
        {
          "text": "When you want to run code in one file for a function in another file.",
          "correct": false
        }
      ],
      "reference": "https://www.interviewbit.com/python-cheat-sheet/"
    },
    {
      "id": 57,
      "question": "What is the most self-descriptive way to define a function that calculates sales tax on a purchase?",
      "options": [
        {
          "text": "A:\n\n```python\ndef tax(my_float):\n    ''' Calculates the sales tax of a purchase. Takes in a float representing the subtotal as an argument and returns a float representing the sales tax.'''\n    pass\n```",
          "correct": false
        },
        {
          "text": "B:\n\n```python\ndef tx(amt):\n    ''' Gets the tax on an amount.'''\n```",
          "correct": false
        },
        {
          "text": "C:\n\n```python\ndef sales_tax(amount):\n    ''' Calculates the sales tax of a purchase. Takes in a float representing the subtotal as an argument and returns a float representing the sales tax.'''\n```",
          "correct": false
        },
        {
          "text": "D:\n\n```python\ndef calculate_sales_tax(subtotal):\n    pass\n```",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 58,
      "question": "What would happen if you did not alter the state of the element that an algorithm is operating on recursively?",
      "options": [
        {
          "text": "You do not have to alter the state of the element the algorithm is recursing on.",
          "correct": false
        },
        {
          "text": "You would eventually get a KeyError when the recursive portion of the code ran out of items to recurse on.",
          "correct": false
        },
        {
          "text": "You would get a RuntimeError: maximum recursion depth exceeded.",
          "correct": true
        },
        {
          "text": "The function using recursion would return None.\n\n[explanation](https://www.python-course.eu/python3_recursive_functions.php#Definition-of-Recursion)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 59,
      "question": "What is the runtime complexity of searching for an item in a binary search tree?",
      "options": [
        {
          "text": "The runtime for searching in a binary search tree is O(1) because each node acts as a key, similar to a dictionary.",
          "correct": false
        },
        {
          "text": "The runtime for searching in a binary search tree is O(n!) because every node must be compared to every other node.",
          "correct": false
        },
        {
          "text": "The runtime for searching in a binary search tree is generally O(h), where h is the height of the tree.",
          "correct": true
        },
        {
          "text": "The runtime for searching in a binary search tree is O(n) because every node in the tree must be visited.\n\n[explanation](https://www.geeksforgeeks.org/binary-search-tree-data-structure/)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 60,
      "question": "Why would you use `mixin`?",
      "options": [
        {
          "text": "You use a `mixin` to force a function to accept an argument at runtime even if the argument wasn't included in the function's definition.",
          "correct": false
        },
        {
          "text": "You use a `mixin` to allow a decorator to accept keyword arguments.",
          "correct": false
        },
        {
          "text": "You use a `mixin` to make sure that a class's attributes and methods don't interfere with global variables and functions.",
          "correct": false
        },
        {
          "text": "If you have many classes that all need to have the same functionality, you'd use a `mixin` to define that functionality.\n\nThere are two main situations where mixins are used:\nYou want to provide a lot of optional features for a class.\nYou want to use one particular feature in a lot of different classes.",
          "correct": true
        }
      ],
      "reference": "https://stackoverflow.com/questions/533631/what-is-a-mixin-and-why-is-it-useful"
    },
    {
      "id": 61,
      "question": "What is the runtime complexity of adding an item to a stack and removing an item from a stack?",
      "options": [
        {
          "text": "Add items to a stack in O(1) time and remove items from a stack on O(n) time.",
          "correct": false
        },
        {
          "text": "Add items to a stack in O(1) time and remove items from a stack in O(1) time.",
          "correct": true
        },
        {
          "text": "Add items to a stack in O(n) time and remove items from a stack on O(1) time.",
          "correct": false
        },
        {
          "text": "Add items to a stack in O(n) time and remove items from a stack in O(n) time.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 62,
      "question": "Which statement accurately describes how items are added to and removed from a stack?",
      "options": [
        {
          "text": "a stack adds items to one side and removes items from the other side.",
          "correct": false
        },
        {
          "text": "a stack adds items to the top and removes items from the top.",
          "correct": true
        },
        {
          "text": "a stack adds items to the top and removes items from anywhere in the stack.",
          "correct": false
        },
        {
          "text": "a stack adds items to either end and removes items from either end.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 63,
      "question": "What is a base case in a recursive function?",
      "options": [
        {
          "text": "A base case is the condition that allows the algorithm to stop recursing. It is usually a problem that is small enough to solve directly.",
          "correct": true
        },
        {
          "text": "The base case is a summary of the overall problem that needs to be solved.",
          "correct": false
        },
        {
          "text": "The base case is passed in as an argument to a function whose body makes use of recursion.",
          "correct": false
        },
        {
          "text": "The base case is similar to a base class, in that it can be inherited by another object.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 64,
      "question": "Why is it considered good practice to open a file from within a Python script by using the `with` keyword?",
      "options": [
        {
          "text": "The `with` keyword lets you choose which application to open the file in.",
          "correct": false
        },
        {
          "text": "The `with` keyword acts like a `for` loop, and lets you access each line in the file one by one.",
          "correct": false
        },
        {
          "text": "There is no benefit to using the `with` keyword for opening a file in Python.",
          "correct": false
        },
        {
          "text": "When you open a file using the `with` keyword in Python, Python will make sure the file gets closed, even if an exception or error is thrown.\n\nIt is good practice to use the 'with' keyword when dealing with file objects. The advantage is that the file is properly closed after its suite finishes, even if an exception is raised at some point. Using with is also much shorter than writing equivalent try-finally blocks:",
          "correct": true
        }
      ],
      "reference": "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files"
    },
    {
      "id": 65,
      "question": "Why would you use a virtual environment?",
      "options": [
        {
          "text": "Virtual environments create a \"bubble\" around your project so that any libraries or packages you install within it don't affect your entire machine.",
          "correct": true
        },
        {
          "text": "Teams with remote employees use virtual environments so they can share code, do code reviews, and collaborate remotely.",
          "correct": false
        },
        {
          "text": "Virtual environments were common in Python 2 because they augmented missing features in the language. Virtual environments are not necessary in Python 3 due to advancements in the language.",
          "correct": false
        },
        {
          "text": "Virtual environments are tied to your GitHub or Bitbucket account, allowing you to access any of your repos virtually from any machine.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 66,
      "question": "What is the correct way to run all the doctests in a given file from the command line?",
      "options": [
        {
          "text": "`python3 -m doctest <_filename_>`",
          "correct": true
        },
        {
          "text": "`python3 <_filename_>`",
          "correct": false
        },
        {
          "text": "`python3 <_filename_> rundoctests`",
          "correct": false
        },
        {
          "text": "`python3 doctest`\n\nThere is also a command line shortcut for running testmod(). You can instruct the Python interpreter to run the doctest module directly from the standard library and pass the module name(s) on the command line:\n`python -m doctest -v example.py`\nThis will import example.py as a standalone module and run testmod() on it. Note that this may not work correctly if the file is part of a package and imports other submodules from that package.",
          "correct": false
        }
      ],
      "reference": "https://docs.python.org/3/library/doctest.html"
    },
    {
      "id": 67,
      "question": "What is a lambda function ?",
      "options": [
        {
          "text": "any function that makes use of scientific or mathematical constants, often represented by Greek letters in academic writing",
          "correct": false
        },
        {
          "text": "a function that gets executed when decorators are used",
          "correct": false
        },
        {
          "text": "any function whose definition is contained within five lines of code or fewer",
          "correct": false
        },
        {
          "text": "a small, anonymous function that can take any number of arguments but has only expression to evaluate",
          "correct": true
        }
      ],
      "reference": "https://www.guru99.com/python-lambda-function.html"
    },
    {
      "id": 68,
      "question": "What is the primary difference between lists and tuples?",
      "options": [
        {
          "text": "You can access a specific element in a list by indexing to its position, but you cannot access a specific element in a tuple unless you iterate through the tuple",
          "correct": false
        },
        {
          "text": "Lists are mutable, meaning you can change the data that is inside them at any time. Tuples are immutable, meaning you cannot change the data that is inside them once you have created the tuple.",
          "correct": true
        },
        {
          "text": "Lists are immutable, meaning you cannot change the data that is inside them once you have created the list. Tuples are mutable, meaning you can change the data that is inside them at any time.",
          "correct": false
        },
        {
          "text": "Lists can hold several data types inside them at once, but tuples can only hold the same data type if multiple elements are present.",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/python-difference-between-list-and-tuple/"
    },
    {
      "id": 69,
      "question": "What does a generator return?",
      "options": [
        {
          "text": "None",
          "correct": false
        },
        {
          "text": "An iterable object",
          "correct": true
        },
        {
          "text": "A linked list data structure from a non-empty list",
          "correct": false
        },
        {
          "text": "All the keys of the given dictionary",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 70,
      "question": "What is the difference between class attributes and instance attributes?",
      "options": [
        {
          "text": "Instance attributes can be changed, but class attributes cannot be changed",
          "correct": false
        },
        {
          "text": "Class attributes are shared by all instances of the class. Instance attributes may be unique to just that instance",
          "correct": true
        },
        {
          "text": "There is no difference between class attributes and instance attributes",
          "correct": false
        },
        {
          "text": "Class attributes belong just to the class, not to the instance of that class. Instance attributes are shared among all instances of a class",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 71,
      "question": "What is the correct syntax for creating an instance method?",
      "options": [
        {
          "text": ":\n\n```python\ndef get_next_card():\n  # method body goes here\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\ndef get_next_card(self):\n  # method body goes here\n```",
          "correct": true
        },
        {
          "text": ":\n\n```python\ndef self.get_next_card():\n  # method body goes here\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\ndef self.get_next_card(self):\n  # method body goes here\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 72,
      "question": "What is the correct way to call a function?",
      "options": [
        {
          "text": "`get_max_num([57, 99, 31, 18])`",
          "correct": true
        },
        {
          "text": "`call.(get_max_num)`",
          "correct": false
        },
        {
          "text": "`def get_max_num([57, 99, 31, 18])`",
          "correct": false
        },
        {
          "text": "`call.get_max_num([57, 99, 31, 18])`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 73,
      "question": "How do you add a comment to an existing Python script?",
      "options": [
        {
          "text": "`-- This is a comment`",
          "correct": false
        },
        {
          "text": "`# This is a comment`",
          "correct": true
        },
        {
          "text": "`/* This is a comment */`",
          "correct": false
        },
        {
          "text": "`// This is a comment`",
          "correct": false
        }
      ],
      "reference": "https://realpython.com/python-comments-guide/"
    },
    {
      "id": 74,
      "question": "What is the correct syntax for replacing the string `apple` in the list with the string `orange`?\n\n```python\nmy_list = ['kiwi', 'apple', 'banana']\n```",
      "options": [
        {
          "text": "`orange = my_list[1]`",
          "correct": false
        },
        {
          "text": "`my_list[1] = 'orange'`",
          "correct": true
        },
        {
          "text": "`my_list['orange'] = 1`",
          "correct": false
        },
        {
          "text": "`my_list[1] == orange`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 75,
      "question": "What will happen if you use a while loop and forget to include logic that eventually causes the while loop to stop?",
      "options": [
        {
          "text": "Nothing will happen; your computer knows when to stop running the code in the while loop.",
          "correct": false
        },
        {
          "text": "You will get a KeyError.",
          "correct": false
        },
        {
          "text": "Your code will get stuck in an infinite loop.",
          "correct": true
        },
        {
          "text": "You will get a WhileLoopError.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 76,
      "question": "Describe the functionality of a queue.",
      "options": [
        {
          "text": "A queue adds items to the back and removes items from the front.",
          "correct": true
        },
        {
          "text": "A queue adds items to the top and removes items from the top.",
          "correct": false
        },
        {
          "text": "A queue adds items to the top and removes items from anywhere in, a list.",
          "correct": false
        },
        {
          "text": "A queue adds items to the top and removes items from anywhere in the queue.\n\nTypical queue definition follows \"first-in, first out\" (FIFO) where items are enqueued on one-side and dequeued from the other.",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/dsa/queue-data-structure/"
    },
    {
      "id": 77,
      "question": "Which choice is the most syntactically correct example of conditional branching?",
      "options": [
        {
          "text": "A:\n\n```python\nnum_people = 5\n\nif num_people > 10:\n    print(\"There is a lot of people in the pool.\")\nelif num_people > 4:\n    print(\"There are some people in the pool.\")\nelse:\n    print(\"There is no one in the pool.\")\n```",
          "correct": true
        },
        {
          "text": "B:\n\n```python\nnum_people = 5\n\nif num_people > 10:\n    print(\"There is a lot of people in the pool.\")\nif num_people > 4:\n    print(\"There are some people in the pool.\")\nelse:\n    print(\"There is no one in the pool.\")\n```",
          "correct": false
        },
        {
          "text": "C:\n\n```python\nnum_people = 5\n\nif num_people > 10;\n    print(\"There is a lot of people in the pool.\")\nelif num_people > 4;\n    print(\"There are some people in the pool.\")\nelse;\n    print(\"There is no one in the pool.\")\n```",
          "correct": false
        },
        {
          "text": "D:\n\n```python\nif num_people > 10;\n    print(\"There is a lot of people in the pool.\")\nif num_people > 4;\n    print(\"There are some people in the pool.\")\nelse;\n    print(\"There is no one in the pool.\")\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 78,
      "question": "How does `defaultdict` work?",
      "options": [
        {
          "text": "`defaultdict` will automatically create a dictionary for you that has keys which are the integers 0-10.",
          "correct": false
        },
        {
          "text": "`defaultdict` forces a dictionary to only accept keys that are of the types specified when you created the `defaultdict` (such as strings or integers).",
          "correct": false
        },
        {
          "text": "If you try to read from a `defaultdict` with a nonexistent key, a new default key-value pair will be created for you instead of throwing a `KeyError`.",
          "correct": true
        },
        {
          "text": "`defaultdict` stores a copy of a dictionary in memory that you can default to if the original gets unintentionally modified.\n\n`defaultdict` is a container-like dictionary present in the module collections. The functionality of both dictionaries and `defaultdict` are almost the same except for the fact that `defaultdict` never raises a `KeyError`. It provides a default value for the key that does not exist.",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/defaultdict-in-python/"
    },
    {
      "id": 79,
      "question": "What is the correct syntax for adding a key called `variety` to the `fruit_info` dictionary that has a value of `Red Delicious`?",
      "options": [
        {
          "text": "`fruit_info['variety'] == 'Red Delicious'`",
          "correct": false
        },
        {
          "text": "`fruit_info['variety'] = 'Red Delicious'`",
          "correct": true
        },
        {
          "text": "`red_delicious = fruit_info['variety']`",
          "correct": false
        },
        {
          "text": "`red_delicious == fruit_info['variety']`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 80,
      "question": "When would you use a `while` loop?",
      "options": [
        {
          "text": "When you want to minimize the use of strings in your code.",
          "correct": false
        },
        {
          "text": "When you want to run code in one file while code in another file is also running.",
          "correct": false
        },
        {
          "text": "When you want some code to continue running as long as some condition is true.",
          "correct": true
        },
        {
          "text": "When you need to run two or more chunks of code at once within the same file.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 81,
      "question": "What is the correct syntax for defining an `__init__()` method that sets instance-specific attributes upon creation of a new class instance?",
      "options": [
        {
          "text": ":\n\n```python\ndef __init__(self, attr1, attr2):\n    attr1 = attr1\n    attr2 = attr2\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\ndef __init__(attr1, attr2):\n    attr1 = attr1\n    attr2 = attr2\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\ndef __init__(self, attr1, attr2):\n    self.attr1 = attr1\n    self.attr2 = attr2\n```",
          "correct": true
        },
        {
          "text": ":\n\n```python\ndef __init__(attr1, attr2):\n    self.attr1 = attr1\n    self.attr2 = attr2\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 82,
      "question": "What would this recursive function print if it is called with no parameters?\n\n```python\ndef count_recursive(n=1):\n    if n > 3:\n        return\n    print(n)\n\n    count_recursive(n + 1)\n```",
      "options": [
        {
          "text": ":\n\n```python\n1\n1\n2\n2\n3\n3\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\n3\n2\n1\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\n3\n3\n2\n2\n1\n1\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\n1\n2\n3\n```",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 83,
      "question": "In Python, when using sets, you use **\\_** to calculate the intersection between two sets and **\\_** to calculate the union.",
      "options": [
        {
          "text": "`Intersect`; `union`",
          "correct": false
        },
        {
          "text": "`|`; `&`",
          "correct": false
        },
        {
          "text": "`&`; `|`",
          "correct": true
        },
        {
          "text": "`&&`; `||`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 84,
      "question": "What will this code fragment return?\n\n```python\nimport numpy as np\nnp.ones([1,2,3,4,5])\n```",
      "options": [
        {
          "text": "It returns a 5x5 matrix; each row will have the values 1,2,3,4,5.",
          "correct": false
        },
        {
          "text": "It returns an array with the values 1,2,3,4,5.",
          "correct": false
        },
        {
          "text": "It returns five different square matrices filled with ones. The first is 1x1, the second 2x2, and so on to 5x5.",
          "correct": false
        },
        {
          "text": "It returns a 5-dimensional array of size 1x2x3x4x5 filled with 1s.",
          "correct": true
        }
      ],
      "reference": "https://www.geeksforgeeks.org/numpy-ones-python/"
    },
    {
      "id": 85,
      "question": "You encounter a FileNotFoundException while using just the filename in the `open` function. What might be the easiest solution?",
      "options": [
        {
          "text": "Make sure the file is on the system `PATH`.",
          "correct": false
        },
        {
          "text": "Create a symbolic link to allow better access to the file.",
          "correct": false
        },
        {
          "text": "Copy the file to the same directory as where the script is running from.",
          "correct": true
        },
        {
          "text": "Add the path to the file to the `PYTHONPATH` environment variable.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 86,
      "question": "what will this command return?\n\n```python\n{x for x in range(100) if x%3 == 0}\n```",
      "options": [
        {
          "text": "A set of all the multiples of 3 less than 100.",
          "correct": true
        },
        {
          "text": "A set of all the numbers from 0 to 100 multiplied by 3.",
          "correct": false
        },
        {
          "text": "A list of all the multiples of 3 less than 100.",
          "correct": false
        },
        {
          "text": "A set of all the multiples of 3 less than 100 excluding 0.",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/comprehensions-in-python/"
    },
    {
      "id": 87,
      "question": "What does the // operator in Python 3 allow you to do?",
      "options": [
        {
          "text": "Perform integer division.",
          "correct": true
        },
        {
          "text": "Perform operations on exponents.",
          "correct": false
        },
        {
          "text": "Find the remainder of a division operation.",
          "correct": false
        },
        {
          "text": "Perform floating point division.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 88,
      "question": "What file is imported to use dates in Python?",
      "options": [
        {
          "text": "`datetime`",
          "correct": true
        },
        {
          "text": "`dateday`",
          "correct": false
        },
        {
          "text": "`daytime`",
          "correct": false
        },
        {
          "text": "`timedate`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 89,
      "question": "What is the correct syntax for defining a class called Game?",
      "options": [
        {
          "text": "`def Game(): pass`",
          "correct": false
        },
        {
          "text": "`def Game: pass`",
          "correct": false
        },
        {
          "text": "`class Game: pass`",
          "correct": true
        },
        {
          "text": "`class Game(): pass`\n\n[reference here](https://docs.python.org/3/tutorial/classes.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 90,
      "question": "What is the correct syntax for calling an instance method on a class named Game?",
      "options": [
        {
          "text": "`my_game = Game(self) self.my_game.roll_dice()`",
          "correct": false
        },
        {
          "text": "`my_game = Game() self.my_game.roll_dice()`",
          "correct": false
        },
        {
          "text": "`my_game = Game() my_game.roll_dice()`",
          "correct": true
        },
        {
          "text": "`my_game = Game(self) my_game.roll_dice(self)`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 91,
      "question": "What is the output of this code? (NumPy has been imported as np.)?\n\n```python\na = np.array([1,2,3,4])\nprint(a[[False, True, False, False]])\n```",
      "options": [
        {
          "text": "`{0,2}`",
          "correct": false
        },
        {
          "text": "`[2]`",
          "correct": true
        },
        {
          "text": "`{2}`",
          "correct": false
        },
        {
          "text": "`[0,2,0,0]`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 92,
      "question": "Suppose you have a string variable defined as y=\"stuff;thing;junk;\". What would be the output from this code?\n\n```python\nz = y.split(';')\nlen(z)\n```",
      "options": [
        {
          "text": "17",
          "correct": false
        },
        {
          "text": "4",
          "correct": true
        },
        {
          "text": "0",
          "correct": false
        },
        {
          "text": "3",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 93,
      "question": "What is the output of this code?\n\n```python\nnum_list = [1,2,3,4,5]\nnum_list.remove(2)\nprint(num_list)\n```",
      "options": [
        {
          "text": "`[1,2,4,5]`",
          "correct": false
        },
        {
          "text": "`[1,3,4,5]`",
          "correct": true
        },
        {
          "text": "`[3,4,5]`",
          "correct": false
        },
        {
          "text": "`[1,2,3]`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 94,
      "question": "Which command will create a list from 10 down to 1? Example:\n\n`[10,9,8,7,6,5,4,3,2,1]`",
      "options": [
        {
          "text": "`reversed(list(range(1,11)))`",
          "correct": false
        },
        {
          "text": "`list(reversed(range(1,10)))`",
          "correct": false
        },
        {
          "text": "`list(range(10,1,-1))`",
          "correct": false
        },
        {
          "text": "`list(reversed(range(1,11)))`",
          "correct": true
        }
      ],
      "reference": "https://www.w3schools.com/python/python_tuples.asp"
    },
    {
      "id": 95,
      "question": "Which fragment of code will print the same output as this fragment?\n\n```Python\nimport math\nprint(math.pow(2,10)) # prints 2 elevated to the 10th power\n```",
      "options": [
        {
          "text": ":\n\n```python\nprint(2^10)\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\nprint(2**10)\n```",
          "correct": true
        },
        {
          "text": ":\n\n```python\ny = [x*2 for x in range(1,10)]\nprint(y)\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\ny = 1\nfor i in range(1,10):\n    y = y * 2\nprint(y)\n```",
          "correct": false
        }
      ],
      "reference": "https://www.digitalocean.com/community/tutorials/how-to-do-math-in-python-3-with-operators#:~:text=The%20**%20operator%20in%20Python,multiplied%20by%20itself%203%20times."
    },
    {
      "id": 96,
      "question": "Elements surrounded by `[]` are **\\_**, `{}` are **\\_**, and `()` are **\\_**.",
      "options": [
        {
          "text": "sets only; lists or dictionaries; tuples",
          "correct": false
        },
        {
          "text": "lists; sets only; tuples",
          "correct": false
        },
        {
          "text": "tuples; sets or lists; dictionaries",
          "correct": false
        },
        {
          "text": "lists; dictionaries or sets; tuples",
          "correct": true
        }
      ],
      "reference": "https://www.geeksforgeeks.org/differences-and-applications-of-list-tuple-set-and-dictionary-in-python/"
    },
    {
      "id": 97,
      "question": "What is the output of this code? (NumPy has been imported as np.)\n\n```python\ntable = np.array([\n    [1,3],\n    [2,4]])\nprint(table.max(axis=1))\n```",
      "options": [
        {
          "text": "`[2, 4]`",
          "correct": false
        },
        {
          "text": "`[3, 4]`",
          "correct": true
        },
        {
          "text": "`[4]`",
          "correct": false
        },
        {
          "text": "`[1,2]`",
          "correct": false
        }
      ],
      "reference": "https://colab.research.google.com/drive/1PRGf7Wgcr_gQk7snnxxuc5rL9O1ky9Xg?usp=sharing"
    },
    {
      "id": 98,
      "question": "What will this code print?\n\n```python\nnumber = 3\nprint(f\"The number is {number}\")\n```",
      "options": [
        {
          "text": "`The number is 3`",
          "correct": true
        },
        {
          "text": "`the number is 3`",
          "correct": false
        },
        {
          "text": "`THE NUMBER IS 3`",
          "correct": false
        },
        {
          "text": "It throws a `TypeError` because the integer must be cast to a string.",
          "correct": false
        }
      ],
      "reference": "https://colab.research.google.com/drive/1PRGf7Wgcr_gQk7snnxxuc5rL9O1ky9Xg?usp=sharing"
    },
    {
      "id": 99,
      "question": "Which syntax correctly creates a variable that is bound to a tuple?",
      "options": [
        {
          "text": "`my_tuple tup(2, 'apple', 3.5) %D`",
          "correct": false
        },
        {
          "text": "`my_tuple [2, 'apple', 3.5].tuple() %D`",
          "correct": false
        },
        {
          "text": "`my_tuple = (2, 'apple', 3.5)`",
          "correct": true
        },
        {
          "text": "`my_tuple = [2, 'apple', 3.5]`",
          "correct": false
        }
      ],
      "reference": "https://beginnersbook.com/2018/02/python-tuple/"
    },
    {
      "id": 100,
      "question": "Which mode is not a valid way to access a file from within a Python script?",
      "options": [
        {
          "text": "`write('w')`",
          "correct": false
        },
        {
          "text": "`scan('s')`",
          "correct": true
        },
        {
          "text": "`append('a')`",
          "correct": false
        },
        {
          "text": "`read('r')`",
          "correct": false
        }
      ],
      "reference": "https://docs.python.org/3/library/functions.html#open"
    },
    {
      "id": 101,
      "question": "NumPy allows you to multiply two arrays without a for loop. This is an example of \\_.",
      "options": [
        {
          "text": "Vectorization.",
          "correct": true
        },
        {
          "text": "Attributions.",
          "correct": false
        },
        {
          "text": "Acceleration.",
          "correct": false
        },
        {
          "text": "Functional programming.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 102,
      "question": "What built-in Python data type can be used as a hash table?",
      "options": [
        {
          "text": "`set`",
          "correct": false
        },
        {
          "text": "`list`",
          "correct": false
        },
        {
          "text": "`tuple`",
          "correct": false
        },
        {
          "text": "`dictionary`",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 103,
      "question": "Which Python function allows you to execute Linux shell commands in Python?",
      "options": [
        {
          "text": "`sys.exc_info()`",
          "correct": false
        },
        {
          "text": "`os.system()`",
          "correct": true
        },
        {
          "text": "`os.getcwd()`",
          "correct": false
        },
        {
          "text": "`sys.executable`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 104,
      "question": "Suppose you have the following code snippet and want to extract a list with only the letters. Which fragment of code will \\_not\\_ achieve that goal?\n\n```python\nmy_dictionary = {\n    'A': 1,\n    'B': 2,\n    'C': 3,\n    'D': 4,\n    'E': 5\n}\n```",
      "options": [
        {
          "text": "<br>\n\n```python\nletters = []\n\nfor letter in my_dictionary.values():\n    letters.append(letter)\n```",
          "correct": true
        },
        {
          "text": "`letters = my_dictionary.keys()`",
          "correct": false
        },
        {
          "text": "`letters = [letter for (letter, number) in my_dictionary.items()]`",
          "correct": false
        },
        {
          "text": "`letters4 = list(my_dictionary)`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 105,
      "question": "When an array is large, NumPy will not print the entire array when given the built-in `print` function. What function can you use within NumPy to force it to print the entire array?",
      "options": [
        {
          "text": "`set_printparams`",
          "correct": false
        },
        {
          "text": "`set_printoptions`",
          "correct": true
        },
        {
          "text": "`set_fullprint`",
          "correct": false
        },
        {
          "text": "`setp_printwhole`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 106,
      "question": "When would you use a try/except block in code?",
      "options": [
        {
          "text": "You use `try/except` blocks when you want to run some code, but need a way to execute different code if an exception is raised.",
          "correct": true
        },
        {
          "text": "You use `try/except` blocks inside of unit tests so that the unit tests will always pass.",
          "correct": false
        },
        {
          "text": "You use `try/except` blocks so that you can demonstrate to your code reviewers that you tried a new approach, but if the new approach is not what they were looking for, they can leave comments under the `except` keyword.",
          "correct": false
        },
        {
          "text": "You use `try/except` blocks so that none of your functions or methods return `None`.",
          "correct": false
        }
      ],
      "reference": "https://runestone.academy/ns/books/published/fopp/Exceptions/using-exceptions.html#:~:text=The%20reason%20to%20use%20try,you're%20writing%20the%20code"
    },
    {
      "id": 107,
      "question": "In Python, how can the compiler identify the inner block of a for loop?",
      "options": [
        {
          "text": "`because of the level of indentation after the for loop`",
          "correct": true
        },
        {
          "text": "`because of the end keyword at the end of the for loop`",
          "correct": false
        },
        {
          "text": "`because the block is surrounded by brackets ({})`",
          "correct": false
        },
        {
          "text": "`because of the blank space at the end of the body of the for loop`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 108,
      "question": "What Python mechanism is best suited for telling a user they are using a deprecated function",
      "options": [
        {
          "text": "`sys.stdout`",
          "correct": false
        },
        {
          "text": "Traceback",
          "correct": false
        },
        {
          "text": "Warnings",
          "correct": true
        },
        {
          "text": "Exceptions",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 109,
      "question": "What will be the value of `x` after running this code?\n\n```python\nx = {1,2,3,4,5}\nx.add(5)\nx.add(6)\n```",
      "options": [
        {
          "text": "`{1, 2, 3, 4, 5, 5, 6}`",
          "correct": false
        },
        {
          "text": "`{5, 6, 1, 2, 3, 4, 5, 6}`",
          "correct": false
        },
        {
          "text": "`{6, 1, 2, 3, 4, 5}`",
          "correct": false
        },
        {
          "text": "`{1, 2, 3, 4, 5, 6}`",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 110,
      "question": "How would you access and store all of the keys in this dictionary at once?\n\n```python\nfruit_info = {\n    'fruit': 'apple',\n    'count': 2,\n    'price': 3.5\n}\n```",
      "options": [
        {
          "text": "`my_keys = fruit_info.to_keys()`",
          "correct": false
        },
        {
          "text": "`my_keys = fruit_info.all_keys()`",
          "correct": false
        },
        {
          "text": "`my_keys = fruit_info.keys`",
          "correct": false
        },
        {
          "text": "`my_keys = fruit_info.keys()`",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 111,
      "question": "What is wrong with this function definition?\n\n```python\ndef be_friendly(greet = \"How are you!\", name):\n    pass\n```",
      "options": [
        {
          "text": "`name` is a reserved word.",
          "correct": false
        },
        {
          "text": "Underscores are not allowed in function names.",
          "correct": false
        },
        {
          "text": "A non-default argument follows a default argument.",
          "correct": true
        },
        {
          "text": "There is nothing wrong with this function definition.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 112,
      "question": "Given that NumPy is imported as `np`, which choice will return `True`?",
      "options": [
        {
          "text": ":\n\n```python\na = np.zeros([3,4])\nb = a.copy()\nnp.array_equal(a,b)\n```",
          "correct": true
        },
        {
          "text": ":\n\n```python\na = np.empty([3,4])\nb = np.empty([3,4])\nnp.array_equal(a,b)\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\na = np.zeros([3,4])\nb = np.zeros([4,3])\nnp.array_equal(a,b)\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\na = np.array([1, np.nan])\nnp.array_equal(a,a)\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 113,
      "question": "How do you add a comment to an existing Python script?",
      "options": [
        {
          "text": "`// This is a comment`",
          "correct": false
        },
        {
          "text": "`# This is a comment`",
          "correct": true
        },
        {
          "text": "`-- This is a comment`",
          "correct": false
        },
        {
          "text": "`/* This is a comment *\\`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 114,
      "question": "In this code fragment, what will the values of c and d be equivalent to?\n\n```python\nimport numpy as np\na = np.array([1,2,3])\nb = np.array([4,5,6])\nc = a*b\nd = np.dot(a,b)\n```",
      "options": [
        {
          "text": "A\n\n```python\nc = [ a[1] * b[1], a[2] * b[2], a[3] * b[3] ]\nd = sum(c)\n```",
          "correct": false
        },
        {
          "text": "B\n\n```python\nc = a[0] * b[0], a[1] * b[1], a[2] * b[2]\n\nd = [ a[0] * b[0], a[1] * b[1], a[2] * b[2] ]\n```",
          "correct": false
        },
        {
          "text": "C\n\n```python\nc = [ a[0] * b[0], a[1] * b[1], a[2] * b[2] ]\n\nd = sum(a) + sum(b)\n```",
          "correct": false
        },
        {
          "text": "D\n\n```python\nc = [ a[0] * b[0], a[1] * b[1], a[2] * b[2] ]\n\nd = sum(c)\n```",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 115,
      "question": "What two functions within the NumPy library could you use to solve a system of linear equations?",
      "options": [
        {
          "text": "`linalg.eig() and .matmul()`",
          "correct": true
        },
        {
          "text": "`linalg.inv() and .dot()`",
          "correct": false
        },
        {
          "text": "`linalg.det() and .dot()`",
          "correct": false
        },
        {
          "text": "`linalg.inv() and .eye()`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 116,
      "question": "What is the correct syntax for creating a variable that is bound to a list?",
      "options": [
        {
          "text": "`my_list = (2, 'apple', 3.5)`",
          "correct": false
        },
        {
          "text": "`my_list = [2, 'apple', 3.5]`",
          "correct": true
        },
        {
          "text": "`my_list = [2, 'apple', 3.5].to_list()`",
          "correct": false
        },
        {
          "text": "`my_list = to_list(2, 'apple', 3.5)`",
          "correct": false
        }
      ],
      "reference": "https://www.tutorialspoint.com/python/python_lists.htm"
    },
    {
      "id": 117,
      "question": "This code provides the **\\_** of the list of numbers.\n\n```python\nnum_list = [21, 13, 19, 3, 11, 5, 18]\nnum_list.sort()\nnum_list[len(num_list) // 2]\n```",
      "options": [
        {
          "text": "mode",
          "correct": false
        },
        {
          "text": "average",
          "correct": false
        },
        {
          "text": "mean",
          "correct": false
        },
        {
          "text": "median",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 118,
      "question": "What are the two main data structures in the Pandas library?",
      "options": [
        {
          "text": "Arrays and DataFrames",
          "correct": false
        },
        {
          "text": "Series and Matrixes",
          "correct": false
        },
        {
          "text": "Matrixes and DataFrames",
          "correct": false
        },
        {
          "text": "Series and DataFrames",
          "correct": true
        }
      ],
      "reference": "https://pandas.pydata.org/docs/user_guide/dsintro.html"
    },
    {
      "id": 119,
      "question": "Suppose you have a variable named `vector` of type np.array with 10,000 elements. How can you turn `vector` into a variable named `matrix` with dimensions 100x100?",
      "options": [
        {
          "text": "`matrix = (vector.shape = (100,100))`",
          "correct": false
        },
        {
          "text": "`matrix = vector.to_matrix(100,100)`",
          "correct": false
        },
        {
          "text": "`matrix = matrix(vector,100,100)`",
          "correct": false
        },
        {
          "text": "`matrix = vector.reshape(100, 100)`",
          "correct": true
        }
      ],
      "reference": "https://www.w3schools.com/python/numpy/numpy_array_reshape.asp"
    },
    {
      "id": 120,
      "question": "Which choice is an immutable data type?",
      "options": [
        {
          "text": "Dictionary",
          "correct": false
        },
        {
          "text": "List",
          "correct": false
        },
        {
          "text": "Set",
          "correct": false
        },
        {
          "text": "String",
          "correct": true
        }
      ],
      "reference": "https://www.tutorialspoint.com/python_text_processing/python_string_immutability.htm"
    },
    {
      "id": 121,
      "question": "What is the output of this code?\n\n```python\ndef myFunction(country = \"France\"):\n    print(f\"Hello, I am from {country}\")\n\nmyFunction(\"Spain\")\nmyFunction(\"\")\nmyFunction()\n```",
      "options": [
        {
          "text": ":\n\n```python\nHello, I am from Spain\nHello, I am from\nHello, I am from\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\nHello, I am from France\nHello, I am from France\nHello, I am from France\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\nHello, I am from Spain\nHello, I am from\nHello, I am from France\n```",
          "correct": true
        },
        {
          "text": ":\n\n```python\nHello, I am from Spain\nHello, I am from France\nHello, I am from France\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 122,
      "question": "Choose the option below for which instance of the class cannot be created.",
      "options": [
        {
          "text": "Anonymous Class",
          "correct": false
        },
        {
          "text": "Parent Class",
          "correct": false
        },
        {
          "text": "Nested Class",
          "correct": false
        },
        {
          "text": "Abstract Class",
          "correct": true
        }
      ],
      "reference": "https://www.scaler.com/topics/python/data-abstraction-in-python/"
    },
    {
      "id": 123,
      "question": "Using Pandas, we load a data set from Kaggle, as structured in the image below. Which command will return the total number of survivors?\n\n![Q129](images/Q129.png?raw=png)",
      "options": [
        {
          "text": "`sum(titanic['Survived'])`",
          "correct": true
        },
        {
          "text": "`[x for x in titanic['Survived'] if x == 1]`",
          "correct": false
        },
        {
          "text": "`len(titanic[\"Survived\"])`",
          "correct": false
        },
        {
          "text": "`sum(titanic['Survived']==0)`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 124,
      "question": "How would you create a list of tuples matching these lists of characters and actors?\n\n```python\ncharacters = [\"Iron Man\", \"Spider Man\", \"Captain America\"]\nactors = [\"Downey\", \"Holland\", \"Evans\"]\n\n# example output : [(\"IronMan\", \"Downey\"), (\"Spider Man\", \"Holland\"), (\"Captain America\", \"Evans\")]\n```",
      "options": [
        {
          "text": "`[(x,y)] for x in characters for y in actors]`",
          "correct": false
        },
        {
          "text": "`zip(characters, actors)`",
          "correct": true
        },
        {
          "text": "&shy;\n\n  ```python\n  d = {}\n\n  for x in range(1, len(characters)):\n      d[x] = actors[x]\n  ```",
          "correct": false
        },
        {
          "text": "`{x:y for x in characters for y in actors}`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 125,
      "question": "What will this statement return?\n\n```python\n{x : x*x for x in range(1,100)}\n```",
      "options": [
        {
          "text": "A dictionary with `x` as a key, and `x` squared as its value; from 1 to 100.",
          "correct": false
        },
        {
          "text": "A dictionary with `x` as a key, and `x` squared as its value; from 1 to 99.",
          "correct": true
        },
        {
          "text": "A set of tuples, consisting of (`x`, `x` squared); from 1 to 99.",
          "correct": false
        },
        {
          "text": "A list with all numbers squared from 1 to 99.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 126,
      "question": "Jaccard Similarity is a formula that tells you how similar two sets are. It is defined as the cardinality of the intersection divided by the cardinality of the union. Which choice is an accurate implementation in Python?\n\n![Q132](images/Q132.png?raw=png)",
      "options": [
        {
          "text": "`def jaccard(a, b): return len (a | b) / len (a & b)`",
          "correct": false
        },
        {
          "text": "`def jaccard(a, b): return len (a & b) / len (a | b)`",
          "correct": true
        },
        {
          "text": "`def jaccard(a, b): return len (a && b) / len (a || b)`",
          "correct": false
        },
        {
          "text": "`def jaccard(a, b): return a.intersection(b) / a.union(b)`",
          "correct": false
        }
      ],
      "reference": "https://docs.python.org/3/tutorial/datastructures.html?highlight=set#sets."
    },
    {
      "id": 127,
      "question": "Which choice is not a native numerical type in Python?",
      "options": [
        {
          "text": "Long",
          "correct": false
        },
        {
          "text": "Int",
          "correct": false
        },
        {
          "text": "Float",
          "correct": false
        },
        {
          "text": "Double",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 128,
      "question": "What will be the output of this code?\n\n```python\n[1,2,3] * 3\n```",
      "options": [
        {
          "text": "`[3,2,3]`",
          "correct": false
        },
        {
          "text": "`[1, 2, 3, 1, 2, 3, 1, 2, 3]`",
          "correct": true
        },
        {
          "text": "You will get a type error.",
          "correct": false
        },
        {
          "text": "`[3,6,9]`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 129,
      "question": "Given a list defined as numbers = `[1,2,3,4]`, what is the value of `numbers[-2]`?",
      "options": [
        {
          "text": "1",
          "correct": false
        },
        {
          "text": "3",
          "correct": true
        },
        {
          "text": "2",
          "correct": false
        },
        {
          "text": "An IndexError exception is thrown.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 130,
      "question": "Which statement about strings in Python is true?",
      "options": [
        {
          "text": "Strings can be enclosed by double quotes (\") or single quotes (').",
          "correct": true
        },
        {
          "text": "Strings can only be enclosed in single quotes (').",
          "correct": false
        },
        {
          "text": "Single character strings must be enclosed in single quotes ('), and the rest must be enclosed in double quotes (\").",
          "correct": false
        },
        {
          "text": "Strings can only be enclosed in double quotes (\").",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 131,
      "question": "What is the correct syntax for defining an `_init_()` method that takes no parameters?",
      "options": [
        {
          "text": "`def*init*(self): pass`",
          "correct": false
        },
        {
          "text": "`class*init*(self): pass`",
          "correct": false
        },
        {
          "text": "`class*init*(): pass`",
          "correct": false
        },
        {
          "text": "`def*init*(): pass`\n\n`()` - empty parameter.\n`self` - refers to all instances within a class.\n`_init_` - a reserved method, AKA a constructor.\n`_init_()` - always executed when the class is being initiated.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 132,
      "question": "Suppose you need to use the `sin` function from the `math` library. What is the correct syntax for importing only that function?",
      "options": [
        {
          "text": "`using math.sin`",
          "correct": false
        },
        {
          "text": "`import math.sin`",
          "correct": false
        },
        {
          "text": "`from math import sin`",
          "correct": true
        },
        {
          "text": "`import sin from math`",
          "correct": false
        }
      ],
      "reference": "https://www.datacamp.com/tutorial/modules-in-python#more-on-import-statements"
    },
    {
      "id": 133,
      "question": "What do you get if you apply numpy.sum() to a list that contains only Boolean values?",
      "options": [
        {
          "text": "`0`",
          "correct": false
        },
        {
          "text": "`the count of all True values`",
          "correct": true
        },
        {
          "text": "`a type error`",
          "correct": false
        },
        {
          "text": "`None`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 134,
      "question": "What will this code print?\n\n```python\nprint(\"foo\" if (256).bit_length() > 8 else \"bar\")\n```",
      "options": [
        {
          "text": "`True`",
          "correct": false
        },
        {
          "text": "`foo`",
          "correct": true
        },
        {
          "text": "You will get an error message because constant integer values are not classes.",
          "correct": false
        },
        {
          "text": "`bar`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 135,
      "question": "If you do not explicitly return a value from a function, what happens?",
      "options": [
        {
          "text": "If the return keyword is absent, the function will return `True`.",
          "correct": false
        },
        {
          "text": "The function will enter an infinite loop because it will not know when to stop executing its code.",
          "correct": false
        },
        {
          "text": "The function will return a `RuntimeError` if you do not return a value.",
          "correct": false
        },
        {
          "text": "If the return keyword is absent the function will return `None`.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 136,
      "question": "It is often the case that the pandas library is used for **_ data and NumPy for _** data.",
      "options": [
        {
          "text": "string; numerical",
          "correct": false
        },
        {
          "text": "unstructured; structured",
          "correct": false
        },
        {
          "text": "numerical; tabular",
          "correct": false
        },
        {
          "text": "tabular; numerical\n\n* Explanation: The Pandas library is commonly used for working with tabular data, such as data in the form of tables or spreadsheets. It provides data structures and functions for data manipulation and analysis. On the other hand, NumPy is a powerful library for numerical computing in Python, and it is often used for performing mathematical operations on numerical data, such as arrays and matrices.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 137,
      "question": "What do you need to do to install additional packages into Python?",
      "options": [
        {
          "text": "Use a C compiler like `gcc` or `clang`.",
          "correct": false
        },
        {
          "text": "Use a package manager like `pip` or `conda`.",
          "correct": true
        },
        {
          "text": "Use an IDE like Notepad++ or Idle.",
          "correct": false
        },
        {
          "text": "Use a package manager like NPM or NuGet.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 138,
      "question": "The image below was created using Matplotlib. It is a distribution plot of a list of integers filled with numbers using the function **\\_** and plotted with **\\_**.\n\n![Q132](images/Q138.png?raw=png)",
      "options": [
        {
          "text": "`random.uniform(0,50);plt.hist`",
          "correct": false
        },
        {
          "text": "`random.gauss(50,20);plt.hist`",
          "correct": true
        },
        {
          "text": "`random();plt.scatter`",
          "correct": false
        },
        {
          "text": "`random.triangular(0,50);plt.bar`",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/random-gauss-function-in-python/"
    },
    {
      "id": 139,
      "question": "In this code fragment, what will be the values of `a` and `b`?\n\n```python\nimport numpy as np\n\na = np.arange(100)\nb = a[50:60:2]\n```",
      "options": [
        {
          "text": "`a`: all integers from 0 to 99 (inclusive); `b`: all even integers from 50 to 58 (inclusive).",
          "correct": true
        },
        {
          "text": "`a`: all integers from 0 to 100 (inclusive); `b`: all even integers from 50 to 60 (inclusive).",
          "correct": false
        },
        {
          "text": "`a`: all integers from 0 to 99 (inclusive); `b`: all even integers from 50 to 60 (inclusive).",
          "correct": false
        },
        {
          "text": "`a`: all integers from 0 to 99 (inclusive); `b`: all odd integers from 49 to 59 (inclusive).",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 140,
      "question": "When using NumPy in Python, how do you check the dimensionality (number and length of dimensions) of an object called `my_object`?",
      "options": [
        {
          "text": "`my_object.get_shape()`",
          "correct": false
        },
        {
          "text": "`my_object.shape`",
          "correct": true
        },
        {
          "text": "`my_object.dim()`",
          "correct": false
        },
        {
          "text": "`len(my_object)`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 141,
      "question": "Assume you have a non-empty list named `mylist` and you want to search for a specific value. The minimum number of comparisons will be \\_**_ and the maximum number of comparisons will be _**?",
      "options": [
        {
          "text": "`len(mylist); len(mylist)`",
          "correct": false
        },
        {
          "text": "`1; len(mylist)`",
          "correct": true
        },
        {
          "text": "`2; len(mylist)`",
          "correct": false
        },
        {
          "text": "`0; len(mylist)`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 142,
      "question": "If a function does not have a return statement, what does it return?",
      "options": [
        {
          "text": "`0`",
          "correct": false
        },
        {
          "text": "`True`",
          "correct": false
        },
        {
          "text": "`None`",
          "correct": true
        },
        {
          "text": "`False`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 143,
      "question": "Suppose you want to double-check if two matrices can be multiplied using NumPy for debugging purposes. How would you complete this code fragment by filling in the blanks with the appropriate variables?\n\n```python\nimport numpy as np\n\ndef can_matrices_be_multiplied (matrix1, matrix2):\n    rowsMat1, columnsMat1 = matrix1.shape\n    rowsMat2, columnsMat2 = matrix2.shape\n\n    if _____ == ______ :\n        print(\"The matrices can be multiplied!\")\n        return True\n    else:\n        return False\n```",
      "options": [
        {
          "text": "columnsMat1; rowsMat1;",
          "correct": false
        },
        {
          "text": "columnsMat1; rowsMat2;",
          "correct": true
        },
        {
          "text": "columnsMat1; columnsMat2;",
          "correct": false
        },
        {
          "text": "columnsMat2; rowsMat1;",
          "correct": false
        }
      ],
      "reference": "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:multiplying-matrices-by-matrices/a/multiplying-matrices#"
    },
    {
      "id": 144,
      "question": "What is the output of this comprehension?\n\n`[(x, x+1) for x in range(1,5)] `",
      "options": [
        {
          "text": "[(1, 2), (2, 3), (3, 4), (4, 5), (5, 6)]",
          "correct": false
        },
        {
          "text": "[1,2,3,4,5]",
          "correct": false
        },
        {
          "text": "[(1, 2), (2, 3), (3, 4)]",
          "correct": false
        },
        {
          "text": "[(1, 2), (2, 3), (3, 4), (4, 5)]",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 145,
      "question": "In Python, a class method must have \\_**\\_ as a function decorator, and the first parameter of the method will be a reference to \\_\\_**.",
      "options": [
        {
          "text": "@classmethod; the class",
          "correct": true
        },
        {
          "text": "inline; the class",
          "correct": false
        },
        {
          "text": "static; self",
          "correct": false
        },
        {
          "text": "@static; self",
          "correct": false
        }
      ],
      "reference": "https://docs.python.org/3/library/functions.html#classmethod"
    },
    {
      "id": 146,
      "question": "Which snippet of code will print _My name is Joffrey, son of Robert_?",
      "options": [
        {
          "text": ":\n\n```python\nclass Father():\n    name = 'Robert'\n\nclass Person(Father):\n    def __init__(self, name):\n        self.fathername = super.name\n        self.name = name\n\n    def introduce(self):\n        print(f\"My name is {self.name} son of {self.fathername}\")\n\nking = Person(\"Joffrey\")\nking.introduce()\n\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\nclass Father():\n    name = 'Robert'\n\n\nclass Person(Father):\n    def __init__(self, name):\n        self.fathername = self.name\n        self.name = name\n\n    def introduce(self):\n        print(f\"My name is {self.name} son of {self.fathername}\")\n\n\nking = Person(\"Joffrey\")\nking.introduce()\n\n```",
          "correct": true
        },
        {
          "text": ":\n\n```python\nclass Father():\n    name = 'Robert'\n\n\nclass Person(Father):\n    def __init__(self, name):\n        self.name = name\n\n    def introduce(self):\n        print(f\"My name is {self.name} son of {super.name}\")\n\nking = Person(\"Joffrey\")\nking.introduce()\n```",
          "correct": false
        },
        {
          "text": ":\n\n```python\nclass Father():\n    name = 'Robert'\n\nclass Person(Father):\n    def __init__(self, name):\n        self.name = name\n\n    def introduce(self):\n        print(f\"My name is {self.name} son of {base.name}\")\n\nking = Person(\"Joffrey\")\nking.introduce()\n\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 147,
      "question": "What does this code output in the console, assuming defaultdict has already been imported?\n\n```python\nanimals = {\n    'a': ['ant', 'antelope', 'armadillo'],\n    'b': ['beetle', 'bear', 'bat'],\n    'c': ['cat', 'cougar', 'camel']\n}\n\nanimals = defaultdict(list, animals)\n\nprint(animals['b'])\nprint(animals['d'])\n```",
      "options": [
        {
          "text": "A\n\n```python\n      ['beetle', 'bear', 'bat']\n      []\n```",
          "correct": true
        },
        {
          "text": "B\n\n```python\n      ['beetle', 'bear', 'bat']\n      # an exception will be thrown\n```",
          "correct": false
        },
        {
          "text": "C\n\n```python\n      ['beetle', 'bear', 'bat']\n      None\n```",
          "correct": false
        },
        {
          "text": "D\n\n```python\n      ['bat', 'bear', 'beetle']\n      []\n```",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/defaultdict-in-python/"
    },
    {
      "id": 148,
      "question": "What will this line of code return? (Assume `n` is already defined as any positive integer value.)\n\n```python\n[x*2 for x in range(1,n)]\n```",
      "options": [
        {
          "text": "A list with all the even numbers less than 2\\*n.",
          "correct": true
        },
        {
          "text": "A dictionary with all the even numbers less than 2\\*n.",
          "correct": false
        },
        {
          "text": "A list with all the odd numbers less than 2\\*n.",
          "correct": false
        },
        {
          "text": "A list with all the even numbers less than or equal to 2\\*n.",
          "correct": false
        }
      ],
      "reference": "https://www.w3schools.com/python/ref_func_range.asp"
    },
    {
      "id": 149,
      "question": "What does this code print in the console?\n\n```python\nx = 18\n\nif x > 10:\n\tif x > 15:\n\t\tprint('A')\n\telse:\n\t\tprint('B')\nelse:\n\tprint('C')\n\n```",
      "options": [
        {
          "text": "C",
          "correct": false
        },
        {
          "text": "A B",
          "correct": false
        },
        {
          "text": "B",
          "correct": false
        },
        {
          "text": "A",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 150,
      "question": "What is the maximum length of a Python identifier?",
      "options": [
        {
          "text": "32",
          "correct": false
        },
        {
          "text": "16",
          "correct": false
        },
        {
          "text": "128",
          "correct": false
        },
        {
          "text": "No fixed length is specified.",
          "correct": true
        }
      ],
      "reference": "https://peps.python.org/pep-0008/"
    },
    {
      "id": 151,
      "question": "What will the value of the `i` variable be when the following loop finishes its execution?\n\n```python\nfor i in range(5): pass\n```",
      "options": [
        {
          "text": "5",
          "correct": false
        },
        {
          "text": "The variable becomes unavailable.",
          "correct": false
        },
        {
          "text": "6",
          "correct": false
        },
        {
          "text": "4",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 152,
      "question": "`f-strings` are also called:",
      "options": [
        {
          "text": "Formatted string expressions.",
          "correct": false
        },
        {
          "text": "Functional strings.",
          "correct": false
        },
        {
          "text": "Modulo formatted strings.",
          "correct": false
        },
        {
          "text": "Formatted string literals.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 153,
      "question": "How many CPUs (or cores) will the Python threading library take advantage of simultaneously?",
      "options": [
        {
          "text": "One.",
          "correct": true
        },
        {
          "text": "All of the available CPUs.",
          "correct": false
        },
        {
          "text": "Two.",
          "correct": false
        },
        {
          "text": "Three.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 154,
      "question": "What will be the value of `y` in this code?\n\n```python\nx = 5\ny = 1 + (20 if x < 5 else 30)\n```",
      "options": [
        {
          "text": "`False`",
          "correct": false
        },
        {
          "text": "`21`",
          "correct": false
        },
        {
          "text": "`2`",
          "correct": false
        },
        {
          "text": "`31`",
          "correct": true
        }
      ],
      "reference": "https://www.w3schools.com/python/python_conditions.asp"
    },
    {
      "id": 155,
      "question": "The process of pickling in Python includes?",
      "options": [
        {
          "text": "Conversion of a Python object hierarchy into byte stream.",
          "correct": true
        },
        {
          "text": "Conversion of a data table into a list.",
          "correct": false
        },
        {
          "text": "Conversion of a byte stream into Python object hierarchy.",
          "correct": false
        },
        {
          "text": "Conversion of a list into a data table.",
          "correct": false
        }
      ],
      "reference": "https://docs.python.org/3/library/pickle.html#:~:text=“Pickling”%20is%20the%20process%20whereby,back%20into%20an%20object%20hierarchy."
    },
    {
      "id": 156,
      "question": "What is the output of the following program?\n\n```python\nprint(\"codescracker\".endswith(\"er\"))\n```",
      "options": [
        {
          "text": "`True`",
          "correct": true
        },
        {
          "text": "`1`",
          "correct": false
        },
        {
          "text": "`2`",
          "correct": false
        },
        {
          "text": "`False`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 157,
      "question": "Is the list mutable in Python?",
      "options": [
        {
          "text": "True",
          "correct": true
        },
        {
          "text": "False",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 158,
      "question": "What is the output of the following program?\n\n```python\nprint(\"programming\".center())\n```",
      "options": [
        {
          "text": "`cr`",
          "correct": false
        },
        {
          "text": "`programming`",
          "correct": false
        },
        {
          "text": "Error says `TypeError: center expected at least 1 argument, got 0`.",
          "correct": true
        },
        {
          "text": "None of the above.",
          "correct": false
        }
      ],
      "reference": "https://www.w3schools.com/python/ref_string_center.asp"
    },
    {
      "id": 159,
      "question": "Who created the Python programming language?",
      "options": [
        {
          "text": "Tim Berners-Lee",
          "correct": false
        },
        {
          "text": "Ada Lovelace",
          "correct": false
        },
        {
          "text": "Guido van Rossum",
          "correct": true
        },
        {
          "text": "Alan Turing",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 160,
      "question": "Which collection is ordered, changeable, and allows duplicate members?",
      "options": [
        {
          "text": "Set",
          "correct": false
        },
        {
          "text": "Tuple",
          "correct": false
        },
        {
          "text": "Dictionary",
          "correct": false
        },
        {
          "text": "List",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 161,
      "question": "What will be printed in the console if you run this code?\n\n```python\nx = 1j\nprint(x**2 == -1)\n```",
      "options": [
        {
          "text": "A runtime error telling you that the variable `j` has not been initialized.",
          "correct": false
        },
        {
          "text": "`True`",
          "correct": true
        },
        {
          "text": "`1j`",
          "correct": false
        },
        {
          "text": "`False`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 162,
      "question": "What will be printed in the console if you run this code?\n\n```python\nprint(0xA + 0xB + 0xC)\n```",
      "options": [
        {
          "text": "`33`",
          "correct": true
        },
        {
          "text": "`63`",
          "correct": false
        },
        {
          "text": "`0xA + 0xB + 0xC`",
          "correct": false
        },
        {
          "text": "`None`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 163,
      "question": "What will this code output to the screen?\n\n```python\nfor i in range(5):\n    print(i)\nelse:\n    print(\"Done!\")\n```",
      "options": [
        {
          "text": "A\n\n```python\n1\n2\n3\n4\n5\nDone!\n```",
          "correct": false
        },
        {
          "text": "B\n\n```python\n0\n1\n2\n3\n4\n5\nDone!\n```",
          "correct": false
        },
        {
          "text": "C\n\n```python\n0\n1\n2\n3\n4\nDone!\n```",
          "correct": true
        },
        {
          "text": "D:\n      You will get a syntax error.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 164,
      "question": "Which comparison of lists and tuples in Python is correct?",
      "options": [
        {
          "text": "Use lists instead of tuples when you have a collection of related but dissimilar objects.",
          "correct": false
        },
        {
          "text": "Use tuples instead of lists when you have a common collection of similar objects.",
          "correct": false
        },
        {
          "text": "Use tuples instead of lists for functions that need to return multiple values.",
          "correct": true
        },
        {
          "text": "Use lists instead of tuples when the position of elements is important.",
          "correct": false
        }
      ],
      "reference": "https://www.scaler.com/topics/python/tuples-in-python/"
    },
    {
      "id": 165,
      "question": "Consider the following code snippet that uses decorators to calculate the execution time of the `execution_fn` function:\n\n```python\nimport functools\nimport time\n\ndef timer(MISSING_ARG_1):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        start_time = time.perf_counter()\n        rval = func(*args, **kwargs)\n        end_time = time.perf_counter()\n        duration = end_time - start_time\n        print(f\"Executed in {duration:.4f} seconds\")\n        return MISSING_ARG_2\n    return MISSING_ARG_3\n\n@timer\ndef execution_fn():\n    for i in range(3):\n        time.sleep(1)\n\nexecution_fn()\n```",
      "options": [
        {
          "text": ":\n\n```\nMISSING_ARG_1 = wrapper\n\nMISSING_ARG_2 = rval\n\nMISSING_ARG_3 = func\n```",
          "correct": false
        },
        {
          "text": ":\n\n```\nMISSING_ARG_1 = func\n\nMISSING_ARG_2 = rval\n\nMISSING_ARG_3 = wrapper\n```",
          "correct": true
        },
        {
          "text": ":\n\n```\nMISSING_ARG_1 is empty\n\nMISSING_ARG_2 = rval\n\nMISSING_ARG_3 = wrapper\n```",
          "correct": false
        },
        {
          "text": ":\n\n```\nMISSING_ARG_1 is empty\n\nMISSING_ARG_2 = rval\n\nMISSING_ARG_3 = func\n```",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 166,
      "question": "Which of the following statements defines a new object type named `Dog` in Python?",
      "options": [
        {
          "text": "`class Dog:`",
          "correct": true
        },
        {
          "text": "`Dog class:`",
          "correct": false
        },
        {
          "text": "`Dog:`",
          "correct": false
        },
        {
          "text": "`class Dog`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 167,
      "question": "To use pipelines in `scikit-learn`, import from the `scikit-learn._` submodule.",
      "options": [
        {
          "text": "`preprocessing`",
          "correct": false
        },
        {
          "text": "`pipeline`",
          "correct": true
        },
        {
          "text": "`filters`",
          "correct": false
        },
        {
          "text": "`pipe_filter`",
          "correct": false
        }
      ],
      "reference": "https://scikit-learn.org/stable/modules/compose.html"
    },
    {
      "id": 168,
      "question": "You should pass in a value of **\\_** for the axis argument to the Pandas apply method to apply the function to each row.",
      "options": [
        {
          "text": "row",
          "correct": false
        },
        {
          "text": "col",
          "correct": false
        },
        {
          "text": "1",
          "correct": true
        },
        {
          "text": "0",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 169,
      "question": "Data points in Pyplot are called...",
      "options": [
        {
          "text": "... pointers.",
          "correct": false
        },
        {
          "text": "... points.",
          "correct": false
        },
        {
          "text": "... markers.",
          "correct": true
        },
        {
          "text": "... none of these.",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 170,
      "question": "What does this code print?\n\n```python\na = np.array([[1, 2], [3, 4], [5, 6]])\nc = a[(a > 3) & (a < 11)]\nprint(c)\n```",
      "options": [
        {
          "text": "`[[3, 4], [5, 6]]`",
          "correct": false
        },
        {
          "text": "`[False, False, False, True, True, True]`",
          "correct": false
        },
        {
          "text": "`[[0,0], [3, 4], [5, 6]]`",
          "correct": false
        },
        {
          "text": "`[4 5 6]`",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 171,
      "question": "Assume `m`, `n`, and `p` are positive integers. In the following comprehension, how many times will the function `randint` be called?\n\n```python\n[ [ [ randint(1,100) for i in range(m) ] for j in range(n) ] for k in range(p) ]\n```",
      "options": [
        {
          "text": "`m * n * p`",
          "correct": true
        },
        {
          "text": "The greater value of `(m,n,p)`.",
          "correct": false
        },
        {
          "text": "1 million.",
          "correct": false
        },
        {
          "text": "`m + n + p`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 172,
      "question": "Suppose you have a class named `MyClass` which has multiple inheritance and methods with the same name in its ancestors. Which class method could you call to see which method will get priority when invoked?",
      "options": [
        {
          "text": "`MyClass.__mro__`",
          "correct": true
        },
        {
          "text": "`MyClass.hierarchy()`",
          "correct": false
        },
        {
          "text": "`callable(MyClass)`",
          "correct": false
        },
        {
          "text": "`dir(MyClass)`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 173,
      "question": "Suppose you have a list of employees described by the code below. You want to assign Alice the same salary as Charlie. Which choice will accomplish that?\n\n```python\nemployees = {\n    'alice':{\n        'position':'Lead Developer',\n        'salary':1000\n    },\n    'bob':{\n        'position': 'Lead Artist',\n        'salary':2000\n    },\n    'charlie':{\n        'position':'cfo',\n        'salary':3000\n    }\n}\n```",
      "options": [
        {
          "text": "`employess['alice']['salary'] = employees['charlie']['salary']`",
          "correct": true
        },
        {
          "text": "`employees.alice.salary = employees.charlie.salary`",
          "correct": false
        },
        {
          "text": "`employees['alice'][1] = employees['charlie'][1]`",
          "correct": false
        },
        {
          "text": "`employees['alice'].salary = employees['charlie'].salary`",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 174,
      "question": "You are given this piece of code. Assume `m` and `n` are already defined as some positive integer value. When it completes, how many tuples will my list contain?\n\n```python\nmylist = []\n\nfor i in range(m):\n    for j in range(n):\n        mylist.append((i,j))\n```",
      "options": [
        {
          "text": "`m`",
          "correct": false
        },
        {
          "text": "`m + n`",
          "correct": false
        },
        {
          "text": "`n`",
          "correct": false
        },
        {
          "text": "`m \\* n`",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 175,
      "question": "What will this comprehension provide you?\n\n```python\n{x : [y for y in range (1, x) if x % y == 0] for x in range (2, 100)}\n```",
      "options": [
        {
          "text": "A dictionary whose keys are the numbers from 2 to 99 (inclusive), and their respective values are their factors.",
          "correct": true
        },
        {
          "text": "A dictionary whose keys are the numbers from 2 to 99 (inclusive), and their respective values are a list from 1 to the key value itself (inclusive).",
          "correct": false
        },
        {
          "text": "A dictionary whose keys are the numbers from 2 to 99 (inclusive), and their respective values are the even numbers from 1 to the key value itself (inclusive).",
          "correct": false
        },
        {
          "text": "A dictionary whose keys are the numbers from 2 to 99 (inclusive), and their respective values are the odd numbers from 1 to the key value itself (inclusive).",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 176,
      "question": "What is a common use of Python's sys library?",
      "options": [
        {
          "text": "to take a snapshot of all the packages and libraries in your virtual environment",
          "correct": false
        },
        {
          "text": "to connect various systems, such as connecting a web front end, an API service, a database, and a mobile app",
          "correct": false
        },
        {
          "text": "to capture command-line arguments given at a file's runtime",
          "correct": true
        },
        {
          "text": "to scan the health of your Python ecosystem while inside a virtual environment",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 177,
      "question": "What is the output of 17 % 15 ?",
      "options": [
        {
          "text": "17",
          "correct": false
        },
        {
          "text": "15",
          "correct": false
        },
        {
          "text": "2",
          "correct": true
        },
        {
          "text": "16",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 178,
      "question": "Let the lists 'characters' and 'actors' be defined as given. Which of the following lines of code gives the desired output?\n\n```python\ncharacters = [\"Iron Man\", \"Spider Man\", \"Captain America\"]\nactors = [\"Downey\", \"Holland\", \"Evans\"]\n\n#Desired output : [(\"Iron Man\", \"Downey), (\"Spider Man\", \"Holland\"), (\"Captain America\", \"Evans\")]\n```",
      "options": [
        {
          "text": "print( zip( characters, actors ) )",
          "correct": false
        },
        {
          "text": "print( { x: y for x in characters for y in actors } )",
          "correct": false
        },
        {
          "text": "print( [ ( x, y ) for x in characters for y in actors ] )",
          "correct": false
        },
        {
          "text": "print( list( zip( characters, actors ) ) )\n\nExplanation: zip() is the correct function for this usecase. However, zip() makes a zip type object which is an iterator. Therefore, using list() is necessary to convert the zip object into a list of tuples that can be displayed or accessed directly. The other options have logical errors.",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 179,
      "question": "When is the `if __name__ == \"__main__\":` block executed in a Python script?",
      "options": [
        {
          "text": "Always, as it is required in every Python script.",
          "correct": false
        },
        {
          "text": "Only when the script is executed directly from the command line or as the main program.",
          "correct": true
        },
        {
          "text": "Only when the script contains syntax errors.",
          "correct": false
        },
        {
          "text": "Only when the script is imported as a module in another script.\n\nThe `if __name__ == \"__main__\":` block is executed when the script is run directly but not when it's imported as a module in another script.",
          "correct": false
        }
      ],
      "reference": "https://docs.python.org/3/tutorial/modules.html#executing-modules-as-scripts"
    },
    {
      "id": 180,
      "question": "What will be the output of the following Python code?\n\n```python\ndef square(x):\n\treturn x * x\n\nnumbers = [1, 2, 3, 4, 5]\nsquared_numbers = map(square, numbers)\nresult = list(squared_numbers)\nprint(result)\n```",
      "options": [
        {
          "text": "`[1, 4, 9, 16, 25]`",
          "correct": true
        },
        {
          "text": "`[1, 2, 3, 4, 5]`",
          "correct": false
        },
        {
          "text": "`[1, 8, 27, 64, 125]`",
          "correct": false
        },
        {
          "text": "`[2, 4, 6, 8, 10]`\n\nThe code defines a `square` function to calculate the square of a number. It then uses the `map` function to apply this function to each element in the `numbers` list, resulting in a new iterable. Finally, the `list` constructor is used to convert this iterable into a list. The output will be a list of squared numbers.",
          "correct": false
        }
      ],
      "reference": "https://docs.python.org/3/library/functions.html#map"
    },
    {
      "id": 181,
      "question": "Which of the following is not a valid built-in function in Python?",
      "options": [
        {
          "text": "int",
          "correct": false
        },
        {
          "text": "string",
          "correct": false
        },
        {
          "text": "boolean",
          "correct": false
        },
        {
          "text": "array\n\n[Source](https://docs.python.org/3/library/functions.html)",
          "correct": true
        }
      ],
      "reference": null
    },
    {
      "id": 182,
      "question": "Which of the following is not a valid Python data type?",
      "options": [
        {
          "text": "int",
          "correct": false
        },
        {
          "text": "char",
          "correct": true
        },
        {
          "text": "float",
          "correct": false
        },
        {
          "text": "str",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 183,
      "question": "In Python, which function is used to read a line from the console input?",
      "options": [
        {
          "text": "input()",
          "correct": true
        },
        {
          "text": "read_line()",
          "correct": false
        },
        {
          "text": "console_input()",
          "correct": false
        },
        {
          "text": "getline()",
          "correct": false
        }
      ],
      "reference": "https://www.geeksforgeeks.org/taking-input-from-console-in-python/"
    },
    {
      "id": 184,
      "question": "What will be the output of the following Python code?\n\n`print(\"Hello {name1} and {name2}\".format(name1='foo', name2='bin'))`",
      "options": [
        {
          "text": "Hello foo and bin",
          "correct": true
        },
        {
          "text": "Hello {name1} and {name2}",
          "correct": false
        },
        {
          "text": "Error",
          "correct": false
        },
        {
          "text": "Hello and",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 185,
      "question": "What will be the ouput of the following code snippet?\n\n```python\ndef outer_func(x):\n    y = x + 1\n    def inner_func():\n        return y + x\n    return inner_func\n\nx = 10\ny = 20\nclosure_func = outer_func(x)\nprint(closure_func())\n```",
      "options": [
        {
          "text": "30",
          "correct": false
        },
        {
          "text": "21",
          "correct": true
        },
        {
          "text": "11",
          "correct": false
        },
        {
          "text": "31",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 186,
      "question": "What is the output of the following Python code?\n\n```python\nx = 5\ndef func():\n    x = 10\n    print(x)\nfunc()\nprint(x)\n```",
      "options": [
        {
          "text": "10, 5",
          "correct": true
        },
        {
          "text": "10, 10",
          "correct": false
        },
        {
          "text": "5, 5",
          "correct": false
        },
        {
          "text": "5, 10",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 187,
      "question": "What is the output of the following Python code?\n\n```python\ndef func(a, b=2, c=3):\n    print(a, b, c)\n\nfunc(10)\nfunc(10, 20)\nfunc(10, 20, 30)\n```",
      "options": [
        {
          "text": "10 2 3, 10 20 3, 10 20 30",
          "correct": true
        },
        {
          "text": "10 2 3, 10 2 3, 10 2 3",
          "correct": false
        },
        {
          "text": "10 2 3, 10 20 2, 10 20 30",
          "correct": false
        },
        {
          "text": "10 2 3, 10 20 3, 10 20 30",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 188,
      "question": "What is the output of the following Python code?\n\n```python\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)\n```",
      "options": [
        {
          "text": "[1, 2, 3]",
          "correct": false
        },
        {
          "text": "[1, 2, 3, 4]",
          "correct": true
        },
        {
          "text": "[4, 1, 2, 3]",
          "correct": false
        },
        {
          "text": "Error",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 189,
      "question": "What is the output of the following Python code?\n\n```python\ndef add_item(item, item_list=[]):\n    item_list.append(item)\n    return item_list\n\nprint(add_item(1))\nprint(add_item(2))\nprint(add_item(3, []))\n```",
      "options": [
        {
          "text": "[1] [2] [3]",
          "correct": false
        },
        {
          "text": "[1] [1,2] [3]",
          "correct": true
        },
        {
          "text": "[1,2,3] [1,2,3] [3]",
          "correct": false
        },
        {
          "text": "[1] [2] [3,1,2]",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 190,
      "question": "Which method is used to implement the `len()` function for a custom class?",
      "options": [
        {
          "text": "`__length__()`",
          "correct": false
        },
        {
          "text": "`__len__()`",
          "correct": true
        },
        {
          "text": "`__size__()`",
          "correct": false
        },
        {
          "text": "`__count__()`\n\n[Reference Special Methods](https://docs.python.org/3/reference/datamodel.html#special-method-names)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 191,
      "question": "What will this code output?\n\n```python\ndef decorator(func):\n    def wrapper(*args, **kwargs):\n        print(\"Before function call\")\n        result = func(*args, **kwargs)\n        print(\"After function call\")\n        return result\n    return wrapper\n\n@decorator\ndef greet(name):\n    print(f\"Hello, {name}!\")\n\ngreet(\"Alice\")\n```",
      "options": [
        {
          "text": "`Before function call`, `Hello, Alice!`, `After function call`",
          "correct": true
        },
        {
          "text": "`Hello, Alice!`",
          "correct": false
        },
        {
          "text": "`Before function call`, `After function call`",
          "correct": false
        },
        {
          "text": "`decorator`\n\n[Reference Decorators](https://docs.python.org/3/glossary.html#term-decorator)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 192,
      "question": "Which statement about Python generators is correct?",
      "options": [
        {
          "text": "Generators store all values in memory at once",
          "correct": false
        },
        {
          "text": "Generators produce values on-demand using the `yield` keyword",
          "correct": true
        },
        {
          "text": "Generators can only be created with list comprehensions",
          "correct": false
        },
        {
          "text": "Generators cannot be iterated multiple times\n\n[Reference Generators](https://docs.python.org/3/glossary.html#term-generator)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 193,
      "question": "What is the output of this code?\n\n```python\nclass Parent:\n    def method(self):\n        print(\"Parent method\")\n\nclass Child(Parent):\n    def method(self):\n        super().method()\n        print(\"Child method\")\n\nobj = Child()\nobj.method()\n```",
      "options": [
        {
          "text": "`Parent method`, `Child method`",
          "correct": true
        },
        {
          "text": "`Child method`, `Parent method`",
          "correct": false
        },
        {
          "text": "`Child method`",
          "correct": false
        },
        {
          "text": "`Parent method`\n\n[Reference super()](https://docs.python.org/3/library/functions.html#super)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 194,
      "question": "Which method is used to implement string representation for debugging?",
      "options": [
        {
          "text": "`__str__()`",
          "correct": false
        },
        {
          "text": "`__repr__()`",
          "correct": true
        },
        {
          "text": "`__format__()`",
          "correct": false
        },
        {
          "text": "`__debug__()`\n\n[Reference String Representation](https://docs.python.org/3/reference/datamodel.html#object.__repr__)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 195,
      "question": "What will this code output?\n\n```python\nfrom functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(10))\nprint(fibonacci.cache_info())\n```",
      "options": [
        {
          "text": "`55` and cache statistics",
          "correct": true
        },
        {
          "text": "`55` and `None`",
          "correct": false
        },
        {
          "text": "`RecursionError`",
          "correct": false
        },
        {
          "text": "`TypeError`\n\n[Reference lru_cache](https://docs.python.org/3/library/functools.html#functools.lru_cache)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 196,
      "question": "Which statement about Python's `with` statement is correct?",
      "options": [
        {
          "text": "It can only be used with file objects",
          "correct": false
        },
        {
          "text": "It ensures proper resource cleanup by calling `__exit__` method",
          "correct": true
        },
        {
          "text": "It creates a new scope for variables",
          "correct": false
        },
        {
          "text": "It can only be used once per program\n\n[Reference with statement](https://docs.python.org/3/reference/compound_stmts.html#the-with-statement)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 197,
      "question": "What is the output of this code?\n\n```python\nclass Counter:\n    def __init__(self):\n        self.count = 0\n\n    def __call__(self):\n        self.count += 1\n        return self.count\n\ncounter = Counter()\nprint(counter())\nprint(counter())\nprint(counter.count)\n```",
      "options": [
        {
          "text": "`1`, `2`, `2`",
          "correct": true
        },
        {
          "text": "`0`, `1`, `2`",
          "correct": false
        },
        {
          "text": "`1`, `1`, `1`",
          "correct": false
        },
        {
          "text": "`TypeError`\n\n[Reference Callable Objects](https://docs.python.org/3/reference/datamodel.html#emulating-callable-objects)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 198,
      "question": "Which method is used to implement the `in` operator for a custom class?",
      "options": [
        {
          "text": "`__in__()`",
          "correct": false
        },
        {
          "text": "`__contains__()`",
          "correct": true
        },
        {
          "text": "`__has__()`",
          "correct": false
        },
        {
          "text": "`__includes__()`\n\n[Reference Membership Test](https://docs.python.org/3/reference/datamodel.html#object.__contains__)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 199,
      "question": "What will this code output?\n\n```python\nfrom dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\n    def distance_from_origin(self):\n        return (self.x ** 2 + self.y ** 2) ** 0.5\n\np = Point(3, 4)\nprint(p)\nprint(p.distance_from_origin())\n```",
      "options": [
        {
          "text": "`Point(x=3, y=4)` and `5.0`",
          "correct": true
        },
        {
          "text": "`<Point object>` and `5.0`",
          "correct": false
        },
        {
          "text": "`Point(3, 4)` and `5`",
          "correct": false
        },
        {
          "text": "`SyntaxError`\n\n[Reference Dataclasses](https://docs.python.org/3/library/dataclasses.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 200,
      "question": "Which statement about Python's Global Interpreter Lock (GIL) is correct?",
      "options": [
        {
          "text": "GIL allows true parallelism for CPU-bound tasks",
          "correct": false
        },
        {
          "text": "GIL prevents multiple native threads from executing Python bytecodes simultaneously",
          "correct": true
        },
        {
          "text": "GIL only affects I/O operations",
          "correct": false
        },
        {
          "text": "GIL can be disabled in Python\n\n[Reference GIL](https://docs.python.org/3/glossary.html#term-global-interpreter-lock)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 201,
      "question": "What is the output of this code?\n\n```python\nclass Singleton:\n    _instance = None\n\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\na = Singleton()\nb = Singleton()\nprint(a is b)\nprint(id(a) == id(b))\n```",
      "options": [
        {
          "text": "`True` and `True`",
          "correct": true
        },
        {
          "text": "`False` and `False`",
          "correct": false
        },
        {
          "text": "`True` and `False`",
          "correct": false
        },
        {
          "text": "`False` and `True`\n\n[Reference Singleton Pattern](https://docs.python.org/3/reference/datamodel.html#object.__new__)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 202,
      "question": "Which method is used to implement iteration protocol?",
      "options": [
        {
          "text": "`__iterate__()`",
          "correct": false
        },
        {
          "text": "`__iter__()` and `__next__()`",
          "correct": true
        },
        {
          "text": "`__loop__()`",
          "correct": false
        },
        {
          "text": "`__foreach__()`\n\n[Reference Iterator Protocol](https://docs.python.org/3/library/stdtypes.html#iterator-types)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 203,
      "question": "What will this code output?\n\n```python\nfrom enum import Enum\n\nclass Color(Enum):\n    RED = 1\n    GREEN = 2\n    BLUE = 3\n\nprint(Color.RED)\nprint(Color.RED.name)\nprint(Color.RED.value)\n```",
      "options": [
        {
          "text": "`Color.RED`, `RED`, `1`",
          "correct": true
        },
        {
          "text": "`1`, `RED`, `Color.RED`",
          "correct": false
        },
        {
          "text": "`RED`, `1`, `Color.RED`",
          "correct": false
        },
        {
          "text": "`<Color.RED: 1>`, `RED`, `1`\n\n[Reference Enum](https://docs.python.org/3/library/enum.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 204,
      "question": "Which statement about Python's `*args` and `**kwargs` is correct?",
      "options": [
        {
          "text": "`*args` captures keyword arguments, `**kwargs` captures positional arguments",
          "correct": false
        },
        {
          "text": "`*args` captures positional arguments, `**kwargs` captures keyword arguments",
          "correct": true
        },
        {
          "text": "Both capture the same type of arguments",
          "correct": false
        },
        {
          "text": "They can only be used together\n\n[Reference Variable Arguments](https://docs.python.org/3/tutorial/more.html#more-on-defining-functions)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 205,
      "question": "What is the output of this code?\n\n```python\nclass MyClass:\n    class_var = 0\n\n    def __init__(self):\n        MyClass.class_var += 1\n        self.instance_var = MyClass.class_var\n\na = MyClass()\nb = MyClass()\nprint(a.instance_var, b.instance_var)\nprint(MyClass.class_var)\n```",
      "options": [
        {
          "text": "`1 2` and `2`",
          "correct": true
        },
        {
          "text": "`0 1` and `2`",
          "correct": false
        },
        {
          "text": "`1 1` and `1`",
          "correct": false
        },
        {
          "text": "`2 2` and `2`\n\n[Reference Class vs Instance Variables](https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 206,
      "question": "Which method is used to implement the `+` operator for a custom class?",
      "options": [
        {
          "text": "`__plus__()`",
          "correct": false
        },
        {
          "text": "`__add__()`",
          "correct": true
        },
        {
          "text": "`__sum__()`",
          "correct": false
        },
        {
          "text": "`__combine__()`\n\n[Reference Arithmetic Operations](https://docs.python.org/3/reference/datamodel.html#emulating-numeric-types)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 207,
      "question": "What will this code output?\n\n```python\nfrom collections import namedtuple\n\nPerson = namedtuple('Person', ['name', 'age', 'city'])\np = Person('Alice', 30, 'New York')\nprint(p.name)\nprint(p[1])\nprint(p._fields)\n```",
      "options": [
        {
          "text": "`Alice`, `30`, `('name', 'age', 'city')`",
          "correct": true
        },
        {
          "text": "`Alice`, `Alice`, `['name', 'age', 'city']`",
          "correct": false
        },
        {
          "text": "`Person`, `30`, `('name', 'age', 'city')`",
          "correct": false
        },
        {
          "text": "`AttributeError`\n\n[Reference namedtuple](https://docs.python.org/3/library/collections.html#collections.namedtuple)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 208,
      "question": "Which statement about Python's `lambda` functions is correct?",
      "options": [
        {
          "text": "Lambda functions can contain multiple statements",
          "correct": false
        },
        {
          "text": "Lambda functions can only contain a single expression",
          "correct": true
        },
        {
          "text": "Lambda functions cannot take arguments",
          "correct": false
        },
        {
          "text": "Lambda functions are faster than regular functions\n\n[Reference Lambda Expressions](https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 209,
      "question": "What is the output of this code?\n\n```python\nfrom functools import partial\n\ndef multiply(x, y, z):\n    return x * y * z\n\ndouble = partial(multiply, 2)\nresult = double(3, 4)\nprint(result)\n```",
      "options": [
        {
          "text": "`24`",
          "correct": true
        },
        {
          "text": "`12`",
          "correct": false
        },
        {
          "text": "`6`",
          "correct": false
        },
        {
          "text": "`TypeError`\n\n[Reference functools.partial](https://docs.python.org/3/library/functools.html#functools.partial)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 210,
      "question": "Which method is used to implement comparison operations like `<`, `>`, `<=`, `>=`?",
      "options": [
        {
          "text": "`__compare__()`",
          "correct": false
        },
        {
          "text": "`__lt__()`, `__gt__()`, `__le__()`, `__ge__()`",
          "correct": true
        },
        {
          "text": "`__cmp__()`",
          "correct": false
        },
        {
          "text": "`__order__()`\n\n[Reference Rich Comparison Methods](https://docs.python.org/3/reference/datamodel.html#object.__lt__)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 211,
      "question": "What will this code output?\n\n```python\nclass MyContext:\n    def __enter__(self):\n        print(\"Entering context\")\n        return self\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(\"Exiting context\")\n        return False\n\nwith MyContext() as ctx:\n    print(\"Inside context\")\n```",
      "options": [
        {
          "text": "`Entering context`, `Inside context`, `Exiting context`",
          "correct": true
        },
        {
          "text": "`Inside context`, `Entering context`, `Exiting context`",
          "correct": false
        },
        {
          "text": "`Entering context`, `Exiting context`, `Inside context`",
          "correct": false
        },
        {
          "text": "`Inside context`\n\n[Reference Context Manager Protocol](https://docs.python.org/3/reference/datamodel.html#context-managers)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 212,
      "question": "Which statement about Python's `yield from` is correct?",
      "options": [
        {
          "text": "It's the same as regular `yield`",
          "correct": false
        },
        {
          "text": "It delegates to another generator or iterable",
          "correct": true
        },
        {
          "text": "It can only be used with lists",
          "correct": false
        },
        {
          "text": "It creates a new thread\n\n[Reference yield from](https://docs.python.org/3/whatsnew/3.3.html#pep-380-syntax-for-delegating-to-a-subgenerator)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 213,
      "question": "What is the output of this code?\n\n```python\nclass Descriptor:\n    def __get__(self, obj, objtype=None):\n        return \"Descriptor value\"\n\n    def __set__(self, obj, value):\n        print(f\"Setting value: {value}\")\n\nclass MyClass:\n    attr = Descriptor()\n\nobj = MyClass()\nprint(obj.attr)\nobj.attr = \"new value\"\nprint(obj.attr)\n```",
      "options": [
        {
          "text": "`Descriptor value`, `Setting value: new value`, `Descriptor value`",
          "correct": true
        },
        {
          "text": "`Descriptor value`, `Setting value: new value`, `new value`",
          "correct": false
        },
        {
          "text": "`None`, `Setting value: new value`, `new value`",
          "correct": false
        },
        {
          "text": "`AttributeError`\n\n[Reference Descriptors](https://docs.python.org/3/reference/datamodel.html#implementing-descriptors)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 214,
      "question": "Which method is used to implement the `hash()` function for a custom class?",
      "options": [
        {
          "text": "`__hashcode__()`",
          "correct": false
        },
        {
          "text": "`__hash__()`",
          "correct": true
        },
        {
          "text": "`__digest__()`",
          "correct": false
        },
        {
          "text": "`__checksum__()`\n\n[Reference Hash Method](https://docs.python.org/3/reference/datamodel.html#object.__hash__)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 215,
      "question": "What will this code output?\n\n```python\nfrom typing import List, Dict\n\ndef process_data(items: List[int]) -> Dict[str, int]:\n    return {\"count\": len(items), \"sum\": sum(items)}\n\nresult = process_data([1, 2, 3, 4, 5])\nprint(result)\nprint(type(result))\n```",
      "options": [
        {
          "text": "`{'count': 5, 'sum': 15}` and `<class 'dict'>`",
          "correct": true
        },
        {
          "text": "`{'count': 5, 'sum': 15}` and `<class 'Dict'>`",
          "correct": false
        },
        {
          "text": "`TypeError`",
          "correct": false
        },
        {
          "text": "`SyntaxError`\n\n[Reference Type Hints](https://docs.python.org/3/library/typing.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 216,
      "question": "Which statement about Python's `__slots__` is correct?",
      "options": [
        {
          "text": "`__slots__` increases memory usage",
          "correct": false
        },
        {
          "text": "`__slots__` restricts attribute creation and can reduce memory usage",
          "correct": true
        },
        {
          "text": "`__slots__` is only for methods",
          "correct": false
        },
        {
          "text": "`__slots__` enables multiple inheritance\n\n[Reference **slots**](https://docs.python.org/3/reference/datamodel.html#slots)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 217,
      "question": "What is the output of this code?\n\n```python\nclass MRO_A:\n    def method(self):\n        print(\"A\")\n\nclass MRO_B(MRO_A):\n    def method(self):\n        print(\"B\")\n        super().method()\n\nclass MRO_C(MRO_A):\n    def method(self):\n        print(\"C\")\n        super().method()\n\nclass MRO_D(MRO_B, MRO_C):\n    def method(self):\n        print(\"D\")\n        super().method()\n\nobj = MRO_D()\nobj.method()\n```",
      "options": [
        {
          "text": "`D`, `B`, `C`, `A`",
          "correct": true
        },
        {
          "text": "`D`, `B`, `A`",
          "correct": false
        },
        {
          "text": "`D`, `C`, `A`",
          "correct": false
        },
        {
          "text": "`A`, `B`, `C`, `D`\n\n[Reference Method Resolution Order](https://docs.python.org/3/tutorial/classes.html#multiple-inheritance)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 218,
      "question": "Which method is used to implement the `del` statement for a custom class?",
      "options": [
        {
          "text": "`__del__()`",
          "correct": true
        },
        {
          "text": "`__delete__()`",
          "correct": false
        },
        {
          "text": "`__remove__()`",
          "correct": false
        },
        {
          "text": "`__destroy__()`\n\n[Reference Object Finalization](https://docs.python.org/3/reference/datamodel.html#object.__del__)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 219,
      "question": "What will this code output?\n\n```python\nfrom contextlib import contextmanager\n\n@contextmanager\ndef my_context():\n    print(\"Setup\")\n    try:\n        yield \"resource\"\n    finally:\n        print(\"Cleanup\")\n\nwith my_context() as resource:\n    print(f\"Using {resource}\")\n```",
      "options": [
        {
          "text": "`Setup`, `Using resource`, `Cleanup`",
          "correct": true
        },
        {
          "text": "`Using resource`, `Setup`, `Cleanup`",
          "correct": false
        },
        {
          "text": "`Setup`, `Cleanup`, `Using resource`",
          "correct": false
        },
        {
          "text": "`Setup`, `Using resource`\n\n[Reference contextlib.contextmanager](https://docs.python.org/3/library/contextlib.html#contextlib.contextmanager)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 220,
      "question": "Which statement about Python's `property` decorator is correct?",
      "options": [
        {
          "text": "It can only be used for read-only attributes",
          "correct": false
        },
        {
          "text": "It allows methods to be accessed like attributes",
          "correct": true
        },
        {
          "text": "It creates class variables",
          "correct": false
        },
        {
          "text": "It can only be used with strings\n\n[Reference Property Decorator](https://docs.python.org/3/library/functions.html#property)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 221,
      "question": "What is the output of the following code?\n\n```python\nclass Meta(type):\n    def __new__(cls, name, bases, attrs):\n        attrs['class_id'] = f\"{name}_123\"\n        return super().__new__(cls, name, bases, attrs)\n\nclass MyClass(metaclass=Meta):\n    pass\n\nprint(MyClass.class_id)\n```",
      "options": [
        {
          "text": "`MyClass_123`",
          "correct": true
        },
        {
          "text": "`Meta_123`",
          "correct": false
        },
        {
          "text": "`AttributeError`",
          "correct": false
        },
        {
          "text": "`class_id`\n\n[Reference Metaclasses](https://docs.python.org/3/reference/datamodel.html#metaclasses)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 222,
      "question": "Which method is used to create a context manager in Python?",
      "options": [
        {
          "text": "`__init__` and `__del__`",
          "correct": false
        },
        {
          "text": "`__enter__` and `__exit__`",
          "correct": true
        },
        {
          "text": "`__start__` and `__stop__`",
          "correct": false
        },
        {
          "text": "`__open__` and `__close__`\n\n[Reference Context Managers](https://docs.python.org/3/reference/datamodel.html#context-managers)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 223,
      "question": "What will this code output?\n\n```python\nimport asyncio\n\nasync def fetch_data(delay):\n    await asyncio.sleep(delay)\n    return f\"Data after {delay} seconds\"\n\nasync def main():\n    result = await fetch_data(1)\n    print(result)\n\nasyncio.run(main())\n```",
      "options": [
        {
          "text": "`Data after 1 seconds`",
          "correct": true
        },
        {
          "text": "`<coroutine object fetch_data>`",
          "correct": false
        },
        {
          "text": "`SyntaxError`",
          "correct": false
        },
        {
          "text": "`None`\n\n[Reference Asyncio](https://docs.python.org/3/library/asyncio.html)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 224,
      "question": "Which decorator is used to create a property that can be set?\n\n```python\nclass Circle:\n    def __init__(self, radius):\n        self._radius = radius\n\n    @property\n    def radius(self):\n        return self._radius\n\n    @radius.setter\n    def radius(self, value):\n        if value < 0:\n            raise ValueError(\"Radius cannot be negative\")\n        self._radius = value\n```",
      "options": [
        {
          "text": "`@property.getter`",
          "correct": false
        },
        {
          "text": "`@radius.setter`",
          "correct": true
        },
        {
          "text": "`@property.setter`",
          "correct": false
        },
        {
          "text": "`@setter`\n\n[Reference Property Decorators](https://docs.python.org/3/library/functions.html#property)",
          "correct": false
        }
      ],
      "reference": null
    },
    {
      "id": 225,
      "question": "What is the output of this code?\n\n```python\nfrom collections import defaultdict\n\ndd = defaultdict(list)\ndd['key1'].append('value1')\ndd['key2'].append('value2')\nprint(len(dd))\nprint(dd['key3'])\nprint(len(dd))\n```",
      "options": [
        {
          "text": "`2`, `[]`, `2`",
          "correct": false
        },
        {
          "text": "`2`, `[]`, `3`",
          "correct": true
        },
        {
          "text": "`2`, `KeyError`, `2`",
          "correct": false
        },
        {
          "text": "`3`, `[]`, `3`\n\n[Reference defaultdict](https://docs.python.org/3/library/collections.html#collections.defaultdict)",
          "correct": false
        }
      ],
      "reference": null
    }
  ]
};
