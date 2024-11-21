/*
**localStorage and sessionStorage are "web storage mechanisms" that allow you to "store key-value pairs" on the "client-side" within a "web browser".
=>localStorage:
**Data stored in "localStorage" It has "no expiration time" and "It will persist" even after the "browser is closed".
**data stored in localStorage is shared among "all tabs and windows" from the "same origin "(same protocol, domain, and port).
*/

// Storing data in localStorage
localStorage.setItem('key', 'value');

// Retrieving data from localStorage
const storedValue = localStorage.getItem('key');



// Example object
const user = {
    name: "Manchala Sai Kiran",
    role: "Full Stack Developer",
    experience: 2
};

// Store object as a string
localStorage.setItem("user", JSON.stringify(user));

// Retrieve and parse the object
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Output: "Manchala Sai Kiran"

// Remove specific key
localStorage.removeItem("user");


/*
=>sessionStorage:
**Data stored in sessionStorage is only "available" for the "duration of the page session".
** It will be "cleared" when the page is "closed" or the "session ends" (e.g., when the user closes the tab).


**localStorage and sessionStorage provide methods for "storing, retrieving, and removing data".

**These storage mechanisms are often used for "caching data," "saving user preferences", or "temporarily storing data" that needs to "persist during a user's session".
** it will be "storing sensitive information", as it is accessible on the client-side and can be "manipulated by users".
*/

// Storing data in sessionStorage
sessionStorage.setItem('key', 'value');

// Retrieving data from sessionStorage
const storedValue1 = sessionStorage.getItem('key');



// Store object as a string
sessionStorage.setItem("user", JSON.stringify(user));

// Retrieve and parse the object
const storedUserSession = JSON.parse(sessionStorage.getItem("user"));
console.log(storedUserSession.role); // Output: "Full Stack Developer"

// Remove all keys
sessionStorage.clear();
