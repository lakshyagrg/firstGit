 alert("Welcome to Web learning website") //alert ko code 

document.getElementById("jstest").innerHTML = "Hello World";

var x = document.getElementsByClassName("new");
document,getElementById("new").innerHTML = 
    x[0].innerHTML + x[1].innerHTML + x[2].innerHTML;

document.getElementsByTagName("h1").innerHTML = "Hello World";

document.querySelector("#jstest").innerHTML = "Hello World";
document.querySelector(".new").innerHTML = "Hello World";

document.querySelectorAll(".new").innerHTML = "Hello World";