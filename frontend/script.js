async function getData() {
  try {
    const response = await fetch('http://localhost:3000/');
    const data = await response.json();

    {
      data.length != 0 ? show() : showEmpty()
    }

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
    `;

    let novoCard = document.createElement('div');
    novoCard.classList.add('card');
    novoCard.innerHTML = output;
  
    document.querySelector('.cards').appendChild(novoCard);

    output = '';
  }
}

function showEmpty() {
  let output = `
    <h2>Nenhum post encontrado</h2>
    <p>Caso queira adicionar um novo post clique no botão "Adicionar um post"</p>
  `;

  let novaDiv = document.createElement('div');
  novaDiv.classList.add('card-empty');
  novaDiv.innerHTML = output;

  document.querySelector('.cards').appendChild(novaDiv);
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

const modalDelete = {
  open(){
      document.querySelector('.modalDelete-overlay')
      .classList
      .add('active')
  },
  close(){
      document.querySelector('.modalDelete-overlay')
      .classList
      .remove('active')
  }
}
