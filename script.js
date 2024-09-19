async function previsao() {
  try {
    const gato = await fetch(
        'https://api.thecatapi.com/v1/images/search'
    );
    const dadosGato= await gato.json();
    console.log(dadosGato);
    const gerarImagemGato = document.createElement('img')
    document.body.appendChild(gerarImagemGato)
    gerarImagemGato.src= dadosGato[0].url
    gerarImagemGato.style.width= "300px"
    gerarImagemGato.style.flex = '1 1 auto'
  } catch (erro) {
    console.log("erro", erro);
  }
}

previsao();
