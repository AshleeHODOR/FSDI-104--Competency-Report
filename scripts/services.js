function register(){
    let testEntry = $("#testInput").val();//get and store the value
    $("#results").append(`<li>${testEntry}</li>`);
    console.log("register"); 
}

$("#purple").css("color","purple"); 
$("#orange").css("background-color","orange").css("color","white");

let paragraphWithBorder = $(".with-border");
paragraphWithBorder.css("border","1px dotted blue"); 
