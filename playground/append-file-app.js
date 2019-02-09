const fs = require("fs");

fs.appendFile("./greetings.txt", "Hello, World!", function(err) {
  console.log(err);
});
