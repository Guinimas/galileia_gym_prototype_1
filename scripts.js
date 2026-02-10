document.addEventListener('DOMContentLoaded', function () {
	const menuBtn = document.getElementById('MenuBtn');
	const sideMenu = document.getElementById('sideMenu');
	const overlay = document.getElementById('overlay');
	const closeBtn = document.getElementById('closeMenu');

	function openMenu() {
		sideMenu.classList.add('open');
		overlay.classList.add('show');
		overlay.setAttribute('aria-hidden', 'false');
	}

	function closeMenu() {
		sideMenu.classList.remove('open');
		overlay.classList.remove('show');
		overlay.setAttribute('aria-hidden', 'true');
	}

	if (menuBtn) menuBtn.addEventListener('click', openMenu);
	if (closeBtn) closeBtn.addEventListener('click', closeMenu);
	if (overlay) overlay.addEventListener('click', closeMenu);

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') closeMenu();
	});
});

