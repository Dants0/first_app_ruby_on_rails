
function sum(a, b) {
    return a + b;
}


function resultado() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const showResult = document.getElementById('showResult')
  
    if (!isNaN(n1) && !isNaN(n2)) {
      showResult.innerText = sum(n1, n2)
    } else {
      alert('Por favor, insira números válidos.');
    }
  }
  