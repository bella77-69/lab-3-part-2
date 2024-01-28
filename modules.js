const fs = require("fs");
const path = require("path");

const moduleFile = (directory, extension, callback) => {
  const directoryPath = path.join(__dirname, directory);

  // Read the contents of the directory, call callback with an error if it occurs
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return callback(err);
    }

    // Filter the list of files in the directory to only files that end with the specified extension
    const filteredFiles = files.filter(
      (file) => path.extname(file).slice(1) === extension
    );

    // Pass to the callback
    callback(null, filteredFiles);
  });
};

//export a single function that takes exactly the arguments described
module.exports = { moduleFile };
