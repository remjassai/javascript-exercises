const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
    { id: 2, name: "Mario", surname: "Bianchi", age: 26, hobby: 'sportsman'},
    { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
    { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
    ];

    students.splice(2, 0,{ id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'});

    
    for(i = 0; i < students.length; i++){
        let hobby = students[i].hobby;
        switch (hobby) {
            case "gamer":
                console.log(students[i].name);
                console.log("Life Is a Game, Play to Win!");
                break;
            case "sportsman":
                console.log(students[i].name);
                console.log("Never give up!");
                break;
            case "photographer":
                console.log(students[i].name);
                console.log("A picture is worth a thousand words!");
                break;
        }
    }



    function youngest(){
        
        for(let i=0; i < students.length; i++){
            let age = students[0].age;
            let name = students[0].age;

            if(students[i].age < age){
                name = students[i].name;
                return name;
            }

        }
  
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


    
        
    console.log("Il più giovane è " + youngest() + "\n" + "Il cognome più lungo è " + longerSurname());

// console.table(students);