const fs = require('fs')
const path = require('path')

function Writter(file , message , logger){
    fs.writeFile(path.join(__dirname , file) , message , err => {
        if(err) throw err
        })

        logger.log("Writter in : " + file + "the following : "+ message)
}

module.exports = Writter