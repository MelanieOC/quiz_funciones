function capicua(n) {
  var alreves = n.toString().split('').reverse().join('');
  return (n==alreves)?'es capicua':'no es capicua';
}

function potencia(n,m) {
  var res = 1;
  for(var i = 0; i < m; i++){
    res *= n;
  }
  return res;
}

function contandoCaracteres(array, caracter) {
  var res= 0;
  array.forEach(function(a) {
    var contar = a.split('');
    for(i in contar){
      if(contar[i]==caracter){
        res++
      }
    }
  })
  return res;
}

function cuantasPalabras(palabra) {
  return palabra.split(' ').length;
}

function masLargo(array) {
  return Math.max(...array.map(a => a.length));
}

function contarVocales(array) {
  var vocales = 'aeiou';
  var res= 0;
  array.forEach(function(a) {
    var contar = a.split('');
    for(i in contar){
      if(vocales.indexOf(contar[i])!= -1){
        res++
      }
    }
  })
  return res;
}

function contarImpares(n,m) {
  var res = 0;
  var i=n;
  while (i<=m) {
    res += i;
    if(!i%2){
      i++;
    }else{
      i+=2;
    }
  }
  return res;
}

function palabraMasLarga(array) {
  var largo = Math.max(...array.map(a => a.length));
  return array.filter(a=> a.length == largo).join('');
}

function reverso(string) {
  return string.split('').reverse().join('');
}

function figura(n) {
  var res = [];
  var subguion = '';
  var comillas = '';
  for (var i= 0; i < n; i++){
      subguion+='_';
      comillas += "'";
      res.push(comillas + '\\');
      res.push(subguion + '/');
  }
  return res.reverse().join('');

}
//console.log(contandoCaracteres(['murcielago', 'pato','caballo', 'zebra'],'a'));
//console.log(cuantasPalabras('El mundo es tan cruel'));
//console.log(masLargo(['gato','Perro','Cocodrilo','leon']));
//console.log(contarVocales(['ojo','mouse','lapiz']));
//console.log(contarImpares(1,7));
//console.log(palabraMasLarga(['jirafa','leon','gato','murcielago','rata']));
//console.log(reverso('roma'));
//console.log(capicua(1234554321));
//console.log(figura(4));
