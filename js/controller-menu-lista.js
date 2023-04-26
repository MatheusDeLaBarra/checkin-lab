var dropdown = document.querySelector('.lista-suspensa');
var dropdownMenu = document.querySelector('.menu__lista-suspensa');

dropdown.addEventListener('mouseover', function(event) {
  dropdownMenu.style.display = 'block';
  var target = event.target;
  if (target.tagName === "A") {
    var icone = target.firstElementChild;
    icone.style.backgroundImage = "url(../assets/src/img/ico/icons8-divisa-circulada-à-abaixo-50-2.png)"; /* altera a imagem de fundo do ícone */
  }else if (target.tagName === "I") {
    var icone = target;
    icone.style.backgroundImage = "url(../assets/src/img/ico/icons8-divisa-circulada-à-abaixo-50-2.png)"; /* altera a imagem de fundo do ícone */
  }
});

dropdown.addEventListener('mouseout', function(event) {
  dropdownMenu.style.display = 'none';
  var target = event.target;
  if (target.tagName === "A") {
    var icone = target.firstElementChild;
    icone.style.backgroundImage = "url(../assets/src/img/ico/icons8-divisa-circulada-à-abaixo-50.png)"; /* retorna à imagem de fundo padrão do ícone */
  }else if (target.tagName === "I") {
    var icone = target;
    icone.style.backgroundImage = "url(../assets/src/img/ico/icons8-divisa-circulada-à-abaixo-50.png)"; /* retorna à imagem de fundo padrão do ícone */
  }
});