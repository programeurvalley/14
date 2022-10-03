const url = require('url')

const myUrl = new URL('http://mywebsite.com:8000/index.html?id=100&status=active')

// print object URL
console.log(myUrl)

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

// Host
console.log(myUrl.host)

// Param Object
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((value , name) => console.log(name , value))

// Add params
myUrl.searchParams.append('name','john')
console.log(myUrl.searchParams)

