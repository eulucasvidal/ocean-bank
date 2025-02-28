export default function initPerguntas(){
  const perguntas = document.querySelectorAll(".perguntas button");

  function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativo');
    const ativa = resposta.classList.contains("ativo")
    pergunta.setAttribute("aria-expanded", "false");
  }

  function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
  }

  perguntas.forEach(eventosPerguntas);
}