function playWithAsterik(tinggi: number): void {
    for (let i = 1; i <= tinggi; i++) {
      let baris = "";
      for (let j = 1; j <= tinggi - i; j++) {
        baris += " ";
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        baris += "*";
      }
      console.log(baris);
    }
  }
  
  const tinggiSegitiga: number = 5;
  playWithAsterik(tinggiSegitiga);
  