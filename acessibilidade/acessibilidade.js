// Documento jJavaScript

function tamanhoTexto(opcao){
var p = document.getElementsByTagName( "p");
var eu;
tamanhoAtual = parseInt(p[0].style.fontSize);
     
       
 //aumentando o tamanho da fonte      
 
 if(opcao=="a"){
for (i = 0; i < p.length; i++) {
if(tamanhoAtual<30)
p[i].style.fontSize = (tamanhoAtual+ 1)+"px";

}
tamanhoAtual= tamanhoAtual+1;
}else if(opcao=="d"){

if(tamanhoAtual>8){
for (i = 0; i < p.length; i++) {
p[i].style.fontSize = (tamanhoAtual-1)+" px";
}
tamanhoAtual= tamanhoAtual-1;
}
}else{
para (i = 0; i < p.length; i++) {
p[i].style.fontSize = 12+"px";

}

}

}

// função responsável por trocar a cor de fundo ou texto, sendo baseada em uma flag
function trocaCor(flag) {
var p = document.getElementsByTagName( "p");
if(flag == "bg") {
/* Explicar como manipular os elementos (no exemplo de 'body') sem precisar definir um ID */
var body=document. obterElementosPorNomeDaTag('corpo')[ 0];
corpo.bgColor = document.getElementsByName(" cor")[0].valor;
//document.getElementById("bg" ).bgColor = document.getElementsByName(" cor")[0].value;
} senão if(flag == "txt"){
para (i = 0; i < p.length; i++) {
document.getElementsByTagName( 'p')[i].style.color = document.getElementsByName(" cor" )[1].valor;
}
}
}
