const topMenu = document.getElementById('top-menu')

// Функция, которую вы хотите выполнить каждую секунду при прокрутке
function trackScroll() {
	var scrollPosition = window.scrollY
	if (scrollPosition > 80) {
		topMenu.classList.add('top-menu_active')
	} else {
		topMenu.classList.remove('top-menu_active')
	}
}

// Устанавливаем интервал выполнения функции в 1 секунду
setInterval(trackScroll, 500)
