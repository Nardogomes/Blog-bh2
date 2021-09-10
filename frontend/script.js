async function getData() {
  try {
    const response = await fetch('http://localhost:3000/');
    const data = await response.json();

    show(data);
  } catch (error) {
    console.error(error);
  }
}

getData();

function show(posts) {
  let output = '';

  for(let post of posts) {
    output += `
      <img src="${post.imgUrl}" alt="imagem do post"/>
      <span>Autor: ${post.nome}</span>
      <hr>
      <h2>${post.titulo}</h2>
      <p>${post.mensagem}</p>
    `
    let novoCard = document.createElement('div');
    let novoButton = document.createElement('button');
  
    novoCard.classList.add('card');
    novoCard.innerHTML = output;
  
    document.querySelector('.cards').appendChild(novoCard);

    output = '';
  }
}

const Modal = {
  open(){
      document.querySelector('.modal-overlay')
      .classList
      .add('active')
  },
  close(){
      document.querySelector('.modal-overlay')
      .classList
      .remove('active')
  }
}
