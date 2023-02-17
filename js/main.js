
/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
 if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}
//Фильтр на мобільних приладах
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

//клік по лівій кнопці для скриття / показу фільтра і зміни іконки
sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};

//Показати ще 3 карточки
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

//клік по кнопці і показ трьох скритих карточок
btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function  (card) {
        card.classList.remove('card-link--hidden');
    });   
});

// Показати / скрити контент всередині віджетів
const widgets = document.querySelectorAll('.widget');
//знаходимо всі віджети на сторінці
widgets.forEach(function (widget) {
    //прослуховуємо клік всерединв віджетів
        widget.addEventListener('click', function (e) {
        //якщо клік по заголовку - тоді скриваємо / показуємо тіло віджетів
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden'); 
        }
    });
});

// location кнопка будь-яка
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

//вибір кнопки Будь-яка - і відключення інших чекбоксов
checkBoxAny.addEventListener('change', function(){
if (checkBoxAny.checked) {
    topLocationCheckboxes.forEach(function (item) {
        item.checked = false;
    });
}
});

//клік по іншим кнопкам в Location, Виключаємо кнопку "Будь-яка" при виборі інших параметрів
topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function() {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    });
});

/*Показати ще 3 додаткові опції з чекбоксами в фільтрах*/
const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
    e.preventDefault();
    //якщо блоки були скриті - значить показуємо
    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = "Скрити додаткові опції";
        showMoreOptions.dataset.options = 'visible';
    } 
    //якщо блоки були не скриті значить скриваємо
    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = "Показати ще";
        showMoreOptions.dataset.options = 'hidden';
    };
};