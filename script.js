
const imagens = document.querySelectorAll('.carrosel-conteiner img');
const textos = document.querySelectorAll('.texto-sobre-imagem');
let imagemAtiva = 0; 

function atualizarImagem() {
  imagens.forEach((img, index) => {
    if (index === imagemAtiva) {
      img.classList.add('active'); 
      textos[index].style.display = 'block'; 
    } else {
      img.classList.remove('active');
      textos[index].style.display = 'none'; 
    }
  });
}

function prevImg() {
  imagemAtiva = (imagemAtiva === 0) ? imagens.length - 1 : imagemAtiva - 1;
  atualizarImagem();
}


function nextImg() {
  imagemAtiva = (imagemAtiva === imagens.length - 1) ? 0 : imagemAtiva + 1;
  atualizarImagem();
}


atualizarImagem();


