// Exibe a sobreposição e adiciona a classe "overlay-active" ao corpo da página
document.getElementById("cadrastro-inicial").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add("overlay-active");
});

// Esconde a sobreposição e remove a classe "overlay-active" do corpo da página
document.getElementById("close-icon").addEventListener("click", function(){
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("overlay-active");
});
/*--------------------------------------------- */

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cpfCnpj = document.getElementById('cpfCnpj').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;

    // Aqui você pode adicionar a lógica para validar a senha e outros campos, se necessário

    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('CPF ou CNPJ:', cpfCnpj);
    console.log('Senha:', password);
    console.log('Função:', role);
})
/*---------------------------------------- */
var passwordInput = document.getElementById('password');
var orientacao = document.getElementById('orientacao');
//esconde e faz aparecer os requisitos da senha
passwordInput.addEventListener('focus', function() {
    orientacao.style.display = 'block';
});

passwordInput.addEventListener('blur', function() {
    orientacao.style.display = 'none';
});
/*------------------------------------------*/
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;

    // Verifica se a senha atende aos requisitos
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSpecialChar = /[!@#$%^&*]/.test(password);
    var hasEightChars = password.length >= 8;

    if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar || !hasEightChars) {
        alert('Sua senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, uma letra minúscula, um número e um caractere especial (por exemplo, !@#$%^&*).');
        event.preventDefault();  // Impede o envio do formulário
    }
});