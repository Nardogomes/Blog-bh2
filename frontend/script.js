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
      <li>
        <p>${post.nome}</p>
        <p>${post.mensagem}</p>
        <img src="${post.imgUrl}" alt="imagem do post"/>
      </li>
    `
  }

  document.querySelector('.cards').innerHTML = output;
}
  