vet_user = [
    "joao_video",
    "caue_adm",
    "gabi_js"
]

vet_senha = [
    "12349",
    "adm3",
    "987654"
]

function acessar() {
    user = document.getElementById('user').value;
    pass = document.getElementById('pass').value;

    //Executar um for para otimizar
    
    if ( (user == "joao_video" && pass == "12349") || (user == "gabi_js" && pass == "987654") ) {
        alert("Parabens_"+user);
    }
    else {
        alert("Usuário ou Senha incorreto! Tente novamente");
        document.getElementById('user').value = "";
        document.getElementById('pass').value = "";
    }

}