

/*getElementById-> Trás um elemento pelo ID
  getElementByClassName-> Trás TODOS os elementos com essa classe
  getElementeByTagName-> Trás TODOS os elementos com essa TAG
  getElementByName-> Trás TODOS os elementos com esse NAME
  
  querySelector-> Trás UM elemento, o PRIMEIRO que encontrar
  querySelectorAll->Trás TODOS os elementos que encontrar
  Para buscar o elemento no html, se usa document.*/
  
 /* Exemplos:
  const input = document.getElementById("main-input");
    console.log(input);

  const paragrafos = document.getElementsByClassName("paragrafojs");
    console.log(paragrafos);

  const paragrafosTag = document.getElementsByTagName("p");
    console.log(paragrafosTag);

  const inputName = document.getElementsByName("input");
    console.log(inputName);

  const h1query = document.querySelector("h1");
    console.log(h1query);

  const pAll = document.querySelectorAll(".paragrafojs");
    console.log(pAll);
    
   console.log(element.textcontent); -> Pega o texto que está dentro do elemento (Só Html)
    console.log(element.innerText); -> Pega o texto que está dentro do elemento (Html e Css)
    console.log(element.innerHTML); -> Pega o texto que está dentro do elemento (Html, Css e Js)

   element.textContent = "Texto alterado pelo JS"; -> Altera o texto que está dentro do elemento (Só Html)
   element.innerText = "Texto alterado pelo JS"; -> Altera o texto que está dentro do elemento (Html e Css)
   element.innerHTML = "<i>Texto alterado pelo JS</i>"; -> Altera o texto que está dentro do elemento (Html, Css e Js)
    */

