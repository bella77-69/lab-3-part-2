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
