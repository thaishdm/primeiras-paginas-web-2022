function botaoQuero(x) {
  x.classList.toggle("selecionado");
}

function exibirTodos(){
    document.getElementById("carnes").style.display = "block"
    document.getElementById("japan").style.display = "block"
    document.getElementById("bebidas").style.display = "block";
}

function exibirCarnes() {
    document.getElementById("carnes").style.display = "block"
    document.getElementById("japan").style.display = "none"
    document.getElementById("bebidas").style.display = "none";
}

function exibirJapan(){
    document.getElementById("japan").style.display = "block"
    document.getElementById("carnes").style.display = "none"
    document.getElementById("bebidas").style.display = "none";
}

function exibirBebidas(){
    document.getElementById("bebidas").style.display = "block"
    document.getElementById("carnes").style.display = "none"
    document.getElementById("japan").style.display = "none";
}








  
