const fs = require("fs");
const lodash = require("lodash");
let userString = fs.readFileSync("user-data.json");
let user = JSON.parse(userString);

user.addLanguage = function(title, description) {
    this.languages.push({title, description});
    let userTemp = JSON.stringify(this);
    fs.writeFileSync("./user-data.json", userTemp);
};

user.removeLanguage = function(title) {
    lodash.remove(this.languages, function(lang) {
        return lang.title == title;
    });
    let userTemp = JSON.stringify(this);
    fs.writeFileSync("./user-data.json", userTemp);
}

user.showLanguage = function(title) {
    console.log(lodash.find(this.languages, function(lang) {
        return lang.title == title;
    }));
}

user.showAll = function() {
    console.log(this.languages);
}

module.exports.user = user;