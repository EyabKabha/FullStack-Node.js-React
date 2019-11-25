/*
1
צרו מערך של 10 סטודנטים (תשקיעו בפרטי התכונות) שגרים בחיפה, ירושלים, תל אביב ועפולה.
א- מיצאו כמה גרים בתל אביב
ב- הדפיסו את שמות הסטודנטים מעל גיל 30 שלומדים 2 קורסים או יותר.
ג- כמה סטודנטים גרים בכל עיר? הדפיסו בתוצאה אם שם העיר וכמה סטודנטים לומדים בה 
ד- אותו הדבר כמו ג', רק תשתמשו ב Map 

2 - function constructor
--------------------
a- Create function constructor for point, getting x and y
   Create point1 with {x = 9, y = 10}
b- Create first3d point from point1 and add z = 11.
   Notice that point is the prototype of 3d point!
c- Create another3d point from point1 and add z = 12.
   Notice that point is the prototype of 3d point!
d- Change point1 x to be 20 and check all points values
e- Add to first3d point x with 0 and check it
f- Create myPoint by merging point1, first3d and another3d into it

3- this context
----------------
function addAge(howMuch, msg){
    this.age += howMuch;
    console.log(`${msg} ${this.age}`);
}


a- Create simple object with age
b- Use your object with addAge like so:
   1- with call
   2- with apply
   3- with bind

4- prototype
----------------
const person = {
    name: 'Shahar',
    age: 27,
    addAge: function(){
        age++;
        console.log(`Happy birthday ${name}!`);
    }
}

a- Fix the issue with person
b- Create from person a student object, so person is the prototype of student.
c- Invoke addAge on student and check the age
d- Add to student age property with value 80
e- Invoke again addAge on student and check the age
d- Create student2 from person (using assign)
e- Check now the prototype...
c- Create Person function constructor (To be like the structure of person object)
c- Use it to instantiate 2 persons

*/