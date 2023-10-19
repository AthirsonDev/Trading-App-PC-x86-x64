const button = document.querySelector('.changeColor')
const textColor = document.querySelector('.color')
function randomColorrgb(){
    let r = Math.floor(Math.random()* 257)
    let g = Math.floor(Math.random()* 257)
    let b = Math.floor(Math.random()* 257)
    let color = `rgb(${r},${g},${b})`
    return color
}
function randomColorhex(){
    let letters = '0123456789ABCDEF'; // caracteres possíveis para uma cor hexadecimal
    let color = '#'; // inicia a string da cor com '#'
    for (let i = 0; i < 6 ; i++){
      color += letters[Math.floor(Math.random()*16)]; // adiciona um caractere aleatório à string da cor
    }
    return color; // retorna a cor gerada
  }
button.addEventListener('click', ()=>{
  let color = randomColorrgb();
  document.documentElement.style.setProperty('--bg-color', color);
  textColor.textContent = color
})
