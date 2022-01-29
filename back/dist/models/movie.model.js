"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
let Movie;
const fs = require('fs');
fs.readFile('src/assets/movies.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
    else {
        // parse JSON string to JSON object
        Movie = data;
        return Movie;
    }
});
module.exports = Movie;
//# sourceMappingURL=movie.model.js.map