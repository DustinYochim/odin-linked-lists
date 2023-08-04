# odin-linked-lists

This repository contains a JavaScript implementation of a basic linked list data structure, developed as part of an assignment for The Odin Project. Linked lists are fundamental data structures that allow dynamic allocation of data elements, enabling easy insertion and removal without the need to reallocate other elements.

## Table of Contents

- [Introduction](#introduction)
- [Classes](#classes)
- [Functions](#functions)
- [Usage](#usage)
- [Extra Credit](#extra-credit)

## Introduction

In this project, we explore the concept of linked lists and their usage in JavaScript. While JavaScript arrays offer dynamic sizing and efficient insertion and deletion, understanding linked lists can provide a foundational understanding of more complex data structures like graphs and binary trees.

## Classes

The implementation involves two classes:

1. **LinkedList**: Represents the linked list itself.
2. **Node**: Contains a value property and a link to the nextNode, initialized as null by default.

## Functions

The following functions are built into the `LinkedList` class:

- `append(value)`: Adds a new node containing the given `value` to the end of the list.
- `prepend(value)`: Adds a new node containing the given `value` to the start of the list.
- `size()`: Returns the total number of nodes in the list.
- `head()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the specified `index`.
- `pop()`: Removes the last element from the list.
- `contains(value)`: Returns `true` if the provided `value` is in the list, otherwise `false`.
- `find(value)`: Returns the index of the node containing the `value`, or `null` if not found.
- `toString()`: Represents the linked list as a string in the format: `( value ) -> ( value ) -> ... -> null`
- `insertAt(value, index)`: Inserts a new node with the given `value` at the specified `index`.
- `removeAt(index)`: Removes the node at the specified `index`.

## Usage

To use the linked list implementation, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/linked-list.git`
2. Navigate to the project directory: `cd linked-list`
3. Open `index.js` and import the `LinkedList` class.
4. Create a new instance of the `LinkedList`.
5. Use the available functions to manipulate the linked list.

Example:

```javascript
const { LinkedList } = require('./LinkedList');

const myList = new LinkedList();
myList.append(42);
myList.prepend(23);
console.log(myList.toString()); // ( 23 ) -> ( 42 ) -> null
