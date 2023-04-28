function checkFibonacci(numero) {
  let a = 0, b = 1, resultado = 0;
  while (resultado < numero) {
    resultado = a + b;
    a = b;
    b = resultado;
  }
  if (resultado === numero) {
    console.log(numero + " Existe na sequência de Fibonacci.");
  } else if  (numero == null) {
    console.log(" Adicione um valor.");
  }else {
    console.log(numero + " Não existe na sequência de Fibonacci.");
  }

}
checkFibonacci();

