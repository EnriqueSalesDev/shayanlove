const envelope = document.getElementById("envelope");
const botao = document.getElementById("botaoAbrir");
const musica = document.getElementById("musica");

botao.addEventListener("click", () => {
  envelope.classList.add("aberto");
  botao.classList.add("escondido");
  musica.volume = 0;
  musica.play();

  let vol = 0;
  const fadeIn = setInterval(() => {
    vol += 0.05;
    musica.volume = Math.min(vol, 0.6); // sobe até 60% do volume
    if (vol >= 0.6) clearInterval(fadeIn);
  }, 150);
});

// também permite abrir clicando diretamente no envelope
envelope.addEventListener("click", () => {
  if (!envelope.classList.contains("aberto")) {
    envelope.classList.add("aberto");
    botao.classList.add("escondido");
    musica.volume = 0;
    musica.play();

    let vol = 0;
    const fadeIn = setInterval(() => {
      vol += 0.05;
      musica.volume = Math.min(vol, 0.6); // sobe até 60% do volume
      if (vol >= 0.6) clearInterval(fadeIn);
    }, 150);
  }
});
