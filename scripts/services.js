function register(){
    let testEntry = $("#testInput").val();//get and store the value
    $("#results").append(`<li>${testEntry}</li>`);
    console.log("register"); 
}

$("#purple").css("color","purple").css("color","white"); 
$("#orange").css("background-color","orange").css("color","white");

let paragraphWithBorder = $(".with-border");
paragraphWithBorder.css("border","1px dotted blue").css("background-color","white").css; 