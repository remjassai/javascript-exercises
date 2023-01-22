const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};

console.log(student);

student.personalData = {};

console.log(student);

student.personalData.name = "Rem";
student.personalData.surname = "Jassai";
student.personalData.age = 23;

console.log(student.personalData);
