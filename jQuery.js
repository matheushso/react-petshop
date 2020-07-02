//No site "https://www.hurb.com/br", pressionar f12 e na aba "Console" colar o código e pressionar "Enter".

function nomeDoPacote (contador) {
    return $('.product-card__title')[contador].innerText;
}

function valorDoPacote (contador) {
    return $('.promotion-price')[contador].innerText;
}

function valorDoDesconto (contador) {
    return $('.promotion__tag-discount')[contador].innerText;
}

var quantidadeDePacotes = $('.product-card__link').length; //EM VEZ DE USAR O CONTADOR DA PARA USAR O EACH
var contador;

for (contador = 0; contador < quantidadeDePacotes; contador ++){
    let nome = nomeDoPacote(contador);
    let desconto = valorDoDesconto(contador);
    let valor = valorDoPacote(contador);

    console.log("--------------------------------------------------------------------");
    console.log("Nome do pacote: " + nome);
    console.log("Desconto do pacote: " + desconto);
    console.log("Valor do pacote: R$ " + valor);

    //IMPLEMENTAR COM JSON
}

