isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
//--------------------------------
const header = document.querySelector("header");
const body = document.querySelector("body");
const menuBody = document.querySelector(".menu__body");
const iconMenu = document.querySelector(".menu__icon");
const button = document.querySelector(".fullscrin__button");
const str = document.querySelector(".fullscrin__str");
const logo = document.querySelector(".header__logo");
//---------------------------------
//Пк чи тач скрін?
if (isMobile.any()) {
	document.body.classList.add("_touch");
} else {
	document.body.classList.add("_pc");
}
//---------------------------------
//Прокрутка до елемента
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - header.offsetHeight;

			if(iconMenu.classList.contains("_active")) {
				body.classList.remove("_lock");
				iconMenu.classList.remove("_active");
				menuBody.classList.remove("_active");
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

//Шапка
window.addEventListener("scroll", function (event) {
	if(window.pageYOffset > 30) {
		header.classList.add("_scrolled");
	} else {
		header.classList.remove("_scrolled");
	}
});
//Меню бургер
if(iconMenu) {
	iconMenu.addEventListener("click",function (e) {
		body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
}
// -------------------------------------------------------
button.addEventListener("click", function (e) {
	window.scroll({
		left: 0,
		top: contact.offsetTop - 70,
		behavior: "smooth"
	})
	e.preventDefault();
});
str.addEventListener("click", function (e) {
	window.scroll({
		left: 0,
		top: about.offsetTop - 70,
		behavior: "smooth"
	})
	e.preventDefault();
});
logo.addEventListener("click", function (e) {
	window.scroll({
		left: 0,
		top: header.offsetTop,
		behavior: "smooth"
	})
	e.preventDefault();
});
// -------------------------------------------------------

const contact = document.querySelector(".need");
const about = document.querySelector(".about");

// -------------------------------------------------------
window.addEventListener("scroll", () => {
	let scrollDistace = window.scrollY;
	document.querySelectorAll("#section").forEach((el, i)  => {
		if(el.offsetTop - header.clientHeight <= scrollDistace) {
			document.querySelectorAll(".menu__link").forEach((el) => {
				if(el.classList.contains("active")) {
					el.classList.remove("active");
				}
			});
			document.querySelectorAll(".menu__body li")[i].querySelector("a").classList.add('active');
		}
	});
});





