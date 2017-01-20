window.onload=manejarClics;

var cifra1="";

function manejarClics() {
	var n1=document.getElementById("1");
	n1.addEventListener("click",function() {
								clicEn("1");
								});
	var n2=document.getElementById("2");
	n2.addEventListener("click",function() {
								clicEn("2");
								});
	var n3=document.getElementById("3");
	n3.addEventListener("click",function() {
								clicEn("3");
								});
	var n4=document.getElementById("4");
	n4.addEventListener("click",function() {
								clicEn("4");
								});
	var n5=document.getElementById("5");
	n5.addEventListener("click",function() {
								clicEn("5");
								});
	var n6=document.getElementById("6");
	n6.addEventListener("click",function() {
								clicEn("6");
								});
	var n7=document.getElementById("7");
	n7.addEventListener("click",function() {
								clicEn("7");
								});
	var n8=document.getElementById("8");
	n8.addEventListener("click",function() {
								clicEn("8");
								});
	var n9=document.getElementById("9");
	n9.addEventListener("click",function() {
								clicEn("9");
								});
	var n0=document.getElementById("0");
	n0.addEventListener("click",function() {
								clicEn("0");
								});
    var mas =document.getElementById("mas");
	mas.addEventListener("click",function() {
								clicEn("+");
								});
	var menos=document.getElementById("menos");
	menos.addEventListener("click",function() {
								clicEn("-");
								});
	var por=document.getElementById("por");
	por.addEventListener("click",function() {
								clicEn("*");
								});
	var divi=document.getElementById("dividido");
	divi.addEventListener("click",function() {
								clicEn("/");
								});
	var igual=document.getElementById("igual");
	igual.addEventListener("click",calcular);

	var punto=document.getElementById("punto");
	punto.addEventListener("click",function() {
								clicEn(".");
								});
	var elimina=document.getElementById("on");
	elimina.addEventListener("click",eliminar);
}

function clicEn(num){
				if (num="0") {
					cifra1=0;
				} else {
					cifra1+=num;
	        var pan=document.getElementById("display");
				}
			pan.innerHTML=cifra1;
}

function calcular()	{
	var rta=eval(cifra1);
	var pan=document.getElementById("display");
	pan.innerHTML=rta;
}

function eliminar(){
	var total= eval(cifra1="0")
	var pan=document.getElementById("display");
	pan.innerHTML=total;
}

function borrar(){
	var bor=document.getElementById("display");
//	var eli= cifra1.slice(0,-1);
	cifra1=0;
	bor.innerHTML=cifra1;
}
