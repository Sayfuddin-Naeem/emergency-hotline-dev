# Answer of all questions

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Ans:
    1. getElementById:
        getElementById is an element selector, which select a single element by its id. It returns a single DOM element.
        When we need to select a single element by id, then we can use it.

    2. getElementsByClassName:
        getElementsByClassName is an element selector, which select all elements with a specific class name. It returns an HTMLCollection, which updates automatically if the DOM changes.
        When we need to select all possible elements by a specific class name and to access with element with index like array, we can use it.

    3. querySelector / querySelectorAll:
        querySelector and querySelectorAll are element selector, those select element by CSS selector. CSS selector can be simple or complex doesn't matter.

        querySelector -- returns first matching element with the CSS selector.
        querySelectorAll -- returns NodeList of all matching elements.
        querySelectorAll is static elements collection not dynamic unlike getElementsByClassName.
    
    
