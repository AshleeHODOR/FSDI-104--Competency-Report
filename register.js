console.log("register");
//create an array
let pets=["hershey","shadow","nirvana sue"];


//display name function //loops
function displayNames(){
    for(let i=0,i<pets.length;i++){
        document.getElementById("results").innerHTML+=`<li>${pets[i].name}</li>`;//arrayName
    }
}

function init(){
    //create pet objects
    let pet1 = {
        name: "Hershey",
        age: 19,
        gender: "female", 
        breed: "husky"
    }
    let pet2 = {
        name: "Shadow",
        age: 7,
        gender: "female", 
        breed: "Domestic short hair"
    }
    let pet3 = {
        name: "Nirvana Sue",
        age: 2,
        gender: "male", 
        breed: "fluffy"
}
    //push the pets in the array
    pets.push(pet1,pet2,pet3);
    //display names
    displayNames();
}

window.onload=init; // wait to render the HTML