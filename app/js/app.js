// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)

document.addEventListener('DOMContentLoaded', () => {

	// слайдер

	const images = [...document.querySelectorAll('.banner__slider-img')]
	const left = document.querySelector('#left');
	const right = document.querySelector('#right');
	const number = document.querySelector('.banner__pagination-number');

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

	//   tab

	const content = [...document.querySelectorAll('.tabcontent')]; //контент
	const tabItems = [...document.querySelectorAll('.tabheader__item')]; // навигация табов
  	const navigation = document.querySelector('.tabheader__items');

  	function toogleTab(index) {
    content.forEach((tab) => {
      tab.classList.add('hide')
      tab.classList.remove('show')
    }) //скрываем все элементы
    content[index].classList.remove('hide') //убираем класс каторый скрывает блок у элемента под номером index
    content[index].classList.add('show')

    tabItems.forEach((item) => {
      item.classList.remove('tabheader__item_active')
    })

    tabItems[index].classList.add('tabheader__item_active')
  	}
  	toogleTab(0)

  	navigation.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('tabheader__item')) {
      toogleTab(Number(e.target.dataset.index))
    }
  })
})