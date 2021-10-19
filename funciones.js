function multiplicar(num1, num2) {
  const resultado = num1 * num2;
  if (num1 === 0 || num2 === 0) {
    return 0;
  } else {
    return resultado;
  }
}

function division(dividendo, divisor) {
  const resultado = dividendo / divisor;
  if (divisor === 0) {
    return "No se puede dividir por cero";
  } else {
    return resultado;
  }
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}
