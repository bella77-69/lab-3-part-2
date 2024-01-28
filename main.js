/*
> You need to write a module file to do most of the work. The module must export a single function that takes three arguments: the directory name, the filename extension string and a callback function, in that order. The filename extension argument must be the same as was passed to your program. i.e. don't turn it into a regular expression or prefix it with "." or do anything else but pass it to your module where you can do what you need to make your filter work.
> 

> The callback function must be called using the idiomatic node(err, data) convention. This convention states that unless there's an error, the first argument passed to the callback will be null, and the second will be your data. In this case, the data will be your filtered list of files, as an Array. If you receive an error, e.g. from your call to fs.readdir(), the callback must be called with the error, and only the error, as the first argument.
> 

> You must not print directly to the console from your module file, only from your original program.
> 

> In the case of an error bubbling up to your original program file, simply check for it and print an informative message to the console.
> 

> **How i'll grade you**: these four things are the contract that your module must follow.
> 
1. Export a single function that takes exactly the arguments described
2. Call the callback with an error or some data as described.
3. Don't change anything else, like global variables or stdout.
4. Handle all the errors that may occur and pass them to the callback.
*/

const { moduleFile } = require("./modules.js");

const directory = process.argv[2];
const extension = process.argv[3];

// Use idiomatic node.js callback convention
moduleFile(directory, extension, (err, filteredFiles) => {
  if (err) {
    console.log(`Sorry, cannot read the directory!? ${err}`);
  } else {
    // Print the list of filtered files on separate lines
    filteredFiles.forEach((file) => {
      console.log(`File: ${file}, Extension: ${extension}`);
    });
  }
});
