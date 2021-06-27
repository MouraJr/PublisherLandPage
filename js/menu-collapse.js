/*
*
* Author: Geraldo Moura
* URL: www.mourawebdev.com
* Toggle Menu on medium and small screens
*
*/


function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector('.main-menu').classList.add('d-none');
        document.querySelector('.btn-menu').classList.remove('d-md-none');

        document.querySelector('.btn-menu').addEventListener('click', function () {
            document.querySelector('.main-menu').classList.toggle('d-none');
        });

        document.querySelector('.main-menu').addEventListener('click', function () {
            document.querySelector('.main-menu').classList.toggle('d-none');
        });

    } else {
        document.querySelector('.main-menu').classList.remove('d-none');
    }
}

var x = window.matchMedia("(max-width: 768px)");
myFunction(x); // Call listener function at run time
x.addEventListener('load', myFunction); // Attach listener function on state changes
