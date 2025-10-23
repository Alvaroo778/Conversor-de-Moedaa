const buttonConvert = document.querySelector('.Button');
const moedaSelect = document.querySelector('.alterar-moeda');

function convertValues() {

    const inputdaMoeda = document.querySelector('.input-moeda').value;
    const valorEmReal = document.querySelector('.moeda-valor-novo')
    const valorEmRealConvertido = document.querySelector('.moeda-valor')
   

    console.log(inputdaMoeda);

    const DolarToday = 5.30
    const EuroToday = 6.90
    const GuaraniToday = 0.00076
   


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

    if (moedaSelect.value == "Guarani") {
        valorEmRealConvertido.innerHTML = new Intl.NumberFormat('es-PY', {
            style: 'currency',
            currency: 'PYG',
        }).format(inputdaMoeda / GuaraniToday);
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

    if (moedaSelect.value == "Guarani") {
        mudancaBandeira.innerHTML = "Guarani Paraguaio"
    }

    convertValues()
}
moedaSelect.addEventListener("change", mudabandeira);

buttonConvert.addEventListener("click", convertValues);





