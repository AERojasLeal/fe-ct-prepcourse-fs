function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var producto = 1;
  var i=a;
  while(i<=b){
    producto*=i;
    i++;
  }
  return producto;
}

module.exports = productoEntreNúmeros;