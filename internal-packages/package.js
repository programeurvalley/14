const ticket = {
    id : 0,
    owner : 'Abderrhmane ',
    title : 'a Super hero movie',
    date : new Date(),
    pg13:true
}

class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log("Hello", this.name , this.age);
    }
}

function startingFunction(){
    console.log("Hello User !")
}

module.exports = {
    ticket,
    Student,
    startingFunction
}