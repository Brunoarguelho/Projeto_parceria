
document.getElementById('abrir-menu').addEventListener('click', function() {
    document.querySelector('.menu-lateral').style.transform = 'translateX(0)';
    document.querySelector('.container').style.filter = 'blur(10px)';
     // Desabilita a rolagem do mouse
     //abre menu lateral
    document.body.style.overflow = 'hidden';
     // Esconde o botão 'abrir-menu'
    document.getElementById('abrir-menu').style.display = 'none';
});

document.getElementById('fechar-menu').addEventListener('click', function() {
    document.querySelector('.menu-lateral').style.transform = 'translateX(-100%)';
    document.querySelector('.container').style.filter = 'none';
   // Habilita a rolagem do mouse
   //abre menu lateral
    document.body.style.overflow = 'auto';
    // Mostra o botão 'abrir-menu'
    document.getElementById('abrir-menu').style.display = 'block';
});

window.addEventListener('click', function(event) {
    if (event.target.closest('.menu-lateral') === null && event.target.id !== 'abrir-menu') {
        document.querySelector('.menu-lateral').style.transform = 'translateX(-100%)';
        document.querySelector('.container').style.filter = 'none';
        document.body.style.overflow = 'auto';
        // Mostra o botão 'abrir-menu'
        // Habilita a rolagem do mouse
        //abre menu lateral
        document.getElementById('abrir-menu').style.display = 'block';
    }
});

/*--------------------------------- */
window.onscroll = function() {
    var menuLateral = document.querySelector('.menu-lateral');
    var imagemTopo = document.querySelector('.imagem-topo');
    if (window.scrollY > 250) { // Ajuste este valor para quando você quer que o menu lateral se mova para o topo
        menuLateral.style.top = "0";
        imagemTopo.classList.remove('ocultar'); // Mostra a imagem
    } else {
        menuLateral.style.top = "33.6%";
        imagemTopo.classList.add('ocultar'); // Esconde a imagem
    }
};