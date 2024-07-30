function validatePassword() {
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!senha.match(senhaRegex)) {
        window.alert("A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
        return false;
    }

    if (senha !== confirmarSenha) {
        window.alert("As senhas não coincidem.");
        return false;
    }

    return true;
}

function validateAge() {
    const nascimento = document.getElementById("nascimento").value;
    const hoje = new Date();
    const dataNascimento = new Date(nascimento);
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    if (idade < 18) {
        window.alert("Você deve ter pelo menos 18 anos para enviar o formulário.");
        return false;
    }

    return true;
}

function updateCidades() {
    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade");

    cidade.disabled = false;
    cidade.innerHTML = '<option value="">Selecione a cidade</option>';

    const cidades = {
        sp: ["Sorocaba", "Butucatu", "Santos"],
        rj: ["Rio de Janeiro", "Niterói", "Petrópolis"],
        mg: ["Belo Horizonte", "Nova Lima", "Ouro Preto"],
        es: ["Vitória", "Vila Velha", "Guarapari"]
    };

    cidades[estado].forEach(function(cidadeNome) {
        const option = document.createElement("option");
        option.value = cidadeNome.toLowerCase().replace(/\s+/g, '-');
        option.textContent = cidadeNome;
        cidade.appendChild(option);
    });
}

function validateForm() {
    return validatePassword() && validateAge() && window.alert("Feito ze");
}
