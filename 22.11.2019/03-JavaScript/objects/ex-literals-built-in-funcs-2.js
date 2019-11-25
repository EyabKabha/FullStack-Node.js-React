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

function createStudent(name, age, courses, avg, city){
    return {
        name,
        age,
        courses,
        avg,
        address: {city}
    };
}

const students = [
    createStudent('Shahar', 83, ['React', 'JS'], 81, 'Haifa'),
    createStudent('Shahar2', 83, ['React'], 83, 'Haifa'),
    createStudent('Shahar3', 83, ['React', 'JS'], 33, 'Jerusalem'),
    createStudent('Shahar4', 83, ['React', 'JS'], 73, 'Haifa'),
    createStudent('Shahar5', 83, ['React', 'JS'], 93, 'Tel Aviv'),
    createStudent('Shahar6', 83, ['React', 'JS'], 73, 'Afula')
];

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