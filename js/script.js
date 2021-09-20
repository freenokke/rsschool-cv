const iconMenu = document.querySelector('.menu__icon');
const menuLink = document.querySelectorAll('.menu-list__item');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}



menuLink.forEach((item) => {
    item.addEventListener("click", () => {
        menuBody.classList.remove('_active');
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
    } )
})