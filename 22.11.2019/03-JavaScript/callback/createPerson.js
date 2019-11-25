function validateStudentName(name){
    return name.length < 10;
}
function validateStudentAge(age){
    return age >=18 && age <= 60;
}

function validateElderName(name){
    return name.length > 5 && name.length < 25;
}
function validateElderAge(age){
    return age > 60 && age <= 120;
}

function createPerson(name, age, validateName, validateAge){
    //validate name and age
    
    if(!validateName(name)){
        console.log('Name is wrong');
        return;
    }
    if(!validateAge(age)){
        console.log('Age is wrong');
        return;
    }

    //If everything's OK:
    return {
        name,
        age
    };
}
//Use createPerson to:
//1- Create Student:
// name - no more than 10 chars,
// age - between 18 and 60

var student = createPerson('Shahar', 45, validateStudentName, validateStudentAge);
var student = createPerson('Shaharulfldi', 45, validateStudentName, validateStudentAge);

//2- Create Elder:
// name - no less than 5 and no more than 10 chars,
// age - between 60 and 120

var myGrandpa = createPerson('Joseff', 88, validateElderName, validateElderAge);