function copiarTexto() {
    var texto1_Copiado = "Psivalentexavier@gmail.com";

    // Cria um elemento de input para armazenar o texto
    var inputElement = document.createElement("input");
    inputElement.value = texto1_Copiado;
    document.body.appendChild(inputElement);

    // Seleciona e copia o texto no campo de input
    inputElement.select();
    document.execCommand("copy");

    // Remove o elemento de input da DOM
    document.body.removeChild(inputElement);

    window.alert("O e-mail copiado para a área de transferência");
}
