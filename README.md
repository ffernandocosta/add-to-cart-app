# Add to Cart
_[Read it in English](#English)_

Add to Cart app que desenvolvi durante o módulo 3 de JavaScript do [Scrimba](scrimba.com) usando Firebase. Aprendi bastante sobre como usar Firebase e Real-time Database para armazenar e e sincronizar dados em tempo real em vários clientes.

## Índice

- [Geral](#geral)
  - [Funções implementadas](#funções-implementadas)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [O que eu aprendi](#o-que-eu-aprendi)
- [Feito por](#feito-por)

## Geral

### Funções implementadas

Os usuários devem ser capazes de:

- Adicionar um ou mais itens na lista de compras
- Clickar para remover qualquer item da lista de compras
- Não perder acesso a lista mesmo fechando o app
- Ver mensagem de erro ao tentar adicionar um item sem nome
- Mudar entre darkmode e light mode, ver animações dos itens

### Screenshot

![Screenshot](/assets/screenshot.png)

### Links

- [Live version](https://add-to-cart-app-two.vercel.app)

## Meu processo

### Tecnologias Utilizadas

- JavaScript
- Firebase
- Semantic HTML5 markup
- CSS custom properties
- Grid
- Flexbox
- Mobile first workflow


### O que eu aprendi

- Aprendi como usar Firebase, como importar suas funções e usá-las no projeto
- Firebase: initializeApp, getDatabase, reference, push, onValue, snapshot, remove e IDs dos itens 
- Como transformar objetos em arrays usando Object.entries
- Renderizar elementos usando createElement
- Adicionar Favicon
- Web Application Manifest pra fazer esse projeto parecer um app nativo de celular
```js
const proudOfThisFunc = () => {
  
  const appendItemToShoppingListEl = (item) => { 
    let itemID = item[0]
    let itemValue = item[1];
    let newEl = document.createElement("li");

    newEl.textContent = itemValue;

    newEl.addEventListener('click', () => {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);
        remove(exactLocationOfItemInDB)
        inputErrorMessageEl.textContent = ""
    })

    shoppingListEl.append(newEl);
  }
}
```


## Feito por

<div>
  <a href="https://www.linkedin.com/in/ffernando-costa/?locale=en_US" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="My Linkedin profile"></a>
  <a href="https://twitter.com/ffernandodev" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="My twitter profile"</a>
</div>



<div id="English">

_English version_

</div>

# Add to Cart

Add to Cart project I built during module 3 of [Scrimba's](scrimba.com) JavaScript course using Firebase. Got to learn and practice hot to use Firebase as a Back-end Real-time Databse to store and sync data in real-time across multiple clients.
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add items to shopping list
- Click to remove any item on the list
- Don't lose access to the shopping list even after closing the app
- See error message if item name is empty
- Switch between light and dark more and see item hover animation

### Screenshot

![Screenshot](/assets/screenshot.png)

### Links

- [Live version](https://add-to-cart-app-two.vercel.app)

## My process

### Built with

- JavaScript
- Firebase
- Semantic HTML5 markup
- CSS custom properties
- Grid
- Flexbox

### What I learned

- How to use Firebase and import your functions to use in this project
- Firebase: initializeApp, getDatabase, reference, push, onValue, snapshot, remove and IDs of items
- How to turn objects into an array using Object.entries
- How to render elements from the Firebase database using createElement
- Add Favicon
- Web Application Manifest to transform this project to look like it's a native app on cellphones

```js
const proudOfThisFunc = () => {
  
  const appendItemToShoppingListEl = (item) => { 
    let itemID = item[0]
    let itemValue = item[1];
    let newEl = document.createElement("li");

    newEl.textContent = itemValue;

    newEl.addEventListener('click', () => {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);
        remove(exactLocationOfItemInDB)
        inputErrorMessageEl.textContent = ""
    })

    shoppingListEl.append(newEl);
  }
}
```


## Author

<div>
  <a href="https://www.linkedin.com/in/ffernando-costa/?locale=en_US" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="My Linkedin profile"></a>
  <a href="https://twitter.com/ffernandodev" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="My twitter profile"</a>
</div>
