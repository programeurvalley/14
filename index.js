const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
// const { clearInterval } = require('timers');


/*

const { ticket , Student , startingFunction }  = require('./internal-packages/package')

const Student1 = new Student('Tarek' , 23)


console.log(uuid.v4())
console.log(ticket)
Student1.greeting()
startingFunction()
console.log(__filename)
console.log(__dirname)
console.log(path.basename(__filename))
// Directory
console.log(path.dirname(__filename))
// Extensoin
console.log(path.extname(__filename))
console.log(path.parse(__filename))

*/
fs.mkdirSync(path.join(__dirname , 'logged' , 'logs'), {})

fs.writeFileSync(path.join(__dirname , 'logged' , 'logs' , 'logs.txt'), '')


const Logger = require('./logged/logger')
const logger = new Logger()

const Writter = require('./logged/writer')


const messageHandler = (data) => {
    console.log("data lisner : " ,data)
    fs.appendFile(path.join(__dirname , '/logged' , 'logs' , 'logs.txt') ,  `id :  ${data.id} has made message ${data.message} \n` , err => {
        if(err) throw err;
        console.log('File appended to !')
    })
}

logger.on('message', messageHandler)

logger.log("Hello Wolrd")
logger.log("hi")
logger.log("Hello")

Writter('testWritter1' , "This is a test writing " , logger)
Writter('testWritter2' , "This is a test writing ", logger)
Writter('testWritter3' , "This is a test writing ", logger)

/*
function printFunc(func = "Nothing"){
    console.log("hello from", func)
}

setTimeout(printFunc , 3000)
const timeout = setTimeout(() => printFunc("setTimeout") , 3000)
const interval = setInterval(() => printFunc("setInterval") , 3000)


clearTimeout(timeout)
setTimeout(() => clearInterval(interval) , 3*3010)

*/