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




