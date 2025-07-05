const menu = document.getElementById('menu');
const nav = document.getElementById('navbar');

menu.addEventListener('click', () => {
  nav.classList.toggle('ativo')
});

document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('ativo');
  });
});


//frases automáticas
const frases = [
  "Aumente suas vendas online",
  "Posicione sua marca nas redes sociais",
  "Alcance resultados reais com tráfego pago"
];

let i = 0; // frase atual
let j = 0; // letra atual
let deletando = false;

const el = document.getElementById("frase-automatica");

function digitar() {
  const frase = frases[i];

  if (!deletando) {
    // digitando normalmente
    el.textContent = frase.substring(0, j++);
    
    if (j <= frase.length) {
      setTimeout(digitar, 60); // velocidade de digitação
    } else {
      // pausa após escrever tudo
      setTimeout(() => {
        deletando = true;
        digitar();
      }, 2000);
    }
  } else {
    // apagando
    el.textContent = frase.substring(0, j--);
    
    if (j >= 0) {
      setTimeout(digitar, 30); // velocidade de apagar
    } else {
      // próxima frase
      deletando = false;
      i = (i + 1) % frases.length;
      setTimeout(digitar, 500); // pausa antes da próxima
    }
  }
}

digitar();


