const student = {
    id: 121212,
    name: 'Shahar',
    age: 99,
    courses: ['JavaScript', 'React', 'Node'],
    average: 77,
    address: {
        city: 'Tel Aviv'
    },
    toString: function(){
        return `Student Details:
        Name: ${this.name}
        Age: ${this.age}
        Courses: ${this.courses.join(',')}
        Avg: ${this.average}`;
    }
};

console.log(`Student name: ${student.name}, Avg: ${student.average}`);
console.log(student);
console.log(`Student details: ${student}`);

student.name= 'Lula';

console.log(student);
