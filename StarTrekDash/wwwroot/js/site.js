// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener('touchstart', function () {}, false);

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.scroll-top a').fadeIn();
  } else {
    $('.scroll-top a').fadeOut();
  }
});

$(document).ready(function () {
  $('#scroll-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});

// STARDATE CODE
var now = new Date();
var then = new Date('July 15, 1987');
var stardate = now.getTime() - then.getTime();
stardate = stardate / (1000 * 60 * 60 * 24 * 0.036525);
stardate = Math.floor(stardate + 410000);
stardate = stardate / 10;
// document.write("Today is Stardate " + stardate);

const panel2 = document.querySelector('.panel-2');
panel2.append(stardate);
// panel2.appendChild(stardate);

