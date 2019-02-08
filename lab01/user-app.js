const lodash = require ("lodash");
const yargs = require ("yargs");
console.log(yargs.argv);
const data = require ("./user-module");
let user = data.user;

let command = yargs.argv._[0];
if (command =="add") {
    user.addLanguage(yargs.argv.title, yargs.argv.description);
} else if (command == "remove") {
    user.removeLanguage(yargs.argv.title);
} else if (command == "read") {
    user.showLanguage(yargs.argv.title);
} else if (command == "list") {
    user.showAll();
}