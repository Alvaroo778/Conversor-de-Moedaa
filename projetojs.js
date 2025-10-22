const buttonConvert = document.querySelector('.Button');
const moedaSelect = document.querySelector('.alterar-moeda');

function convertValues() {

    const inputdaMoeda = document.querySelector('.input-moeda').value;
    const valorEmReal = document.querySelector('.moeda-valor-novo')
    const valorEmRealConvertido = document.querySelector('.moeda-valor')

    console.log(inputdaMoeda);

    const DolarToday = 5.30
    const EuroToday = 6.90



    if (moedaSelect.value == "Dolar") {
        valorEmRealConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputdaMoeda / DolarToday);
    }

    if (moedaSelect.value == "Euro") {
        valorEmRealConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputdaMoeda / EuroToday);
    }

    valorEmReal.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputdaMoeda);


}

function mudabandeira() {
    const mudancaBandeira = document.getElementById("moeda-name");
    const imagemoeda = document.querySelector(".img-moeda");

    if (moedaSelect.value == "Dolar") {
        mudancaBandeira.innerHTML = "Dolar Americano"

    }

    if (moedaSelect.value == "Euro") {
        mudancaBandeira.innerHTML = "Euro"

    }

    convertValues()
}
moedaSelect.addEventListener("change", mudabandeira);

buttonConvert.addEventListener("click", convertValues);





