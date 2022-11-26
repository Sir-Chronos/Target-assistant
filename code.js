const box = document.getElementById('box');
const Coordenadas = document.getElementById('coordenadas');
const programa = document.getElementById('prog')
var move_type = ['MOV','MVS','MVR'];
var move = 0;
var posicao = 1;

// Troca a imagem dentro da tela
function changeFile() {
  const image = document.querySelector('img');
  const file = document.getElementById('img-input').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    image.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

// Verifica se houve um clique e se sim, grava as coordenadas.
box.addEventListener('click', (position) => {
  var coordenadas = {
    X: position.offsetX,
    Y: position.offsetY
  }

  converterCoordenadas(coordenadas.X, coordenadas.Y)
})

//Converte as coordenadas de px pra mm.
function converterCoordenadas (x, y) {
  posicao++;
  x = x * 0.2645833333
  y = y * 0.2645833333

  Coordenadas.innerHTML += `<p>P${posicao} = (${x.toFixed(2)}, ${y.toFixed(2)}, 200, 0, 180)</p>`

  //Verifica o move type (MOV,MVS ou MVR) e o imprime.
  if(move < 2){
    programa.innerHTML += `<p>${move_type[move]} P${posicao}</p>`
  }
  //Imprime o MVR
  else if (move == 2) {
    let pos1 = posicao + 1;
    let pos2 = posicao + 2;

    programa.innerHTML += `<p>${move_type[move]} P${posicao},P${pos1},P${pos2}</p>`;
    move = 4;
  }
  else {
    move--
  }
}
function type0() {
  move = 0;
}
function type1() {
  move = 1;
}
function type2() {
  move = 2;
}






console.log('Designer: Gabriel Vieira Teodoro')
console.log('Programador: Diogo Mello da Crus')