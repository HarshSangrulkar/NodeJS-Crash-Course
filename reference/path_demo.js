//since its a core module we don't have to write ./path
const path = require('path');


//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//concatenate paths

//../try/hello.html
console.log(path.join(__dirname, 'try', 'hello.html'));