const menuMobile = document.querySelector(".menu__mobile");


menuMobile.addEventListener('click', ()=>{
    const bodyAplication = document.querySelector('body');

    const menuMobileModal = document.createElement("div");
    menuMobileModal.classList.add('menu__mobile__modal');

    menuMobileModal.innerHTML = `
        <img src="assets/logo.svg" alt="logo" class="logo__image__mobile__menu">
            
        <ul class="ul__mobile__modal">
            <li><a class="hover:opacity-90" href="#">Home</a></li>
            <li><a class="hover:opacity-90 text-green-400" href="#">Produtos</a></li>
            <li><a class="hover:opacity-90" href="#">Eletronicos</a></li>
        </ul>
    `

    bodyAplication?.appendChild(menuMobileModal);

    menuMobileModal.addEventListener("click", ()=>{
        bodyAplication.removeChild(menuMobileModal)
    })
})