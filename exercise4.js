function totalDigitRekursif(angka) {
    var ubah = String(angka)
    var potong = ubah.slice(1)
    if(angka.length === 0){
       return 0
    }
    else{       
        return Number(ubah[0]) + Number(totalDigitRekursif(potong))
    }
}
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5