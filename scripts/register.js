//console.log("register");
//create an array
let pets = []; //the empty array 

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

//object constructor
function Pet(name, age, gender, breed, service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}

function register(){
    //create a new pet
    let newPet = new Pet();
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    //push the new pet
    pets.push(newPet); 
    //display the name function
}

//display name function //loop;
function displayDoggies(){    
    let result = "";
    document.getElementById("results").innerHTML=""; 

    for(let i=0;i<pets.length;i++){
        result +=`
        <tr id="${i}">
            <td> ${pets[i].name} </td>
            <td> ${pets[i].age} </td>
            <td> ${pets[i].gender} </td>
            <td> ${pets[i].breed} </td>
            <td> ${pets[i].service} </td>
            <td> <button class="btn btn-danger btn-sm" onclick="deletePet(${i})" > Delete </button> </td>
        </tr> `
    }
    
    document.getElementById("results").innerHTML+=result;
}

function deletePet(petID){
    console.log("delete a pet ..." + petID); 
    // delete from HTML
    document.getElementById(petID).remove();
    //delete from the array
    pets.splice(petID,1);
    displayDoggies();
}


function init(){
    //create pet objects
    let pet1 = new Pet("Scooby",80,"Male","Dane","no service");
    let pet2 = new Pet("Scrappy",5,"Male","Beagle","service dog");
    let pet3 = new Pet("Hershey",19,"Female","Husky","no service");
    //push pets in the array
    pets.push(pet1,pet2,pet3);
    displayDoggies();
    //display names
    //displayNames("Scooby","Scrappy","Hershey");
}

window.onload=init; // wait to render the HTML



//Extra challenge: Create a function to calculate the average of the pet's ages.
//function averageAge = (number1,number2,number3,number4,number5){
    //console.log(number +, number / = averageage);
//}