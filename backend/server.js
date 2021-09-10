const cors = require('cors');
const express = require('express');
const server = express();

server.use(cors());

const postagens = [
  {
    id: 1,
    nome: 'Nardo',
    titulo: 'Título do post',
    mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus sodales lacus eu fringilla. Aenean ut neque et urna consectetur vehicula in et lacus. Donec lacinia, ligula ac gravida porttitor, lorem nisi vulputate quam, bibendum tincidunt leo mauris sed nibh. Nulla non lectus dapibus, semper erat eu, blandit nulla. Quisque sed nisi eget metus hendrerit semper eget sed ligula. In vulputate hendrerit velit. Ut in justo eu turpis fermentum pulvinar. Nam erat mauris, luctus nec lorem ac, vestibulum pharetra leo. Fusce dui orci, viverra et quam eget, feugiat pretium sapien. Suspendisse vulputate lectus quis enim dictum, quis posuere urna egestas. Nunc eget metus elementum, bibendum quam vel, dapibus risus.',
    imgUrl: 'https://www.madeinweb.com.br/wp-content/uploads/2019/11/impacto-tecnologia-em-nossas-vidas.jpg',
    active: true
  },
  {
    id: 2,
    nome: 'Kell',
    titulo: 'Título do post',
    mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus sodales lacus eu fringilla. Aenean ut neque et urna consectetur vehicula in et lacus. Donec lacinia, ligula ac gravida porttitor, lorem nisi vulputate quam, bibendum tincidunt leo mauris sed nibh. Nulla non lectus dapibus, semper erat eu, blandit nulla. Quisque sed nisi eget metus hendrerit semper eget sed ligula. In vulputate hendrerit velit. Ut in justo eu turpis fermentum pulvinar. Nam erat mauris, luctus nec lorem ac, vestibulum pharetra leo. Fusce dui orci, viverra et quam eget, feugiat pretium sapien. Suspendisse vulputate lectus quis enim dictum, quis posuere urna egestas. Nunc eget metus elementum, bibendum quam vel, dapibus risus.',
    imgUrl: 'https://www.madeinweb.com.br/wp-content/uploads/2019/11/impacto-tecnologia-em-nossas-vidas.jpg',
    active: true
  }
];

server.get('/', (req, res) => {
  return res.json(postagens);
});

server.listen(3000, () => console.log('Server runnig...'));
