document.getElementById('abrir').addEventListener('click', function() {
    document.querySelector('.menu-lateral').style.transform = 'translateX(0)';
    document.querySelector('.todo-conteudo').style.filter = 'blur(10px)';
});
 //abrir e fechar menu lateral e add desfoco
document.getElementById('fechar').addEventListener('click', function() {
    document.querySelector('.menu-lateral').style.transform = 'translateX(100%)';
    document.querySelector('.todo-conteudo').style.filter = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target.closest('.menu-lateral') === null && event.target.id !== 'abrir') {
        document.querySelector('.menu-lateral').style.transform = 'translateX(100%)';
        document.querySelector('.todo-conteudo').style.filter = 'none';
    }
});
