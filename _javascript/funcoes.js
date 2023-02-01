
let btnportfolio = document.querySelector('#btportfolio');
let btnsobre = document.querySelector('#btsobre');
let secaoPortfolio = document.querySelector("#secao-portfolio")
let secaoSobre = document.querySelector('#secao-sobre')

btnsobre.addEventListener('click',aparecerSecaoSobre)
btnportfolio.addEventListener('click',aparecerSecaoPortfolio);
secaoSobre.classList.add('desaparecer');

function aparecerSecaoPortfolio(){
  secaoPortfolio.classList.remove('desaparecer');
  secaoSobre.classList.add('desaparecer');
  secaoPortfolio.innerHTML = ('<iframe src="portfolio.html" id="portfolio" heigh"100%"  scrolling="no"></iframe>');
}

function aparecerSecaoSobre(){
  secaoSobre.classList.remove('desaparecer');
  secaoPortfolio.classList.add('desaparecer');
  secaoSobre.innerHTML = ('<iframe src="sobre.html" id="sobre-mim" scrolling="no"></iframe>');
}