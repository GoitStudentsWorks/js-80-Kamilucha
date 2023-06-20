
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
  
    const toggleMenu = () => {
      mobileMenu.classList.toggle('is-open');
      openMenuBtn.classList.toggle(`.active_btn`)
//  
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  



