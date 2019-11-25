//Prototype

const person = {
    name:'Shahar',
    age: 78
}

const student = Object.create(person);

console.log(person, student);

console.log(person.name, student.name);
console.log(person.age, student.age);
person.age++;
console.log(person.age, student.age);
student.name = 'Majd';
console.log(person.name, student.name);
console.log(person, student);

const waiterStudent = Object.create(student);
console.log(person, student, waiterStudent);
console.log(waiterStudent.name, waiterStudent.age);
delete student.name;
console.log(waiterStudent.name, waiterStudent.age);

console.clear();

const employee = {
    id: 1212,
    salary: 4500,
    bonus: 900
};


const manager = Object.assign({bonus: 1500}, 
                                employee,
                                {bonus: 8000});
console.log(manager);

console.clear();

const manager2 = Object.assign(employee, person);
console.log(manager2);

console.clear();

const manager3 = Object.assign(employee, student);
console.log(manager3);







