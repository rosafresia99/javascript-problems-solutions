const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateSquareRoot(x) {
  if (x < 0) {
    console.log("Tidak bisa input bilangan negatif");
  } else if (x % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
  } else {
    console.log(`Akar pangkat 2 dari ${x} adalah ${Math.sqrt(x)}`);
  }
}

readline.question('Masukkan bilangan genap: ', number => {
  const x = parseInt(number, 10);
  calculateSquareRoot(x);
  readline.close();
});
