function hitungLuasSegitiga(alas: number, tinggi: number): number {
  const luas = (alas * tinggi) / 2;
  return luas;
}

// output
const alas = 20;
const tinggi = 25;
const luasSegitiga = hitungLuasSegitiga(alas, tinggi);
console.log(`Luas segitiga: ${luasSegitiga} cm^2`);
