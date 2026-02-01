const menuBtn = document.getElementById('menuBtn');
        const sideMenu = document.getElementById('sideMenu');
        const closeMenu = document.getElementById('closeMenu');

        menuBtn.onclick = () => sideMenu.classList.remove('translate-x-full');
        closeMenu.onclick = () => sideMenu.classList.add('translate-x-full');