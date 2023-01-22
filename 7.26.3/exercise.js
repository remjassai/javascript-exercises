students =[];


function Student(id, name, surname, age){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.age=age;
}

const marta = new Student(true, "Marta", "Moro", 23);

const norton = new Student(false, "Norton", "Virsu", 8);

const rem =new Student(true, "Rem", "Jassai", 32);

students.push(marta, norton, rem);

for(let i = 0; i <students.length; i++){
    console.log(students[i]);
}
