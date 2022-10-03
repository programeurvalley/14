const EventEmitter = require('events')
const uuid = require('uuid')

const eventEmitter = new EventEmitter()

class User extends EventEmitter  {
    constructor(username , id){
        super()
        this.username = username;
        this.id = id;
    }

    connectHandler(){
        console.log('connection successful')
        console.log('username : ',this.username)
        console.log('id :' , this.id)
        this.emit('data_recived')
    }

    dataRecivedHandler(){
        console.log('data recived succeffuly')
    }


}

// var myEmitter = new MyEmitter()

/*var connectHandler = () => {
    console.log('connection successful')

    myEmitter.emit('data_recived')
}*/

/*var dataRecivedHandler = () => {
    console.log('data recived succefuly')
}*/

/*
myEmitter.on('connect' , connectHandler)
myEmitter.on('data_recived' , dataRecivedHandler)
*/

const user1 = new User('Walid' , uuid.v4())

user1.on('connect' , user1.connectHandler)
user1.on('data_recived' ,  user1.dataRecivedHandler)

// Event Listner 
eventEmitter.on('event' , () => {
    console.log('Event fired !')
})

// Init Event 
eventEmitter.emit('event')
user1.emit('connect')


class Check extends EventEmitter{
    constructor(username , password){
        super()
        this.username = username
        this.password = '123456a'
    }

    CheckUser(){
        (this.password == '123456a') ? console.log('you are connected') : console.log('password wrong !')
    }
}

const check1 = new Check('Walid' , 'azerty')

check1.on('logging' , check1.CheckUser)

check1.emit('logging')

