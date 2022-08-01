        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundImage = "url('images/KLday.jpeg')";

function myFunction()
{
    var checkBox = document.getElementById("daynighttoggle");
    if (checkBox.checked != true)
    {
        //document.body.style.backgroundColor = "white";
        document.body.style.backgroundImage = "url('images/KLday.jpeg')";
        document.documentElement.setAttribute('data-theme', 'light');    }
    else
    {
        //document.body.style.backgroundColor = "black";
        document.body.style.backgroundImage = "url('images/KLnight.jpeg')";
        document.documentElement.setAttribute('data-theme', 'dark');    }
}




var select = document.getElementById("selectTown");
var options = ["Ankara, Turkey", "Casablanca, Morocco", "Chennai, India", "Dubai, United Arab Emirates", "Isfahan, Iran", "Karachi, Pakistan", "London, United Kingdom", "Malacca City, Malaysia", "Mashhad, Iran"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var sel = document.createElement("option");
    sel.textContent = opt;
    sel.value = opt;
    select.appendChild(sel);
}