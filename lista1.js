const botaoEx1 = document.getElementById("Ex1");
botaoEx1.addEventListener("click",Ex1);

const botaoEx2 = document.getElementById("Ex2");
botaoEx2.addEventListener("click",Ex2);

const botaoEx3 = document.getElementById("Ex3");
botaoEx3.addEventListener("click",Ex3);

const botaoEx4 = document.getElementById("Ex4");
botaoEx4.addEventListener("click",Ex4);

const botaoEx5 = document.getElementById("Ex5");
botaoEx5.addEventListener("click",Ex5);

const botaoEx6 = document.getElementById("Ex6");
botaoEx6.addEventListener("click",Ex6);

const botaoEx7 = document.getElementById("Ex7");
botaoEx7.addEventListener("click",Ex7);

const botaoEx8 = document.getElementById("Ex8");
botaoEx8.addEventListener("click",Ex8);

function Ex1(){
let numero1 = parseFloat(prompt("Digite um número: "));
let numero2 = parseFloat(prompt("Digite outro número: "));
let resultado1 = numero1 + numero2;
alert("A soma dos dois números é: " + resultado1);
}

function Ex2(){
let nome1 = prompt("Digite o seu nome: ");
let nome2 = prompt("Digite o seu sobrenome: ");
alert("Olá " + nome1 +" "+ nome2);
}

function Ex3(){
let valor1 = parseFloat(prompt("Digite um valor em Real: "));
let precoDolar = valor1 * 5.25;
let arredondado = Math.round( precoDolar);
alert("Seu dinheiro em dólar é: US$" + arredondado);
}

function Ex4(){
let numero = parseFloat(prompt("Digite um númeo para saber qual é o antecessor e o sucessor: "));
let antecessor = numero - 1;
let sucessor = numero + 1;
alert("O antecessor é " + antecessor + " e o sucessor é " + sucessor);
}

function Ex5(){
let largura = parseFloat(prompt("Me diga qual a largura do seu terreno (em metros quadrados): "));
let tamanho = parseFloat(prompt("Agora me diz qual o tamanho do seu terreno (em metros quadrados): "));
let tamanhoGeral = largura * tamanho;
let valorDoTerreno = parseFloat(prompt("Quanto vale o metro quadrado do seu terreno?:"));
let precoTerreno =Math.round(tamanhoGeral * valorDoTerreno);
alert("Seu terreno vale: " + precoTerreno + "R$");
}

function Ex6(){
let distancia = prompt("Qual foi a distancia percorrida nessa viagem?: ");
let gasolina = prompt("Quanto de gasolna você ultilizou nessa viagem?: ");
let custoViagem = Math.round(distancia / gasolina);
alert("Nessa viagem voce ultilizou: " + custoViagem + "KmL");
}

function Ex7(){
let nota1 = parseFloat(prompt("Quanto voê tirou no primeiro bimestre?: "));
let nota2 = parseFloat(prompt("Quanto voê tirou no segundo bimestre?: "));
let nota3 = parseFloat(prompt("Quanto voê tirou no terceiro bimestre?: "));
let nota4 = parseFloat(prompt("Quanto voê tirou no quarto bimestre?: "));
let media = nota1 + nota2 + nota3 + nota4;
let arredondado2 = Math.round( media /4 );
alert("sua media final é " + arredondado2);
}

function Ex8(){
let Fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
let Celsius = (Fahrenheit - 32) / 1.8;
let arredondado3 = Math.round(Celsius);
alert("A temperatura em " + Fahrenheit + " fahrenheit convertida para celsios é " + arredondado3);
}
