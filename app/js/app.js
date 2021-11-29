// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)

document.addEventListener('DOMContentLoaded', () => {
	
	// slider

	const images = [...document.querySelectorAll('.banner__slider')];
	const left = document.querySelector('#left');
	const right = document.querySelector('#right');
	const number = document.querySelector('#number');

	let el = 0;

	function firstRender(params) {
		images.forEach((el, i) => {
			if (i === 0) {
				el.classList.add('active')
			}
		})
		number.textContent = el + 1
	}
	firstRender();

	function changeSlide() {

		images.forEach((el) => {
			el.classList.remove('active')
		})
		images[el].classList.add('active')
		number.textContent = el + 1
	}

	left.addEventListener('click', (event) => {
		if (!event.isTrusted) return; //for webpack
		console.log('left', el);
		if (el === 0) {
			el = images.length - 1
		} else {
			el = el - 1
		}
		changeSlide()
	})

	right.addEventListener('click', (event) => {
		if (!event.isTrusted) return; //for webpack
		console.log('right', el);
		if (el === images.length - 1) el = 0
		else el = el + 1
		changeSlide()
	})

	// tab

	(function(){
		('.tab-nav li:first').addClass('select');
		('.tab-panels>div').hide().filter(':first').show();
		('.tab-nav a').mouseover(function(){ 
		  ('.tab-panels>div').hide().filter(this.hash).show();
		  ('.tab-nav li').removeClass('select'); 
		  (this).parent().addClass('select');
		  return (false);
		})
	  });
})