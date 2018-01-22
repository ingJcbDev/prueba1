/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function controlColesterol(sel) {
	alert('Esto esta llegando: '+sel.value); 
	if (sel.value==="si"){ 
		// divC = document.getElementById("nCuenta"); divC.style.display = ""; 
		divT = document.getElementById("divControlada"); divT.style.display = ""; 

	}else{ 
		// divC = document.getElementById("nCuenta"); divC.style.display="none"; 
     	divT = document.getElementById("divControlada"); divT.style.display = "none"; 
} }
