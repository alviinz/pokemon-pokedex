

const botaoAlterarTema = document.getElementById("botão_mudar_tema");

const body = document.querySelector("body");

const imagembotaoAlterarTema = document.querySelector(".imagem_botão");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivado = body.classList.contains("modo-escuro");


    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivado) {
        imagembotaoAlterarTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagembotaoAlterarTema.setAttribute("src", "./src/imagens/moon.png");
    }
});