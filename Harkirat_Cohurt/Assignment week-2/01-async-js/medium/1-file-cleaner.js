// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman

const fs = require('fs');

fs.readFile("Harkirat_Cohurt/Assignment week-2/01-async-js/medium/a.txt", "utf-8", function(err, data){
  if (err) {
    console.log(err);
    return;
  }
  const modifiedFileContent = data.replace(/\s+/g, " ").trim();
  fs.writeFile("file.txt", modifiedFileContent, "utf-8", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`File written successfully with data: ${modifiedFileContent}`);
  });
});

    // let and = data.split(/\s+/).join(' ');
    // console.log(and);
// }});

