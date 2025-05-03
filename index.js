var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = windows.document.getElementyByid("Leonardo")
var Samantha = windows.document.getElementyByid("Samantha")
var Bruna = windows.document.getElementyByid("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display.flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"

}

function RolarParaEsquerda(){
    Leonardo.style ="display: flex"
    Bruna.style ="display.none"
    setaDireita.style = "display:flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}