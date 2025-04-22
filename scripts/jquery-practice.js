console.log("Welcome to jQuery");
//JS vs jQuery
//first line - vanilla JS --> 7, 12, 17
//Second line - jQuery --> 8, 13, 18

//by ID
let htmlElement = document.getElementById("results");
htmlElement=$("#results");
console.log(htmlElement);

//by Class
let htmlElement2 = document.getElementsByClassName("tomato-bg");
htmlElement2=$(".tomato-bg"); 
console.log(htmlElement2);

//by TagName
let htmlElement3=document.getElementsByTagName("p");
htmlElement3=$("p");
console.log(htmlElement3); 


// ID Selector
$("#red").css("background-color","red").css("color","white"); 
$("#blue").css("background-color","blue").css("color","white");

//Class Selector
let paragraphWithBorder = $(".with-border");
paragraphWithBorder.css("border","3px solid black"); 

paragraphWithBorder.on('click',function(){
    console.log("click");
    $(".with-border").css("background-color","gray");
});

//tag selector
$("p").css("cursor","pointer");
//$("p").hide();

//simple and common function
function register(){
    let testEntry = $("#testInput").val();//get and store the value
    $("#results").append(`<li>${testEntry}</li>`);
    console.log("register"); 
}

$("#btnRegister").on("click",register);