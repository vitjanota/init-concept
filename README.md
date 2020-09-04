# Init Concept

This is a very simple concept how to automatically initialize (i.e "on load" or "on document ready" run init functions) libraries, just by adding them to the particular page.

`page01.html` links two libraries, `page02.html` three. Each library init function just add a notice to the page content about its initialization.

`main.js` defines a global `Inits` array of init functions references and on document rady iteretes trough all items availabe and calls them one by one.

Each library defines its init function and just adds it to `Inits` array at the very beginning.
