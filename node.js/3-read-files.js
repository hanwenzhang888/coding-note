
var fs = require("fs");   //file system

function mergeValues(values, content) {
  //Cycle over the keys
  for(var key in values) {
    //Replace all {{key}} with the value from the values object
    content = content.replace("{{" + key + "}}", values[key]);
  }
  //return merged content
  return content;
}

function view(templateName, values, reponse) {
  //Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
  //Insert values in to the content
  fileContents = mergeValues(values, fileContents);
  //Write out the contents to the response
  reponse.write(fileContents);
}

module.exports.view = view;



// Pick the blocking version of a method you can use to read a file?
// Blocking means Node.js waits for the file to be loaded before executing further code.
// //readFileSync

// If you wanted to read from a file asynchronously what method would you use?
//   //readFile
  
//   How do you require the File System module?
//   //require('fs')
  
  
  
//   Given the following code what will happen?   

//   var fs = require("fs");

// fs.readFile('/etc/this/file/exists.txt', function (err, data) {
//   if (err) throw err;
//   console.log("File read.");
// });

// console.log("I love bees.");
//    Remember readFile is asynchronous and the callback will be executed after the file is read.

  //I love bees. 
//File read

