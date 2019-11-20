/* ********** MODALS ********** */

// https://www.w3schools.com/howto/howto_css_modals.asp

for(let i = 1; i <= 9; i++){
  // Get the modal
  var modal = document.getElementById("post" + i + "Modal");
  var modals = document.querySelectorAll(".modal");

  // Get the button that opens the modal
  var btn = document.getElementById("post" + i);

  // Get the <span> element that closes the modal
  var spans = document.querySelectorAll(".close");

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal

  spans.forEach(span => {
    span.onclick = function() {
      modals.forEach(modalC => {
        modalC.style.display = "none";
      });
    }
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

/* ********** SLICK SLIDER ********** */

$('.slick-bolesni').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500
});