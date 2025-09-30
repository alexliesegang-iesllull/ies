  // Obtener los valores de los inputs




function multiplicar() {
    const n1 = parseFloat(document.getElementById("num1").value) || 0;
    const n2 = parseFloat(document.getElementById("num2").value) || 0;
  // Realizar la multiplicación
   const resultado1 = n1 * n2;
  document.getElementById("resultado1").innerText = resultado1;
};


function dividir1() {
    const n3 = parseFloat(document.getElementById("num3").value) || 0;
    const n4 = parseFloat(document.getElementById("num4").value) || 0;
    // Realizar la división
    const resultado2 = n3 / n4;
  document.getElementById("resultado2").innerText = resultado2;
};

function dividir2() {
    const n5 = parseFloat(document.getElementById("num5").value) || 0;
    const n6 = parseFloat(document.getElementById("num6").value) || 0;
    // Realizar la división
    const resultado3 = n5 / n6;
  document.getElementById("resultado3").innerText = resultado3;
};

