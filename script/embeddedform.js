var myFunction = function(){
    console.log("Hi")
    document.getElementById("header").innerText = "Individual Form" 
    document.getElementById("questionone").innerHTML = "<p>Insert Individual Form Here</p>";
    document.getElementById("buttons").style.visibility = "hidden";
}
var functionTwo = function(){
    document.getElementById("header").innerText = "Company Form" 
    document.getElementById("questionone").innerHTML = "<p>Insert Company Form Here</p>";
    document.getElementById("buttons").style.visibility = "hidden";
}