const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
    { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
    { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
    { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
    ];

    //I'm adding a new student in the third place of the array
    students.splice(2, 0,{ id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'});
    
    for(let i = 0; i < students.length; i++){
        console.log(students[i].name);
        let hobby = students[i].hobby;
        switch (hobby) {
            case "gamer":
                console.log("Life Is a Game, Play to Win!");
                break;
            case "sportsman":
                console.log("Never give up!");
                break;
            case "photographer":
                console.log("A picture is worth a thousand words!");
                break;
        }
    }

    let younger = students[0];

    function youngest(stud){
        if(younger.age > stud.age) {
            younger = stud;        
        }
    }

        for(let i=0; i < students.length; i++){
            youngest(students[i]);
        }
  


    function longerSurname(){
        let i = 0;
        let long = "";
        while(i< students.length){
            
            if (students[i].surname.length > long.length){
                long = students[i].surname;
            }
            i++
        }
          return long; 
    }      
    console.log("Il più giovane è " + younger.name + "\n" + "Il cognome più lungo è " + longerSurname());

// console.table(students);