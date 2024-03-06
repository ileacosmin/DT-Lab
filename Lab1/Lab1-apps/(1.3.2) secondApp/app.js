document.getElementById("plus").addEventListener('click',plus );
document.getElementById("minus").addEventListener('click',minus );
document.getElementById("ori").addEventListener('click',ori );
document.getElementById("supra").addEventListener('click',supra );
function plus(){
	var inputNumber1 = parseInt(document.getElementById("n").value );
	var inputNumber2 = parseInt(document.getElementById("m").value );

	document.getElementById("label").innerHTML=inputNumber1+inputNumber2;
}
function minus(){
	var inputNumber1 = parseInt(document.getElementById("n").value );
	var inputNumber2 = parseInt(document.getElementById("m").value );

	document.getElementById("label").innerHTML=inputNumber1-inputNumber2;
}
function ori(){
	var inputNumber1 = parseInt(document.getElementById("n").value );
	var inputNumber2 = parseInt(document.getElementById("m").value );

	document.getElementById("label").innerHTML=inputNumber1*inputNumber2;
}
function supra() {
	var inputNumber1 = parseInt(document.getElementById("n").value );
	var inputNumber2 = parseInt(document.getElementById("m").value );

	document.getElementById("label").innerHTML=inputNumber1/inputNumber2;
}
 function sum(n){
	if (typeof n === 'undefined') return "n is undefined ";
	if (typeof n !== 'number' || isNaN(n)) return "n is not a number ";
	var sum = 0;
	for(var i=1;i<=n;i++){
		sum+=i;
	}
	return sum;
 }
 function getFibonacci(n) {
	 if (typeof n === 'undefined') return "n is undefined ";
	 if (typeof n !== 'number' || isNaN(n)) return "n is not a number is a bool ";
	 var a = 0;
	 var b= 1;
	 var c = 0;

	 console.log(a);
	 console.log(b);
	 for(var i=1;i<=n;i++){
		 c = a + b;
		 console.log( c );
		 a = b;
		 b = c;
	 }
 }