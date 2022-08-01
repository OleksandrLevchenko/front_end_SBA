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




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}