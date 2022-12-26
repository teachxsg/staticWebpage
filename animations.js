$(document).ready(function() {
    // Fade in landing page text on page load
    $(".jumbotron").hide().fadeIn(2000);
  
    // Add smooth scrolling to navbar links
    $("a.nav-link").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  });
  