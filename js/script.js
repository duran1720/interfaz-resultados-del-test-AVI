const toggleBtn = document.getElementById('menuToggle');
    const menu = document.getElementById('menuOpciones');

    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('activo');
    });

    window.addEventListener('click', function (e) {
      if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('activo');
      }
    });