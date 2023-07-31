let numeros = [];

for (let i = 1; i <= 100; i++) {
  if(i % 3 == 0 && i % 5 == 0){
    numeros.push("fizzbuzz");
  }else{
    if(i % 3 == 0){
      numeros.push("fizz");
    }else{
      if(i % 5 == 0){
        numeros.push("buzz");
      }else{
        numeros.push(i.toString());
      }
    }
  }
}

console.log(numeros);

