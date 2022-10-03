const path = require('path')

console.log(path.basename(__filename))

// Directory

console.log(path.dirname(__filename))

// Extensoin

console.log(path.extname(__filename))
console.log(path.parse(__filename))

console.log(path.join(__dirname , "test", "test2" , "index.html"))