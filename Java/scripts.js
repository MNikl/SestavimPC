// Checks the width of the windows and adjusts the tag for Contact accordingly
if (window.innerWidth <= 576) {
	/*delaj*/$ ( 'li.dropdown' ).replaceWith("<li class='nav-item dropdown mr-auto'><a class='nav-link dropdown-toggle' href='' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>  <span class='navbar-text'>Language</span></a><div class='dropdown-menu' aria-labelledby='navbarDropdown'><a class='dropdown-item active' href='index.html'><img class='language' src='Media/slo.png' alt='Slovenščina' title='Slovenščina'></a><a class='dropdown-item' href='indexEN.html''><img class='language' src='Media/ang.png' alt='English' title='English'></a></div></li>");
} else {
	/*delaj*/$ ( 'li.dropdown' ).replaceWith("<li class='nav-item dropdown ml-auto'><a class='nav-link dropdown-toggle' href='' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>  <span class='navbar-text'>Language</span></a><div class='dropdown-menu' aria-labelledby='navbarDropdown'><a class='dropdown-item active' href='index.html'><img class='language' src='Media/slo.png' alt='Slovenščina' title='Slovenščina'></a><a class='dropdown-item' href='indexEN.html''><img class='language' src='Media/ang.png' alt='English' title='English'></a></div></li>");
};
window.onresize = function () {
	if (window.innerWidth <= 576) {
	/*delaj*/$ ( 'li.dropdown' ).replaceWith("<li class='nav-item dropdown mr-auto'><a class='nav-link dropdown-toggle' href='' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>  <span class='navbar-text'>Language</span></a><div class='dropdown-menu' aria-labelledby='navbarDropdown'><a class='dropdown-item active' href='index.html'><img class='language' src='Media/slo.png' alt='Slovenščina' title='Slovenščina'></a><a class='dropdown-item' href='indexEN.html'><img class='language' src='Media/ang.png' alt='English' title='English'></a></div></li>");
	} else {
		/*delaj*/$ ( 'li.dropdown' ).replaceWith("<li class='nav-item dropdown ml-auto'><a class='nav-link dropdown-toggle' href='' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>  <span class='navbar-text'>Language</span></a><div class='dropdown-menu' aria-labelledby='navbarDropdown'><a class='dropdown-item active' href='index.html'><img class='language' src='Media/slo.png' alt='Slovenščina' title='Slovenščina'></a><a class='dropdown-item' href='indexEN.html''><img class='language' src='Media/ang.png' alt='English' title='English'></a></div></li>");
	};
};

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a.location-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number is speed
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
