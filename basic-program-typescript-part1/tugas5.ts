function hitungLuasPermukaanTabung(r: number, tinggi: number): number {
  const pi = 3.14159;
  const luasPermukaan = 2 * pi * r * (r + tinggi);
  return luasPermukaan;
}

// output
const jariJari = 4;
const tinggiTabung = 20;
const luasPermukaanTabung = hitungLuasPermukaanTabung(jariJari, tinggiTabung);
console.log(`Luas permukaan tabung: ${luasPermukaanTabung} cm^2`);
