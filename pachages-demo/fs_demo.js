const fs = require('fs')
const path  = require('path')

//? Async Version 

// Create Folder 

/*

fs.mkdir(path.join(__dirname , "test" , "test2" ),{}, function (err){
    if(err) throw err
    console.log("Folder Created !")
})

*/

// mkdir for folder not file (.js , .html , .css)
// we can do one inside one fs.mkdir

// Create and Write to File

/*

fs.writeFile(path.join(__dirname , "test" , "test1" , 'index.html'),"<h1>Hello World ! </h1>", (err) => { 
    if(err) throw err
    console.log("File Created !")
}) 

// Overwrite a file

fs.appendFile(path.join(__dirname , "test" , "test1" , 'index.html'),"<h2>Hello World ! </h2>", (err) => { 
    if(err) throw err
    console.log("File Created !")
})

*/

// appendFile fast writeFile ()

// Read File 

/* 

fs.readFile(path.join(__dirname , "test" , "test1" , 'index.html') , (err , data) => { 
    if(err) throw err
    console.log("File Readed : " , data.toString())
})

*/

// Rename File 
/* 

fs.rename(path.join(__dirname , "test" , "test1" , 'index.html') ,path.join(__dirname , "test" , "test1" , 'file.txt') , (err ) => { 
    if(err) throw err
    console.log("File Renamed ! ")
})

*/

/*

fs.rename(path.join(__dirname , "test" ,   'file.txt') ,path.join(__dirname , "test" , "test1" , 'file.txt') , (err ) => { 
    if(err) throw err
    console.log("File Deplaced ! ")
})

*/

//? Syncro Version

// Create a File

fs.writeFileSync(path.join(__dirname , "test" , "test1" , 'index.html'),"<h1>Hello World ! </h1>") 
console.log("Create First file !")
fs.writeFileSync(path.join(__dirname , "test" , "test2" , 'index.html'),"<h1>Hello World ! </h1>") 
console.log("Create Second file !")

console.log("Programm finished")


