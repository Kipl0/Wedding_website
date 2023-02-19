let popup = document.getElementById("popup")
popup.style.display="none"
// let selected = document.getElementById("selected_image








let slideIndex = 1; //fortæller den starter på billede 1
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

    if (n > slides.length) { //hvis slide index er større end længden af "slides" sæt slide index til 1
        slideIndex = 1
    } 
   
    if (n < 1) { //hvis slide index er mindre en 1, sæt slideindex til længden af slides?
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}




