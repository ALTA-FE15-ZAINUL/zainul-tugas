function caesarCipher(offset: number, input: string): string {
  const abjad = 26;
  const nilai = offset % abjad;
  let dataString = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === " ") {
      dataString += " ";
      continue;
    }

    const konversi = char.charCodeAt(0);
    let kodeKonversi = konversi + nilai;

    if (kodeKonversi > 122) {
      kodeKonversi -= abjad;
    }

    const karakter = String.fromCharCode(kodeKonversi);
    dataString += karakter;
  }

  return dataString;
}

// Output
console.log(caesarCipher(3, "abc")); //def
console.log(caesarCipher(2, "alta")); //cnvc
console.log(caesarCipher(10, "alterraacademy")); //kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); //bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz")); //mnopqrstuvwxyzabcdefghijkl
