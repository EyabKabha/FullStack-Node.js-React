function sayHello(msg){
    console.log(this.name, msg);
}

//global object
name = 'Shahar';

sayHello();

const person = {
    name: "Ma'amun",
    sayHello
};

person.sayHello();

const student = {
    name: 'Khayam'
};

const msg = 'lala';

sayHello.call(student, msg);
sayHello.apply(student, [msg]);

const sayHelloWithStudent = sayHello.bind(student);
//Later on...
sayHelloWithStudent('some message');