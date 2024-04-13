const footerUpper = document.getElementById('footer-upper')

function footerUpperScroll() {
	var scrollPosition = window.scrollY
	if (scrollPosition > 80) {
		footerUpper.classList.add('footer-upper_active')
	} else {
		footerUpper.classList.remove('footer-upper_active')
	}
}

setInterval(footerUpperScroll, 500)
