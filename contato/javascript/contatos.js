    //Validação do formulário
    document.getElementById("contactForm").addEventListener('submit', function(event){
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var mensagem = document.querySelector('[name=mensagem]').value;

        if (nome === "" || email === "" || mensagem === ""){
            alert('Preencha todos os campos!');
            event.preventDefault();
        }
        else {
            enviarEmail(nome, email, mensagem);
        }
});

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada');
});  //informa na tela que msg enviada