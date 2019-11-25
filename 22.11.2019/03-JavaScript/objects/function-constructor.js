function Person(name, age){
    //this = {}
    this.name = name;
    //this = {name:'Shahar'}
    this.age = age;
    //this = {name:'Shahar', age: 89}
    //return this
}

const me = new Person('Shahar', 89);

console.log(me);
