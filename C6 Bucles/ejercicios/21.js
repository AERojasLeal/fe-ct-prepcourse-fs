function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var i=1;
  while(i<=7){
    if(Math.pow(2,i) == numero) return true;
    i++;
  }
      return false;
}

module.exports = esPotenciaDeDos;
