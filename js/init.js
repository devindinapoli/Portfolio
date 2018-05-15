$(document).ready(function() {
  $(".myWork")
    .delay(500)
    .animate({ opacity: 1 }, 700);
  $(".hello")
    .delay(500)
    .animate({ opacity: 1 }, 700);
  $(".parallax")
    .delay(200)
    .animate({ opacity: 1 }, 700);

  $(".interested")
    .delay(200)
    .animate({ opacity: 1 }, 700);

  $(".fa-eye")
    .delay(500)
    .animate({ opacity: 1 }, 700);

  $(".fa-cogs")
    .delay(550)
    .animate({ opacity: 1 }, 700);

  $(".material-icons")
    .delay(600)
    .animate({ opacity: 1 }, 700);

  $(".skills")
    .delay(500)
    .animate({ opacity: 1 }, 700);

  $(".skills2")
    .delay(550)
    .animate({ opacity: 1 }, 700);

  $(".skills3")
    .delay(600)
    .animate({ opacity: 1 }, 700);
});
(function($) {
  $(function() {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
  $(".carousel").carousel();
});

var aText = new Array(
  "Hi, I'm Devin DiNapoli", 
  "Creativity is My Passion"
  );
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br /> <br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();