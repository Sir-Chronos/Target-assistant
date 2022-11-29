
const tela_principal = document.getElementById('tela-principal');
const tela_zoom = document.getElementById('tela-zoom');
const tela_coordenadas = document.getElementById('tela-coordenadas');
const tela_pontos = document.getElementById('pontos');
const tela_programa = document.getElementById('programa');
var coord_x = 0;
var coord_y = 0;
var type = 1;
var cooldown = 0;
var posicao = 1;
////////////////////////////////////////////////////////////////////////////////
// Troca a imagem dentro da tela
function changeFile() {
  const image = document.querySelector('img');
  const file = document.getElementById('img-input').files[0];
  const reader = new FileReader();

     
  // convert image file to base64 string
  reader.addEventListener("load", () => {image.src = reader.result;}, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
///////////////////////////////////////////////////////////////////////////////
//Imprime as coordenadas atuais e as salva em na VAR coord_x e coord_y.
tela_principal.addEventListener('mousemove', (pos) => {
  var coordenadas = {
    X: pos.offsetX,
    Y: pos.offsetY
  }
  Coordenadas_atual(coordenadas.X, coordenadas.Y)
})
function Coordenadas_atual (x, y) {
  x = (x * 0.2645833333) - 100
  y = y * 0.2645833333 + 250
  coord_x = y;
  coord_y = x*-1;

  tela_coordenadas.innerHTML = `<p>Coordenada atual:</p><p>X:${coord_x.toFixed(2)}, Y:${coord_y.toFixed(2)}</p>`
}
///////////////////////////////////////////////////////////////////////////////
//Imprime o ponto atual ao clicar e o tipo de movimento.
tela_principal.addEventListener('click', () => {
  posicao++
  tela_pontos.innerHTML += `<p>P${posicao}=(${coord_x.toFixed(2)},${coord_y.toFixed(2)},200,0,180)</p>`

  if (type == 0){
    tela_programa.innerHTML += `<p>MOV P${posicao}</p>`
  }
  else if (type == 1){
    tela_programa.innerHTML += `<p>MVS P${posicao}</p>`
  }
  else {
    if (cooldown == 0){
    pos1 = posicao + 1;
    pos2 = posicao + 2;
    tela_programa.innerHTML += `<p>MVR P${posicao},P${pos1},P${pos2}</p>`
    cooldown = 2;
    }
    else {
      cooldown--;
    }
  }
}
)
///////////////////////////////////////////////////////////////////////////////
//Funções de seleção de movimento
function mov (){
  type = 0;
  document.getElementById('mov').style.backgroundColor="red";
  document.getElementById('mvs').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('mvr').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('afastamento').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('aproximacao').style.backgroundColor="rgb(110, 110, 110)";
}
function mvs (){
  type = 1;
  document.getElementById('mov').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('mvs').style.backgroundColor="green";
  document.getElementById('mvr').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('afastamento').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('aproximacao').style.backgroundColor="rgb(110, 110, 110)";
}
function mvr (){
  type = 2;
  document.getElementById('mov').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('mvs').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('mvr').style.backgroundColor="blue";
  document.getElementById('afastamento').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('aproximacao').style.backgroundColor="rgb(110, 110, 110)";
}
function afastamento (){
  tela_programa.innerHTML += `<p>MVS P${posicao}, -50</p>`;
  document.getElementById('mov').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('mvs').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('mvr').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('afastamento').style.backgroundColor="yellow";
  document.getElementById('aproximacao').style.backgroundColor="rgb(110, 110, 110)";
}
function aproximacao (){
  aprox_point = posicao + 1;
  tela_programa.innerHTML += `<p>MVS P${aprox_point}, -50</p>`;
  document.getElementById('mov').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('mvs').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('mvr').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('afastamento').style.backgroundColor="rgb(110, 110, 110)";
  document.getElementById('aproximacao').style.backgroundColor="yellow";
}
///////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////
  console.log('Programador e idealizador: Gabriel Vieira Teodoro')
  console.log('Programador: Diogo Mello da Crus')