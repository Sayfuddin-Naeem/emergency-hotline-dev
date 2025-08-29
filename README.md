# Answer of all questions

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Ans:
1.getElementById:
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

## 2. How do you create and insert a new element into the DOM?

## Ans:

We can create to use document.createElement('tagName').

Firstly we select the parent element, where the created element is placed.
We can insert an element with four way.

- Insert as the last child with selectedElement.append(createdElement)
- Insert as the first child with selectedElement.prepend(createdElement)
- Insert before a specific element with selectedElement.parentNode.insertBefore(createdElement, selectedElement)
- Insert after a specific element with selectedElement.after(createdElement)

## 3. What is Event Bubbling and how does it work?

## Ans:

-Event Bubbling: Event bubbling is a process in javascript, where an event  starts from the target element, which is actually clicked, finished to the document, the root node, through ancestors of targeted element in DOM tree.

-How to works: In emergency hotline project, the service card has a call button. When someone click it, firstly it is handled by call button, then event is handled the card div, then its ancestors, finally the document node, then window object.


## 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation: Event delegation is a technique in JavaScript, where parent handle its child events.

- Why Event Delegation is useful?
    When we handle dynamic content and when we concern about performance, then we use event delegation.
    It reduce number of event listeners and memory usages.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

## Ans:

- preventDefault(): Prevent the default action of an event from occurring.
- stopPropagation(): Stops the event to bubbling up parent elements.
    
