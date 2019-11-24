/* ********** MODALS ********** */

// https://www.w3schools.com/howto/howto_css_modals.asp

// for(let i = 1; i <= 9; i++){
//   // Get the modal
//   var modal = document.getElementById("post" + i + "Modal");
//   var modals = document.querySelectorAll(".modal");

//   // Get the button that opens the modal
//   var btn = document.getElementById("post" + i);

//   // Get the <span> element that closes the modal
//   var spans = document.querySelectorAll(".close");

//   // When the user clicks the button, open the modal 
//   btn.onclick = function() {
//     modal.style.display = "block";
//   }

//   // When the user clicks on <span> (x), close the modal

//   spans.forEach(span => {
//     span.onclick = function() {
//       modals.forEach(modalC => {
//         modalC.style.display = "none";
//       });
//     }
//   });

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
// }

/* ********** SLICK SLIDER ********** */

$('.slick-bolesni').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500
});


/* ********** MODAL 1 ********** */

  // Get the modal
  var modal1 = document.getElementById("post1Modal");

  // Get the button that opens the modal
  var btn = document.getElementById("post1");

  // Get the <span> element that closes the modal
  var spans = document.querySelectorAll(".close");

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal1.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal

  spans.forEach(span => {
    span.onclick = function() {
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
      modal4.style.display = "none";
      modal5.style.display = "none";
      modal6.style.display = "none";
      modal7.style.display = "none";
      modal8.style.display = "none";
      modal9.style.display = "none";
    }
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6 || event.target == modal7 || event.target == modal8 || event.target == modal9) {
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
      modal4.style.display = "none";
      modal5.style.display = "none";
      modal6.style.display = "none";
      modal7.style.display = "none";
      modal8.style.display = "none";
      modal9.style.display = "none";
    }
  }

  /* ********** MODAL 2 ********** */

  // Get the modal
  var modal2 = document.getElementById("post2Modal");

  // Get the button that opens the modal
  var btn = document.getElementById("post2");

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal2.style.display = "block";
  }

  /* ********** MODAL 3 ********** */

  // Get the modal
  var modal3 = document.getElementById("post3Modal");

  // Get the button that opens the modal
  var btn = document.getElementById("post3");

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal3.style.display = "block";
  }

  /* ********** MODAL 4 ********** */

    // Get the modal
    var modal4 = document.getElementById("post4Modal");

    // Get the button that opens the modal
    var btn = document.getElementById("post4");
  
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal4.style.display = "block";
    }

  /* ********** MODAL 5 ********** */

    // Get the modal
    var modal5 = document.getElementById("post5Modal");

    // Get the button that opens the modal
    var btn = document.getElementById("post5");
  
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal5.style.display = "block";
    }

  /* ********** MODAL 6 ********** */

    // Get the modal
    var modal6 = document.getElementById("post6Modal");

    // Get the button that opens the modal
    var btn = document.getElementById("post6");
  
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal6.style.display = "block";
    }

  /* ********** MODAL 7 ********** */

    // Get the modal
    var modal7 = document.getElementById("post7Modal");

    // Get the button that opens the modal
    var btn = document.getElementById("post7");
  
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal7.style.display = "block";
    }

  /* ********** MODAL 8 ********** */

    // Get the modal
    var modal8 = document.getElementById("post8Modal");

    // Get the button that opens the modal
    var btn = document.getElementById("post8");
  
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal8.style.display = "block";
    }

  /* ********** MODAL 9 ********** */

    // Get the modal
    var modal9 = document.getElementById("post9Modal");

    // Get the button that opens the modal
    var btn = document.getElementById("post9");
  
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal9.style.display = "block";
    }
