var myFunction = function(){
    // document.getElementById("header").innerText = "Individual Form" 

    document.getElementById("header").remove()
    document.getElementById("smallheader").remove()
    document.getElementById("text").style.height = "470px";
    var testing = "<iframe class='airtable-embed' src='https://airtable.com/embed/shr74LTphnHoblAOd?backgroundColor=yellow' frameborder='0' onmousewheel='' width='100%' height='100%' style='background: transparent; border: 1px solid #ccc;'></iframe>"
    document.getElementById("text").innerHTML = testing;
    // document.getElementById("buttons").style.visibility = "hidden";
}
var functionTwo = function(){
    // document.getElementById("header").innerText = "Company Form" ;
    document.getElementById("header").remove()
    document.getElementById("smallheader").remove()
    document.getElementById("text").style.height = "470px";
    var testing = "<iframe class='airtable-embed' src='https://airtable.com/embed/shr1j7jk2014WddiJ?backgroundColor=yellow' frameborder='0' onmousewheel='' width='100%' height='100%' style='background: transparent; border: 1px solid #ccc;'></iframe>"
    document.getElementById("text").innerHTML = testing;
    // document.getElementById("buttons").style.visibility = "hidden";
}