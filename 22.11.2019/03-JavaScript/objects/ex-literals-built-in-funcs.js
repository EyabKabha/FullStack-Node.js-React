//Ex
//Create array of 7 students
// { name, age, 
//   courses (1 or more of Node, JS, React, Java), 
//   avg, 
//   address: {city}
// }
//
//Show all students learning JS, 
//who lives in Haifa and avg
// more than 80.
//Show their name and avg in descending order of avg

const student1 = {
    name: 'Shahar',
    age: 83,
    courses: ['React', 'JS'],
    avg: 83,
    address: {city: 'Haifa'}
};

const student2 = {
    name: 'Firas',
    age: 82,
    courses: ['React', 'Node', 'JS'],
    avg: 87,
    address: {city: 'Tel Aviv'}
};
const student3 = {
    name: 'Rany',
    age: 12,
    courses: ['React', 'Java'],
    avg: 81,
    address: {city: 'Haifa'}
};
const student4 = {
    name: 'Jannat',
    age: 21,
    courses: ['React', 'JS'],
    avg: 90,
    address: {city: 'Haifa'}
};
const student5 = {
    name: 'Yazan',
    age: 99,
    courses: ['Node', 'React', 'JS'],
    avg: 89,
    address: {city: 'Haifa'}
};

const students = [student1, student2,student3, student4,student5];

const filtered =
    students
    .filter(function(student){
        return student.courses.includes('JS') &&
               student.address.city == 'Haifa' &&
               student.avg > 80
    })
    .sort(function(student1, student2){
        return student2.avg - student1.avg;
    })
    .map(function(student){return `Student Name ${student.name}, Avg ${student.avg}`});

console.log(filtered);