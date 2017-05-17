$('.faq-button-box').on('click', function(event) {
  $(this).addClass('active');
  var faqSection = $(this).attr('id');
  console.log(faqSection);
  $('.faq-button-box').not(this).removeClass('active');
  $('.' + faqSection).addClass('active')
  $('.faq-box').not($('.' + faqSection)).removeClass('active');
});
$( ".closed-slide" ).hover(
	function() {
		$(this).hide();
		$(this).parent().find('.open-slide').show();
	}, function() {
		$(this).show();
		$(this).parent().find('.open-slide').hide();
	}
);
$( ".open-slide" ).hover(
	function() {
		$(this).show();
		$(this).parent().find('.closed-slide').hide();
	}, function() {
		$(this).hide();
		$(this).parent().find('.closed-slide').show();
	}
);
  var navbar = document.getElementById("neopraxisNavbar");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 120) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
};
window.addEventListener("scroll", myScrollFunc);
document.querySelector('#neopraxis-hamburger-menu').addEventListener('click', function () {
   this.classList.toggle('is-active');
   document.querySelector('#neopraxis-main-navbar').classList.toggle('neopraxis-navbar-style');
 });

document.querySelector('#body').addEventListener('click', function (e) {
  if (document.querySelector('#neopraxis-hamburger-menu').classList.contains('is-active') && e.target.tagName !== 'SPAN' && e.target.tagName !== 'a') {
    document.querySelector('#neopraxis-hamburger-menu').classList.remove('is-active');
    document.querySelector('#neopraxis-main-navbar').classList.remove('neopraxis-navbar-style');
  }
});
document.querySelector("#body").addEventListener( "touchstart",function (e) {
  if (document.querySelector('#neopraxis-hamburger-menu').classList.contains('is-active') && e.target.tagName !== 'SPAN' && e.target.tagName !== 'a') {
    document.querySelector('#neopraxis-hamburger-menu').classList.remove('is-active');
    document.querySelector('#neopraxis-main-navbar').classList.remove('neopraxis-navbar-style');
  }
});
var trialModal = document.getElementById('freeTrialModal');

// Get the button that opens the modal
var modalBtn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var body = document.getElementById('body');
// When the user clicks on the button, open the modal 
modalBtn.onclick = function() {
  trialModal.classList.add('modal-open');
  console.log(body);
  body.classList.add('modal-open');
}
modalBtn.onclick = function() {
  trialModal.classList.add('modal-open');
  body.classList.add('modal-open');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  trialModal.classList.remove('modal-open');
  body.classList.remove('modal-open');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == trialModal) {
    trialModal.classList.remove('modal-open');
    body.classList.remove('modal-open');
  }
}