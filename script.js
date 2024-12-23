let valorBarra = document.querySelector('.valor_barra');
let barra = document.querySelector('.barra');

let valorAtualBarra = 0;
let valorFinalBarra = 100;

let progresso = setInterval(()=> {
  valorAtualBarra++;
  valorBarra.textContent = `${valorAtualBarra}%`;
  barra.style.background = `conic-gradient(rgb(78,236,20)${valorAtualBarra * 3.6}deg, rgb(230, 224, 224) 0deg)`
    if(valorAtualBarra == valorFinalBarra){
      clearInterval(progresso)
    };
},80);