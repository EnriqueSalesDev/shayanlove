const envelope = document.getElementById("envelope");
const botao = document.getElementById("botaoAbrir");

botao.addEventListener("click", () => {
  envelope.classList.add("aberto");
  botao.classList.add("escondido");
});

// também permite abrir clicando diretamente no envelope
envelope.addEventListener("click", () => {
  if (!envelope.classList.contains("aberto")) {
    envelope.classList.add("aberto");
    botao.classList.add("escondido");
  }
});
