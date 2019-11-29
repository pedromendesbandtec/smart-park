function cadastrar() {
    mensagem.innerHTML = '';

    if (
        nome.value == '' ||
        email.value == '' ||
        cpf.value == '' ||
        telefone.value == '' ||
        endereco.value == '' ||
        numero.value == '' ||
        senha.value == '' ||
        confirmar_senha.value == ''
    ) {
        mensagem.innerHTML = 'Preencha todos os campos';
    } else {

        if (
            senha.value != confirmar_senha.value &&
            senha.value != '' &&
            confirmar_senha.value != ''
        ) {
            mensagem.innerHTML = 'As senhas não se correspondem'
            senha.value = '';
            confirmar_senha.value = '';
        }

        if (senha.value == confirmar_senha.value &&
            senha.value != '' &&
            confirmar_senha.value != '' &&
            senha.value.length < 6) {

            senha.value = '';
            confirmar_senha.value = '';
            mensagem.innerHTML = 'As senhas precisam ter no minimo 6 caracteres';
        }

        if (email.value.indexOf('@') <= 0) {

            mensagem.innerHTML = 'Digite um email válido';
            email.value = '';
        }

        if (senha.value != '' &&
            confirmar_senha.value != '' &&
            senha.value == confirmar_senha.value &&
            senha.value.length > 5 &&
            email.value.indexOf('@') >= 0 &&
            nome.value != '' &&
            endereco.value != '' &&
            telefone.value != '' &&
            numero.value != '') {
            alert('Você foi cadastrado com sucesso');
            window.location.href = "../login.smartpark/login_smart.html";
            // senha.value='';
            // confirmar_senha.value ='';
            // email.value='';
            // nome.value = '';
            // endereco.value= '';
            // telefone.value = '';
            // numero.value = '';
            // cpf.value='';




        }

    }
}