// Module Wrapper Function

function printFunc(func = "Nothing"){
    console.log("hello from", func)
}

setTimeout(printFunc , 30000)