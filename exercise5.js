function kaliTerusRekursif(angka) {
  let ubah = angka.toString()
  let hasil = 1
  if (ubah.length === 1) {
      return ubah
  } else {
      for (let i = 0; i < ubah.length; i++) {
          hasil *= ubah[i]
      }
      return kaliTerusRekursif(String(hasil))
  }
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6