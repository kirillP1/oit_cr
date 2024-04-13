const titlesElements = document.getElementById('content-tabs__titles')

titlesElements.addEventListener('click', e => {
	for (let item of titlesElements.children) {
		item.classList.remove('content-tabs__title_active')
	}
	e.target.classList.add('content-tabs__title_active')

	const itemname = e.target.dataset.itemname

	let tabsItems = document.getElementsByClassName('content-tabs__item')

	for (let item of tabsItems) {
		item.classList.remove('content-tabs__item_active')
		if (item.dataset.itemname === itemname) {
			item.classList.add('content-tabs__item_active')
		}
	}
})
