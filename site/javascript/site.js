document.getElementById('abrir-menu').addEventListener('click', function() {
    document.querySelector('.menu-lateral').style.transform = 'translateX(0)';
    document.querySelector('.container').style.filter = 'blur(10px)';
    // Desabilita a rolagem do mouse
     //abre menu lateral
    document.body.style.overflow = 'hidden';
});

document.getElementById('fechar-menu').addEventListener('click', function() {
    document.querySelector('.menu-lateral').style.transform = 'translateX(-100%)';
    document.querySelector('.container').style.filter = 'none';
    // Habilita a rolagem do mouse
    //abre menu lateral
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(event) {
    if (event.target.closest('.menu-lateral') === null && event.target.id !== 'abrir-menu') {
        document.querySelector('.menu-lateral').style.transform = 'translateX(-100%)';
        document.querySelector('.container').style.filter = 'none';
        // Habilita a rolagem do mouse
         //abre menu lateral
        document.body.style.overflow = 'auto';
    }
});

/*--------------------------------- */

