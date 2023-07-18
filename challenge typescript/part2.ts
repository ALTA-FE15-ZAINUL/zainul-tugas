function ubahHuruf(text: string): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shiftedAlphabet = "KLMNOPQRSTUVWXYZABCDEFGHIJ";

  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toUpperCase();
    const index = alphabet.indexOf(char);

    if (index !== -1) {
      const encryptedChar = shiftedAlphabet[index];
      encryptedText += encryptedChar;
    } else {
      encryptedText += char;
    }
  }

  return encryptedText;
}

// Untuk melakukan enkripsi

console.log(ubahHuruf("SEPULSA OKE")); //COZEVCK YUO
console.log(ubahHuruf("ALTERA ACADEMY")); //KVDOBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); //SXNYXOCSK     
console.log(ubahHuruf("GOLANG")); //QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); //ZBYQBKWWOB
