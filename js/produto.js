var inputTamanho = document.getElementById("tamanho");
var outputTamanho = document.getElementById('valortamanho');


function mostraTamanho(){
    outputTamanho.value = inputTamanho.value;
    
}

inputTamanho.oninput = mostraTamanho